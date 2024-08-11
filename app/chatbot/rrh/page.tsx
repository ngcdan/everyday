"use client";

import React, { useRef } from "react";
import { useChat as useAiChat } from "ai/react";
import { ChatInput, ChatWindow, MessageProps } from "../UIChatbot";
import { info } from "./config";

interface UseChatResponse {
  messages: MessageProps[];
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

function useChat(): UseChatResponse {
  return useAiChat({
    api: 'rrh/api',
    onResponse: (response) => {
      if (response.status === 429) {
        window.alert("You have reached your request limit for the day.");
        return;
      }
    },
    onError: (error) => {
      // Handle errors that occur during the request
      if (error.cause) {
        const errorMessage = error.message;
        if (errorMessage.startsWith("Country, region, or territory not supported")) {
          window.alert("Your location is not supported by this service.");
        } else {
          window.alert("An unexpected error occurred." + errorMessage);
        }
      } else {
        window.alert("An unexpected error occurred.");
      }
    },
  });
}

export const examples = [
  "/start python",
  "Yêu có cần tỏ tình, cưới có cần cầu hôn?",
  "Tâm trạng cho ngày mới?",
]

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { messages, input, setInput, handleSubmit, isLoading } = useChat();

  return (
    <main className="flex flex-col items-center justify-between pb-40">
      {/* <div className="absolute justify-between hidden w-full px-5 top-5 sm:flex"></div> */}
      <ChatWindow messages={messages} setInput={setInput} inputRef={inputRef} examples={examples} info={info} />
      <ChatInput
        formRef={formRef}
        inputRef={inputRef}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading} />
    </main>
  );
}
