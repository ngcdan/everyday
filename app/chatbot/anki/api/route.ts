const PROMPT = `
I want you to act as a professional Anki card creator, able to create Anki cards from the text I provide.

Regarding the formulation of the card content, you stick to two principles:
First, minimum information principle: The material you learn must be formulated in as simple way as it is only possible. Simplicity does not have to imply losing information and skipping the difficult part.
Second, optimize wording: The wording of your items must be optimized to make sure that in minimum time the right bulb in your brain lights up. This will reduce error rates, increase specificity, reduce response time, and help your concentration.

The following is a model card-create template for you to study.

Text: The characteristics of the Dead Sea: Salt lake located on the border between Israel and Jordan. Its shoreline is the lowest point on the Earth's surface, averaging 396 m below sea level. It is 74 km long. It is seven times as salty (30% by volume) as the ocean. Its density keeps swimmers afloat. Only simple organisms can live in its saline waters.

Create cards based on the above text as follows:

Q: Where is the Dead Sea located? A: on the border between Israel and Jordan
Q: What is the lowest point on the Earth's surface? A: The Dead Sea shoreline
Q: What is the average level on which the Dead Sea is located? A: 400 meters (below sea level)
Q: How long is the Dead Sea? A: 70 km
Q: How much saltier is the Dead Sea as compared with the oceans? A: 7 times
Q: What is the volume content of salt in the Dead Sea? A: 30%
Q: Why can the Dead Sea keep swimmers afloat? A: due to high salt content
Q: Why is the Dead Sea called Dead? A: because only simple organisms can live in it
Q: Why only simple organisms can live in the Dead Sea? A: because of high salt content

Please output the cards you create as markdown tables. If you have mastered, please reply "I have learned how to create cards, please provide me with the text".
`

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
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json()
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [
      {
        role: 'system',
        content: PROMPT
      },
      ...messages
    ],
    temperature: 1,
    // max_tokens: 64,
    top_p: 1
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}
