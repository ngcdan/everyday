import { ChatBotInfo } from "../UIChatbot";

export const model = "fine-tuned-model-id";
export const temperature = 0.7;

export const examples = [
  "Agile development",
  "Introduction to Docker",
  "Learn Python in Y minutes",
]

export const info: ChatBotInfo = {
  id: 'learning',
  name: 'Learn Everything',
  description: 'Learn everything about anything.'
}