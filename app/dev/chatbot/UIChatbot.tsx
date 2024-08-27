import React, { useEffect, useRef } from "react";
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
    <div className="avatar online mx-2">
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
  console.log('------------ Content Message --------------------');
  console.log(content);

  return (
    <div>
      {role === 'user' ? (
        <div className={clsx("border-b py-3 chat chat-end")}>
          <div className="chat-bubble chat-bubble-info">{content}</div>
        </div>
      ) : (
        <div className={clsx("border-b border-gray-200 py-3 bg-gray-100")}>
          <div className={clsx("flex space-x-4 px-4 w-full items-start")}>
            <Avatar role={role} />
            <div className="prose prose-lg max-w-none converted-html">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]} >
                {content}
              </ReactMarkdown>
            </div>
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
    <div ref={chatWindowRef} className="max-h-[70vh] max-w-screen-lg w-full overflow-y-auto">
      {messages.map((message, i) => (
        <Message key={i} role={message.role} content={message.content} />
      ))}
    </div>
  ) : (
    <div className="max-w-screen-md mx-auto w-full border border-gray-200 rounded-md mt-15">
      <div className="flex flex-col space-y-4 p-7 sm:p-10">
        <Image src="/images/tommy.png" alt="Red Right Hand" width={200} height={200}
          className='p-1 rounded-md shadow-md' />
        <h1 className="text-lg font-semibold text-black">{`Hi, I'm ${info.name}!`}</h1>
        <p className="text-gray-500">{info.description || ''}</p>
      </div>
      <div className="flex flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
        {examples.map((example, i) => (
          <button key={i}
            className="px-5 py-3 text-sm text-left text-gray-500 transition-all duration-75 bg-white border border-gray-200 rounded-md hover:border-black hover:text-gray-700 active:bg-gray-50"
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

/* ---------- ChatInput: Handles user input, submission, and displays the loading state */
export interface ChatInputProps {
  formRef: React.RefObject<HTMLFormElement>;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export function ChatInput(props: ChatInputProps) {
  const { formRef, inputRef, input, setInput, handleSubmit, isLoading } = props;
  const disabled = isLoading || input.length === 0;

  return (
    <div className="fixed bottom-0 max-w-screen-md w-full pb-3 space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100">
      <form ref={formRef} onSubmit={handleSubmit}
        className="relative px-4 pt-3 pb-2 bg-white border border-gray-200 shadow-lg rounded-xl sm:pb-3 sm:pt-4" >

        <Textarea
          ref={inputRef} tabIndex={0} required rows={1} autoFocus
          placeholder="Send a message" value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              formRef.current?.requestSubmit();
              e.preventDefault();
            }
          }}
          spellCheck={false}
          className="w-full pr-10 focus:outline-none" />

        <button
          className={clsx(
            "absolute inset-y-0 right-3 my-auto flex-container h-8 w-8 rounded-md transition-all",
            disabled
              ? "cursor-not-allowed bg-white"
              : "bg-green-500 hover:bg-green-600",
          )}
          disabled={disabled} >

          {isLoading ? (
            <Loader className="w-4 h-4 animate-spin text-stone-600" />
          ) : (
            <Send fill="none" strokeWidth={2} className={clsx("h-4 w-4", input.length === 0 ? "text-gray-300" : "text-white",)} />
          )}
        </button>

      </form>
      <p className="text-xs text-center text-gray-400">
        Built with GPT-4o-mini, and fine-tuned.
      </p>
    </div>
  );
}

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
