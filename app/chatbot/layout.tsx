/* -------------  Main Layout for all chatbot ---------------------- */
"use client"

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'react-feather'

const chatbotOptions = [
  { id: 'rrh', name: 'Red Right Hand' },
  { id: 'anki', name: 'Anki Maker' },
  { id: 'learneverything', name: 'Learn Everything' },
];

export default function ChatbotLayout({ children, }: { children: React.ReactNode; }) {
  const [selectedBot, setSelectedBot] = useState(chatbotOptions[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onSwitchBot = (botId: string) => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
    setSelectedBot(botId);
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="flex items-center justify-end bg-white shadow-md">
          <div className="relative px-2">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
              className="flex items-center px-2 py-1 text-sm transition bg-white rounded hover:bg-gray-100 hover:text-blue-600" >
              {chatbotOptions.find(bot => bot.id === selectedBot)?.name}
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 z-10 w-40 mt-2 text-sm bg-white rounded shadow-md">
                {chatbotOptions.map(bot => (
                  <li key={bot.id}>
                    <Link href={`/chatbot/${bot.id}`}
                      className="block px-2 py-1 hover:bg-gray-100 hover:text-blue-600"
                      onClick={() => onSwitchBot(bot.id)} >
                      {bot.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </header>
        {/* Content Area */}
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
