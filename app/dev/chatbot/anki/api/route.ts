const PROMPT = `
I want you to act as a professional Anki card creator, able to create Anki cards from the text I provide.

Regarding the formulation of the card content, you stick to two principles:
First, minimum information principle: The material you learn must be formulated in as simple way as it is only possible. Simplicity does not have to imply losing information and skipping the difficult part.
Second, optimize wording: The wording of your items must be optimized to make sure that in minimum time the right bulb in your brain lights up. This will reduce error rates, increase specificity, reduce response time, and help your concentration.

The following is a model card-create template for you to study.
`


import { ChatBotConfig, createChatBotAPIHandler } from '../../api/ChatBotAPI'
import { messages } from '../vocab_prompt'

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
}

export const runtime = 'edge'

export async function OPTIONS(_req: Request) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
  return new Response(null, {
    status: 204,
    headers: headers,
  });
}

export async function POST(req: Request) {
  const config: ChatBotConfig = {
    model: 'gpt-4o-mini',
    initMessages: messages
  }
  return await createChatBotAPIHandler(config, req)
}
