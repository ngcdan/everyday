/* -------------  Main Layout for all chatbot ---------------------- */
"use client"

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'react-feather'

const chatbotOptions = [
  { id: 'anki', name: 'Anki Maker' },
  { id: 'rrh', name: 'Red Right Hand' },
];

export default function ChatbotLayout({ children }: { children: React.ReactNode }) {
  const [selectedBot, setSelectedBot] = useState(chatbotOptions[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBotSwitch = (botId: string) => {
    setIsDropdownOpen(false);
    setSelectedBot(botId);
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className="flex flex-col justify-center dropdown relative">
        <div className="flex items-center justify-end">
          <div className="px-2">
            <button
              onClick={() => setIsDropdownOpen(prevState => !prevState)} // Toggle dropdown
              className="flex items-center h-10 px-4 py-2 font-semibold transition bg-white rounded text-md hover:bg-gray-100 hover:text-blue-600 shadow-md" >
              {chatbotOptions.find(bot => bot.id === selectedBot)?.name}
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            {isDropdownOpen && (
              <ul className="dropdown-content bg-white rounded-box shadow-2xl absolute top-full mt-2">
                {chatbotOptions.map(bot => (
                  <li key={bot.id}>
                    <Link
                      href={`/dev/chatbot/${bot.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => handleBotSwitch(bot.id)} >
                      {bot.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Content Area */}
        <main className="flex flex-col w-full h-full mt-8">
          {children}
        </main>
      </div>
    </div>
  );
}
