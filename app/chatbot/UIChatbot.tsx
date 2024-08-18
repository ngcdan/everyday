import React from "react";
import { Send, Loader } from 'react-feather';
import Image from "next/image";
import clsx from "clsx";
import Textarea from "react-textarea-autosize";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Để hỗ trợ GitHub Flavored Markdown (GFM)
import rehypeRaw from 'rehype-raw'; // Để xử lý HTML trong markdown
import rehypeHighlight from 'rehype-highlight'; // Hỗ trợ highlight code blocks
import 'highlight.js/styles/github.css';

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
  return role === "user" ? (
    <Image src="/images/avatar.jpg" alt="User" width={30} height={30} />
  ) : (
    <Image src="/images/tommy.png" alt="Tommy" width={30} height={30} />
  );
}

/* ---------- Message: Displays individual messages with appropriate styling.*/
export interface MessageProps {
  role: Role;
  content: string;
}
export function Message({ role, content }: MessageProps) {
  console.log(content);

  return (
    <div
      className={clsx("flex-container w-full border-b border-gray-200 py-8", role === "user" ? "bg-white" : "bg-gray-100",)}>
      <div className="flex items-start w-full max-w-screen-md px-0 space-x-4 md:px-5">
        <Avatar role={role} />
        <div className="w-full mt-1 prose break-words prose-p:leading-relaxed">
          {/* {content} */}
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-dark">
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
              components={{
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <pre className={`rounded-md my-2 ${className}`} {...props}>
                      <code className={`language-${match[1]}`}>
                        {String(children).replace(/\n$/, '')}
                      </code>
                    </pre>
                  ) : (
                    <code className="bg-gray-200 rounded p-1" {...props}>
                      {children}
                    </code>
                  );
                },
              }} />
          </div>
        </div>
      </div>
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
  return messages.length > 0 ? (
    messages.map((message, i) => (
      <Message key={i} role={message.role} content={message.content} />
    ))
  ) : (
    <div className="max-w-screen-md mx-5 border border-gray-200 rounded-md mt-15 sm:mx-0 sm:w-full">
      <div className="flex flex-col space-y-4 p-7 sm:p-10">
        <Image src="/images/tommy.png" alt="Red Right Hand" width={200} height={200}
          className='p-1 rounded-md shadow-md' />
        <h1 className="text-lg font-semibold text-black">{`Hi, I'm ${info.name}!`}</h1>
        <p className="text-gray-500">{info.description || ''}</p>
      </div>
      <div className="flex flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
        {examples.map((example, i) => (
          <button
            key={i}
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
    <div className="fixed bottom-0 flex flex-col items-center w-full p-5 pb-3 space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 sm:px-0">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative w-full max-w-screen-md px-4 pt-3 pb-2 bg-white border border-gray-200 shadow-lg rounded-xl sm:pb-3 sm:pt-4" >

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
          className="w-full pr-10 focus:outline-none" />

        <button
          className={clsx(
            "absolute inset-y-0 right-3 my-auto flex-container h-8 w-8 rounded-md transition-all",
            disabled
              ? "cursor-not-allowed bg-white"
              : "bg-green-500 hover:bg-green-600",
          )}
          disabled={disabled}
        >
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
