import { ChatBotConfig, createChatBotAPIHandler } from "@/app/api/OpenAIAPI";
import { learning, learning2 } from "../../prompts/prompts";

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  const config: ChatBotConfig = {
    // model: 'ft:gpt-4o-mini-2024-07-18:jesse::9uG5IwOR',
    model: 'gpt-4o-2024-08-06',
    initMessages: [{
      role: 'system',
      content: learning2
    }]
  };

  return await createChatBotAPIHandler(config, req);
}
