import { ChatBotInfo } from "../UIChatbot";

export const model = "fine-tuned-model-id";
export const temperature = 1;

export const examples = [
  "Background Script/Service Workers in the context of Chrome Extension?",
]

export const info: ChatBotInfo = {
  id: 'tts',
  name: 'Text to Speech',
  description: '.'
}