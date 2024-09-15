'use client';
import { useState } from 'react';
import { HouseCalculator } from './HouseCalculator';
import AnkiCardCreator from './anki/AnkiMaker';

type ComponentType = React.ComponentType<any>;

const components: Record<string, ComponentType> = {
  "House Calculator": HouseCalculator,
  "Anki Maker": AnkiCardCreator,
};

export default function Page() {
  const [activeComponent, setActiveComponent] = useState<string>("House Calculator");
  const ActiveComponent = components[activeComponent];

  return (
    <div className="container mx-auto flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white p-6 shrink-0 overflow-y-auto border-r border-gray-200 shadow-md">
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
      <main className="flex-1 p-8 overflow-y-auto bg-white shadow-lg m-4 rounded-lg">
        <ActiveComponent />
      </main>
    </div>
  );
}

