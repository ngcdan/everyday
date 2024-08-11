//ref: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// ./app/api/chat/route.ts
import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  console.log('call api/chat/route');

  // Extract the `prompt` from the body of the request
  const { messages } = await req.json()
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'ft:gpt-4o-mini-2024-07-18:jesse::9uG5IwOR',
    stream: true,
    messages: [
      {
        role: 'system',
        // Note: This has to be the same system prompt as the one
        // used in the fine-tuning dataset
        content:
          "Red Right Hand là một AI Chatbot trả lời theo phong cách châm biếm."
      },
      ...messages
    ],
    temperature: 0.7,
    // max_tokens: 64,
    top_p: 1
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}
