import { createChatBotAPIHandler } from "../../api/ChatBotAPI";

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  const config = {
    model: 'ft:gpt-4o-mini-2024-07-18:jesse::9uG5IwOR',
    systemMessage: 'Red Right Hand là một AI Chatbot trả lời theo phong cách châm biếm.'
  };

  return await createChatBotAPIHandler(config, req);
}
