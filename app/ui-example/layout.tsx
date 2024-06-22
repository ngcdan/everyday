//layout.tsx - Đóng vai trò là layout chung cho các page con trong app
'use client'
import { useState } from 'react';
import { FoldableExample } from './foldable';

interface ComponentType {
  [key: string]: () => JSX.Element;
}

const components: ComponentType = {
  Foldable: () => <FoldableExample />
  //TODO: add more components here
}

export default function UIExamplesLayout() {
  const [activeComponent, setActiveComponent] = useState('Foldable');

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 overflow-y-auto">
        <ul>
          {Object.keys(components).map(componentName => (
            <li key={componentName} className="mb-2">
              <button
                className={`sidebar_button ${activeComponent === componentName ? 'sidebar_button_active' : ''}`}
                onClick={() => setActiveComponent(componentName)} >
                {componentName}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">UI Examples</h1>
        {components[activeComponent]()}
      </main>
    </div>
  );
}