import { ChatBotInfo } from "../UIChatbot";

export const model = "fine-tuned-model-id";
export const temperature = 0.7;

export const examples = [
  "Yêu có cần tỏ tình, cưới có cần cầu hôn?",
  "Tâm trạng cho ngày mới?",
]

export const info: ChatBotInfo = {
  id: 'emma',
  name: 'Emma',
  description: 'Flirty and funny Gen-Z girlfriend.'
}