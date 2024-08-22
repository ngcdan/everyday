import OpenAI from "openai"

export const headers = {
  "Access-Control-Allow-Origin": "*",
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})