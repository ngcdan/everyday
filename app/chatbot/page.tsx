"use client";

import { useRef } from "react";
import { useChat } from "ai/react";
import clsx from "clsx";
import {
  LoadingCircle,
  SendIcon,
  UserIcon,
} from "./icons";

import Textarea from "react-textarea-autosize";
import Image from "next/image";
import React from "react";

const examples = [
  "I'm feeling really down and unmotivated today.",
  "I can't seem to focus on anything lately.",
  "I'm struggling to keep a clean workspace.",
];

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, input, setInput, handleSubmit, isLoading } = useChat({
    onResponse: (response) => {
      if (response.status === 429) {
        window.alert("You have reached your request limit for the day.");
        return;
      }
    },
  });

  const disabled = isLoading || input.length === 0;

  return (
    <main className="flex flex-col items-center justify-between pb-40">
      <div className="absolute justify-between hidden w-full px-5 top-5 sm:flex">
      </div>
      {messages.length > 0 ? (
        messages.map((message, i) => (
          <div
            key={i}
            className={clsx(
              "flex w-full items-center justify-center border-b border-gray-200 py-8",
              message.role === "user" ? "bg-white" : "bg-gray-100",
            )}
          >
            <div className="flex items-start w-full max-w-screen-md px-5 space-x-4 sm:px-0">
              <div
                className={clsx(
                  message.role === "assistant"
                    ? "bg-white"
                    : "bg-black p-1.5 text-white",
                )}
              >
                {message.role === "user" ? (
                  <UserIcon />
                ) : (
                  <Image
                    src="/images/avatar.jpg"
                    alt="Nqcdan"
                    width={36}
                    height={36}
                  />
                )}
              </div>
              <div className="w-full mt-1 prose break-words prose-p:leading-relaxed">
                {message.content}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="max-w-screen-md mx-5 mt-20 border rounded-md border-gray-200sm:mx-0 sm:w-full">
          <div className="flex flex-col space-y-4 p-7 sm:p-10">
            <Image
              src="/images/avatar.jpg"
              alt="Nqcdan"
              width={40}
              height={40}
              className="w-20 h-20"
            />
            <h1 className="text-lg font-semibold text-black">
              Hi, I'm Nqcdan!
            </h1>
            <p className="text-gray-500">
              I'm an AI bot built with the{" "}
              <a
                href="https://sdk.vercel.ai/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline transition-colors underline-offset-4 hover:text-black"
              >
                Vercel AI SDK
              </a>{" "}
              and{" "}
              <a
                href="https://openai.com/blog/gpt-3-5-turbo-fine-tuning-and-api-updates"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline transition-colors underline-offset-4 hover:text-black"
              >
                fine-tuned
              </a>{" "}
              <br />
              <a
                href="https://vercel.com/guides/fine-tuning-openai-nextjs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline transition-colors underline-offset-4 hover:text-black"
              >
                Read the guide
              </a>{" "}
              on how you can build your own bot like me.
            </p>
          </div>
          <div className="flex flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
            {examples.map((example, i) => (
              <button
                key={i}
                className="px-5 py-3 text-sm text-left text-gray-500 transition-all duration-75 bg-white border border-gray-200 rounded-md hover:border-black hover:text-gray-700 active:bg-gray-50"
                onClick={() => {
                  setInput(example);
                  inputRef.current?.focus();
                }}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="fixed bottom-0 flex flex-col items-center w-full p-5 pb-3 space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 sm:px-0">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative w-full max-w-screen-md px-4 pt-3 pb-2 bg-white border border-gray-200 shadow-lg rounded-xl sm:pb-3 sm:pt-4"
        >
          <Textarea
            ref={inputRef}
            tabIndex={0}
            required
            rows={1}
            autoFocus
            placeholder="Send a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                formRef.current?.requestSubmit();
                e.preventDefault();
              }
            }}
            spellCheck={false}
            className="w-full pr-10 focus:outline-none"
          />
          <button
            className={clsx(
              "absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all",
              disabled
                ? "cursor-not-allowed bg-white"
                : "bg-green-500 hover:bg-green-600",
            )}
            disabled={disabled}
          >
            {isLoading ? (
              <LoadingCircle />
            ) : (
              <SendIcon
                className={clsx(
                  "h-4 w-4",
                  input.length === 0 ? "text-gray-300" : "text-white",
                )}
              />
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
