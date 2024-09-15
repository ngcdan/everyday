import React, { useEffect, useRef } from "react";
import { Copy } from "react-feather";
import { useChat as useAiChat } from "ai/react";
import { Send, Loader } from 'react-feather';
import Image from "next/image";
import clsx from "clsx";
import Textarea from "react-textarea-autosize";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

export type Role = 'user' | 'system' | 'assistant' | 'function';

export type ChatBotInfo = {
  id: string,
  name: string,
  description?: string
}

/* --------- Avatar: Handles the avatar logic based on the message role. --------- */
interface AvatarProps {
  role: Role;
}
export default function Avatar({ role }: AvatarProps) {
  let sourceUrl = role === 'user' ? '/images/avatar.jpg' : '/images/tommy.png';
  return (
    <div className="mx-2 avatar online">
      <div className="w-10 rounded-full">
        <Image src={sourceUrl} alt="Role" width={30} height={30} />
      </div>
    </div>
  )
}

/* ---------- Message: Displays individual messages with appropriate styling.*/
export interface MessageProps {
  role: Role;
  content: string;
}
export function Message({ role, content }: MessageProps) {

  return (
    <div>
      {role === 'user' ? (
        <div className={clsx("border-b py-3 chat chat-end")}>
          <div className="chat-bubble chat-bubble-info">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      ) : (
        <div className={clsx("border-b border-gray-200 py-3")}>
          <div className={clsx("flex flex-col space-y-4 px-4 w-full items-start")}>
            <Avatar role={role} />
            <div className="prose prose-lg max-w-none converted-html">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]} >
                {content}
              </ReactMarkdown>
            </div>
          </div>
          <div className="flex justify-end px-4 py-2 mt-4 border-t border-gray-400">
            <button
              onClick={() => navigator.clipboard.writeText(content)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out" >
              <Copy size={12} strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- ChatWindow: Manages the display of the welcome section or messages */
export interface ChatWindowProps {
  messages: { role: Role; content: string }[];
  setInput: (value: string) => void;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  examples: string[];
  info: ChatBotInfo
}
export function ChatWindow({ messages, setInput, inputRef, examples, info }: ChatWindowProps) {
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return messages.length > 0 ? (
    <div ref={chatWindowRef} className="h-full md:max-h-[75vh] max-w-screen-lg w-full rounded-lg p-4 md:p-6 lg:p-8 overflow-y-auto">
      {messages.map((message, i) => (
        <Message key={i} role={message.role} content={message.content} />
      ))}
    </div>
  ) : (
    <div className="w-full max-w-screen-md mx-auto border border-gray-300 rounded-lg mt-10 md:mt-12 lg:mt-15 shadow-md">
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 p-6 md:p-8 lg:p-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
        <Image src="/images/tommy.png" alt="Red Right Hand" width={150} height={150} className='p-2 rounded-full shadow-lg hidden md:block' />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{`Hi, I'm ${info.name}!`}</h1>
        <p className="text-gray-600 text-sm md:text-md lg:text-lg">{info.description || ''}</p>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 border-t border-gray-300 bg-gray-100 p-6 md:p-8 lg:p-12 rounded-b-lg">
        {examples.map((example, i) => (
          <button key={i}
            className="px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-sm md:text-md lg:text-lg text-left text-gray-600 transition-all duration-150 bg-white border border-gray-300 rounded-lg hover:border-gray-500 hover:text-gray-800 active:bg-gray-200 shadow-sm"
            onClick={() => {
              setInput(example);
              inputRef.current?.focus();
            }} >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- ChatInput: Manages user input, submission, and loading state display */
export interface IChatInputProps {
  formRef: React.RefObject<HTMLFormElement>;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<IChatInputProps> = ({ formRef, inputRef, input, setInput, handleSubmit, isLoading }) => {
  const isDisabled = isLoading || input.length === 0;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      formRef.current?.requestSubmit();
      e.preventDefault();
    }
  };

  const buttonClass = clsx(
    "absolute inset-y-0 right-3 my-auto flex justify-center items-center h-8 w-8 rounded-md transition-all",
    isDisabled ? "cursor-not-allowed bg-white" : "bg-green-500 hover:bg-green-600",
  );

  return (
    <div className="fixed bottom-0 w-full max-w-screen-md pb-3 space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100">
      <form ref={formRef} onSubmit={handleSubmit} className="relative mx-2 px-4 pt-3 pb-2 bg-white border border-gray-200 shadow-lg rounded-xl sm:pb-3 sm:pt-4">
        <Textarea
          ref={inputRef}
          tabIndex={0}
          required
          rows={1}
          autoFocus
          placeholder="Send a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          className="w-full pr-10 focus:outline-none"
        />
        <button className={buttonClass} disabled={isDisabled}>
          {isLoading ? (
            <Loader className="w-4 h-4 animate-spin text-stone-600" />
          ) : (
            <Send fill="none" strokeWidth={2} className={clsx("h-4 w-4", input.length === 0 ? "text-gray-300" : "text-white")} />
          )}
        </button>
      </form>
      <p className="text-xs text-center text-gray-400">
        Built with GPT-4o-mini, and fine-tuned.
      </p>
    </div>
  );
};

interface UseChatResponse {
  messages: MessageProps[];
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export function useChat(api: string, setAlertMessage: (message: string) => void): UseChatResponse {

  return useAiChat({
    api,
    onResponse: (response) => {
      if (response.status === 429) {
        setAlertMessage("You have reached your request limit for the day.");
        return;
      }
    },
    onError: (_error) => {
      setAlertMessage("Your location is not supported by this service.");
    },
  });
}
