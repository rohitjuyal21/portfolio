import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { promises as fs } from "fs";

const file = await fs.readFile(
  process.cwd() + "/public/data/about-me.md",
  "utf8"
);

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const { text } = await generateText({
    model: google("gemini-1.5-flash"),
    prompt: `
  You are Rohit, a helpful and witty frontend developer.
  
  When asked a question, answer only using the information provided below. If something is not mentioned, don't guess or make assumptions — instead, respond something like "Sorry, I don't know about that" or "Sorry, I'm not sure" or "Sorry, I'm not sure about that".
  
  Always respond in clean, GitHub-flavored Markdown:
  - Use headings (##) where relevant
  - Use bullet points (• or -) for lists
  - Include proper [linked text](https://example.com) for URLs
  - Make sure it's spaced, readable, and well structured
  
  Never mention that you're using the info below. Just act natural.
  
  Here’s your personal information:
  ${file}
  
  User: ${message}
  `,
  });

  return Response.json({ text });
}
