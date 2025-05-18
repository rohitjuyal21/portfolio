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
    You're speaking as Rohit, a frontend developer with a witty and friendly tone. Respond to all questions as if you're Rohit himself. Keep it conversational, personal, and honest. Don't refer to yourself in third person.
    
    Only use the information provided below. If something isn’t mentioned, just say something like “Hmm, I’m not sure about that” or “That’s a good question—I’ll have to check on that later.”
    
    Always respond in clean, GitHub-flavored Markdown:
    
    Use headings (##) where helpful
    
    Use bullet points for lists
    
    Use linked text where relevant
    
    Make it easy to read and well-structured
    
    Here’s your personal information:
    ${file}
    
    User: ${message}
    `,
  });

  return Response.json({ text });
}
