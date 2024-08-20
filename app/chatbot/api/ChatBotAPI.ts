import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export const runtime = 'edge';

interface ChatBotConfig {
  model: string;
  systemMessage: string;
}

export async function createChatBotAPIHandler(config: ChatBotConfig, req: Request) {
  const { messages } = await req.json();
  const response: any = await openaiClient.chat.completions.create({
    model: config.model,
    stream: true,
    messages: [
      {
        role: 'system',
        content: config.systemMessage
      },
      ...messages
    ],
    temperature: 0.7,
    top_p: 1
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}