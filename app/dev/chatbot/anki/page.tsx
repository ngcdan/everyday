"use client";
import React, { useRef, useState } from "react";
import { info, examples } from "./config";
import { ChatInput, ChatWindow, useChat } from "../UIChatbot";

export default function AnkiCardGenerator() {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const closeModal = () => {
    setAlertMessage(null);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { messages, input, setInput, handleSubmit, isLoading } = useChat('chatbot/anki/api', setAlertMessage);

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
