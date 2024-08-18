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

function useChat(setAlertMessage: (message: string) => void): UseChatResponse {

  return useAiChat({
    api: 'anki/api',
    onResponse: (response) => {
      if (response.status === 429) {
        setAlertMessage("You have reached your request limit for the day.");
        return;
      }
    },
    onError: (error) => {
      // Handle errors that occur during the request
      if (error.cause) {
        const errorMessage = error.message;
        if (errorMessage.startsWith("Country, region, or territory not supported")) {
          setAlertMessage("Your location is not supported by this service.");
        } else {
          setAlertMessage("An unexpected error occurred: " + errorMessage);
        }
      } else {
        setAlertMessage("An unexpected error occurred.");
      }
    },
  });
}

export default function Chat() {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const closeModal = () => {
    setAlertMessage(null);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { messages, input, setInput, handleSubmit, isLoading } = useChat(setAlertMessage);

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

      {alertMessage && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Alert</h3>
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
