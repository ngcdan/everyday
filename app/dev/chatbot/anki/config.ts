
import { ChatBotInfo } from "../UIChatbot";

export const model = "fine-tuned-model-id";
export const temperature = 0.7;

export const examples = [
  "Background Script/Service Workers in the context of Chrome Extension?",
  "contagious",
]

export const info: ChatBotInfo = {
  id: 'anki',
  name: 'Anki Maker',
  description: 'Helps you create Anki cards quickly and easily using AI.'
}