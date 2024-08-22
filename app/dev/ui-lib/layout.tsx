"use-client"
import { useState } from 'react';
import { FoldableExample } from './foldable';
import ModelExample from './model';

interface ComponentType {
  [key: string]: () => JSX.Element;
}

const components: ComponentType = {
  Foldable: () => <FoldableExample />,
  Model: () => <ModelExample />
  //TODO: add more components here
}

export default function UIExamplesLayout() {
  const [activeComponent, setActiveComponent] = useState('Foldable');

  return (
    <div className="flex h-screen">
      <aside className="w-64 p-4 overflow-y-auto text-white bg-gray-800">
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
        <h1 className="mb-4 text-2xl font-bold">UI Examples</h1>
        {components[activeComponent]()}
      </main>
    </div>
  );
}