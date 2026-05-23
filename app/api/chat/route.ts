import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "public/data/about-me.md");

const file = await fs.readFile(filePath, "utf8");

const fallbackMessages = [
  "Sorry 😭 I hit my free-tier limit. Try again in a few seconds.",
  "Okay Gemini told me to calm down for a few seconds 😅",
  "My AI budget said ‘that’s enough for today’ 💀",
  "brb waiting for my free credits to respawn",
  "The free tier is bullying me again 😭",
  "Oops 😅 I ran out of AI juice for a moment.",
  "My chatbot is currently operating on a student budget 💸",
  "I asked too many questions to the AI gods apparently.",
  "The free tier tapped me on the shoulder and said ‘take a break’ 😭",
  "One sec 😅 my AI allowance just ran out.",
];

const systemPrompt = `
You are Rohit chatting on his portfolio website.

Rules:
- Be natural and conversational
- Keep answers concise
- Use previous conversation naturally
- Do not repeat greetings
- Do not overreact
- If context is unclear, ask briefly
- Never invent fake experience

About Rohit:
${file}
`;

function getRandomFallbackMessage() {
  return fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)];
}

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const openRouter = createOpenRouter({
  apiKey: process.env.OPEN_ROUTER_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { chatHistory } = await req.json();

    try {
      console.log("Trying Gemini");
      const { text } = await generateText({
        model: google("gemini-2.5-flash"),
        system: systemPrompt,
        messages: chatHistory,
        temperature: 0.5,
      });
      return Response.json({ text });
    } catch (geminiError) {
      console.error("Gemini failed:", geminiError);
      console.log("Trying OpenRouter");

      const { text } = await generateText({
        model: openRouter.chat("openai/gpt-oss-20b:free"),
        system: systemPrompt,
        messages: chatHistory,
        temperature: 0.5,
      });

      return Response.json({ text });
    }
  } catch (error) {
    console.error(error);

    return Response.json({
      text: getRandomFallbackMessage(),
    });
  }
}
