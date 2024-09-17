import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { headers } from '@/app/api/httpUtils';

export type Role = 'user' | 'system' | 'assistant' | 'function';

export interface MessageProps {
  role: Role;
  content: string;
}

const openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export const runtime = 'edge';

export interface ChatBotConfig {
  model: string;
  initMessages: any[]
}

export async function createChatBotAPIHandler(req: Request) {
  let { messages, config } = await req.json();
  const response: any = await openaiClient.chat.completions.create({
    model: config.model,
    stream: true,
    messages: [...config.initMessages, ...messages],
    temperature: 0.7,
    top_p: 1
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream, { headers })
}

