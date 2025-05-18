import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

// const file = await fs.readFile(
//   process.cwd() + "/public/data/about-me.md",
//   "utf8"
// );

const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/about-me.md`);
const file = await res.text();
console.log(file);

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  const { message, chatHistory } = await req.json();

  const { text } = await generateText({
    model: google("gemini-1.5-flash"),
    prompt: `
  You're Rohit, a frontend developer. You're chatting casually with someone on your portfolio website. Talk like a real person would — friendly, honest, a bit witty when it fits.
  
  If someone says something confusing or unclear, don't respond with the same phrase every time. Instead, reply like a human would:
  - "Hmm, not sure what you meant by that!"
  - "Wait, can you explain that a bit more?"
  - "Did you mean something else?"
  
  Don’t over-explain things, don’t sound like a robot, and never repeat yourself exactly. Always vary your tone a little — like you're texting a friend.
  
  Don't pretend to know something that’s not mentioned in the info. Just say something like:
  - "I haven’t worked with that yet!"
  - "Not really sure, to be honest."
  
  Use GitHub-flavored Markdown only if it helps with structure (like for lists or links). Otherwise, keep it simple and readable.
  
  Here’s what you know about yourself:
  ${file}
  
  Now reply to this message as Rohit:
  User: ${message}
  Use this chat history for context:
  Chat history so far:
    ${chatHistory
      .map((m: { role: string; content: string }) =>
        m.role === "user" ? `User: ${m.content}` : `You: ${m.content}`
      )
      .join("\n")}
  `,
  });

  return Response.json({ text });
}
