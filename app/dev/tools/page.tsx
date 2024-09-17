'use client';
import { useState } from 'react';
import { HouseCalculator } from './HouseCalculator';
import AnkiMaker from './AnkiMaker';
import TextToSpeech from '../chatbot/tts/page';
import { RedRightHand } from '../chatbot/RedRightHand';
import AnkiCardGenerator from '../chatbot/AnkiCardGenerator';

type ComponentType = React.ComponentType<any>;

const components: Record<string, ComponentType> = {
  "Anki Maker": AnkiMaker,
  "House Rent Calculator": HouseCalculator,
  "Text To Speech": TextToSpeech,
  "Red Right Hand": RedRightHand,
  "Anki Generator": AnkiCardGenerator,
};

export default function ToolKitPage() {
  const [activeComponent, setActiveComponent] = useState<string>("Anki Maker");
  const ActiveComponent = components[activeComponent];

  return (
    <div className="container mx-auto flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-72 text-gray-800 p-6 shrink-0 border-r border-gray-200 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Tools</h2>
        <nav>
          <ul className="space-y-2">
            {Object.keys(components).map((componentName) => (
              <li key={componentName}>
                <button
                  className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out ${activeComponent === componentName
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  onClick={() => setActiveComponent(componentName)}
                >
                  {componentName}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-2 md:p-8 shadow-lg m-0 md:m-4 md:rounded-lg text-gray-800">
        <ActiveComponent />
      </main>
    </div>
  );
}

