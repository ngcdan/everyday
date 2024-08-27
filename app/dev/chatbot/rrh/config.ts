import { ChatBotInfo } from "../UIChatbot";


export const model = "fine-tuned-model-id";
export const temperature = 1;

export const examples = [
  "Yêu có cần tỏ tình, cưới có cần cầu hôn?",
  "Tâm trạng cho ngày mới?",
]

export const info: ChatBotInfo = {
  id: 'rrh',
  name: 'Red Right Hand',
  description: 'AI chat bot built with GPT-4o-mini and fine-tuned.'
}