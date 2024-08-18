"use client";

import React, { useRef, useState } from "react";
import { useChat as useAiChat } from "ai/react";
import { ChatInput, ChatWindow, MessageProps } from "../UIChatbot";
import { info, examples } from "./config";

interface UseChatResponse {
  messages: MessageProps[];
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

function useChat(showToast: (message: string, type: "success" | "error") => void): UseChatResponse {

  return useAiChat({
    api: 'anki/api',
    onResponse: (response) => {
      if (response.status === 429) {
        showToast("You have reached your request limit for the day.", "error");
        return;
      }
    },
    onError: (error) => {
      // Handle errors that occur during the request
      if (error.cause) {
        const errorMessage = error.message;
        if (errorMessage.startsWith("Country, region, or territory not supported")) {
          showToast("Your location is not supported by this service.", "error");
        } else {
          showToast("An unexpected error occurred: " + errorMessage, "error");
        }
      } else {
        showToast("An unexpected error occurred.", "error");
      }
    },
  });
}

export default function Chat() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const showToast = (message: string, type: "success" | "error") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => setToastMessage(null), 5000); // Hide toast after 5 seconds
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { messages, input, setInput, handleSubmit, isLoading } = useChat(showToast);

  return (
    <main className="flex flex-col items-center justify-between pb-40">
      <ChatWindow messages={messages} setInput={setInput} inputRef={inputRef} examples={examples} info={info} />
      <ChatInput
        formRef={formRef}
        inputRef={inputRef}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading} />

      {toastMessage && (
        <div className={`toast toast-${toastType} fixed bottom-5 right-5`}>
          <div className="alert alert-${toastType}">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </main>
  );
}
