import { createChatBotAPIHandler } from "@/app/api/OpenAIAPI";

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  return await createChatBotAPIHandler(req);
}
