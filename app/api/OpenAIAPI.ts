import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { headers } from '@/app/api/httpUtils';

const openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export const runtime = 'edge';

export interface ChatBotConfig {
  model: string;
  initMessages: any[]
}

// Hàm escape Markdown
function escapeMarkdown(content: string): string {
  return content
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/#/g, '\\#')
    .replace(/-/g, '\\-')
    .replace(/\*/g, '\\*')
    .replace(/_/g, '\\_')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

export async function createChatBotAPIHandler(config: ChatBotConfig, req: Request) {
  const { messages } = await req.json();

  const escapedMessages = config.initMessages.map((msg: { role: string; content: string }) => ({
    ...msg,
    content: escapeMarkdown(msg.content),
  }));

  const response: any = await openaiClient.chat.completions.create({
    model: config.model,
    stream: true,
    messages: [...escapedMessages, ...messages],
    temperature: 1,
    top_p: 1
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream, { headers })
}