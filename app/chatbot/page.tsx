"use client";

import React, { useRef } from "react";
import { useChat as useAiChat } from "ai/react";
import { ChatInput, ChatWindow, MessageProps } from "./UIChatbot";

interface UseChatResponse {
  messages: MessageProps[];
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

function useChat(): UseChatResponse {
  return useAiChat({
    onResponse: (response) => {
      console.log(response);
      if (response.status === 429) {
        window.alert("You have reached your request limit for the day.");
        return;
      }

    },
  });
}

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { messages, input, setInput, handleSubmit, isLoading } = useChat();

  return (
    <main className="flex flex-col items-center justify-between pb-40">
      <div className="absolute justify-between hidden w-full px-5 top-5 sm:flex"></div>
      <ChatWindow messages={messages} setInput={setInput} inputRef={inputRef} />
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
