import { ChatBotConfig, createChatBotAPIHandler } from "@/app/api/OpenAIAPI";
import { Flirting_2 } from "../../prompts/prompts";

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  const config: ChatBotConfig = {
    // model: 'ft:gpt-4o-mini-2024-07-18:jesse::9uG5IwOR',
    model: 'gpt-4o-mini-2024-07-18',
    initMessages: [{
      role: 'system',
      content: Flirting_2
    }]
  };

  return await createChatBotAPIHandler(config, req);
}
