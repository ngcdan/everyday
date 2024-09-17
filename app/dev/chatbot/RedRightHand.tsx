"use client";

import React, { useRef, useState } from "react";
import { ChatBotInfo, ChatInput, ChatWindow } from "./UIChatbot";
import { useChat, UseChatOptions, Message } from "ai/react";
import { messages as initMessages } from "./prompts/prompts";

const examples: string[] = [
  "Yêu có cần tỏ tình, cưới có cần cầu hôn?",
  "Tâm trạng cho ngày mới?",
];

const info: ChatBotInfo = {
  id: 'rrh',
  name: 'Red Right Hand',
  description: 'AI chat bot built with GPT-4o-mini and fine-tuned.'
};

export const RedRightHand: React.FC = () => {

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [history, setHistory] = useState<Message[]>(initMessages);

  const chatOptions: UseChatOptions = {
    body: {
      config: {
        model: 'gpt-4o-mini',
        // model: 'ft:gpt-4o-mini-2024-07-18:jesse::9uG5IwOR',
        initMessages: history
      },
    },
    api: '/dev/chatbot/api',
    onResponse: (response: any) => {
      if (response.status === 429) {
        setAlertMessage("You have reached your request limit for the day.");
      }
    },
    onFinish(message) {
      setHistory(prevHistory => {
        const updatedHistory = [...prevHistory, message];
        return updatedHistory.slice(-5); // Keep only the last 5 messages
      })
    },
    onError: () => {
      setAlertMessage("Your location is not supported by this service.");
    },
  };

  const { messages, input, setInput, handleSubmit, isLoading } = useChat(chatOptions);
  const closeModal = () => setAlertMessage(null);

  console.log(history);

  return (
    <main className="flex flex-col items-center justify-between pb-40">
      <ChatWindow
        messages={messages}
        setInput={setInput}
        inputRef={inputRef}
        examples={examples}
        info={info}
      />
      <ChatInput
        formRef={formRef}
        inputRef={inputRef}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {alertMessage && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Alert</h3>
            <p className="py-4">{alertMessage}</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}