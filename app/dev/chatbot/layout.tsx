/* -------------  Main Layout for all chatbot ---------------------- */
"use client"

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'react-feather'

const chatbotOptions = [
  { id: 'anki', name: 'Anki Maker' },
  { id: 'rrh', name: 'Red Right Hand' },
  { id: 'tts', name: 'Text to Speech' },
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
    <div className='w-full mx-auto max-w-7xl'>
      <div className="flex flex-col justify-center w-100 dropdown">
        <div className="flex items-center justify-end">
          <div className="relative px-2">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
              className="flex items-center h-10 px-2 py-1 font-semibold transition bg-white rounded text-md hover:bg-gray-100 hover:text-blue-600" >
              {chatbotOptions.find(bot => bot.id === selectedBot)?.name}
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            {isDropdownOpen && (

              <ul className="dropdown-content bg-base-300 rounded-box z-[1] shadow-2xl">
                {chatbotOptions.map(bot => (
                  <li key={bot.id}>
                    <Link
                      href={`/dev/chatbot/${bot.id}`}
                      className="justify-start btn btn-sm btn-block btn-ghost"
                      onClick={() => onSwitchBot(bot.id)} >
                      {bot.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Content Area */}
        <main className="flex flex-col w-full h-full overflow-hidden grow ">
          {children}
        </main>

      </div>
    </div>
  );
}
