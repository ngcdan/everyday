"use client";
import React, { useRef, useState } from "react";
import { ChatBotInfo, ChatInput, ChatWindow } from "./UIChatbot";
import { useChat, UseChatOptions } from "ai/react";
import { messages as initMessages } from './prompts/vocab_prompt'

const examples: string[] = [
  "optimize",
  "contagious",
]

const info: ChatBotInfo = {
  id: 'anki',
  name: 'Anki Maker',
  description: 'Helps you create Anki cards quickly and easily using AI.'
}

export default function AnkiCardGenerator() {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const chatOptions: UseChatOptions = {
    body: {
      config: {
        model: 'gpt-4o-mini',
        initMessages,
      },
    },
    api: '/dev/chatbot/api',
    onResponse: (response) => {
      if (response.status === 429) {
        setAlertMessage("You have reached your request limit for the day.");
      }
    },
    onError: () => {
      setAlertMessage("Your location is not supported by this service.");
    },
  };

  const { messages, input, setInput, handleSubmit, isLoading } = useChat(chatOptions);

  const closeModal = () => {
    setAlertMessage(null);
  };

  return (
    <main className="flex flex-col items-center w-full">
      <ChatWindow messages={messages} setInput={setInput} inputRef={inputRef} examples={examples} info={info} />
      <ChatInput formRef={formRef} inputRef={inputRef}
        input={input} setInput={setInput} handleSubmit={handleSubmit} isLoading={isLoading} />

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
