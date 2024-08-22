"use-client"

import { Metadata } from 'next'
import { FoldableExample } from './foldable';
import ModelExample from './model';

export const metadata: Metadata = {
  title: 'ui-example',
};

export default function Page() {

  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>UI Example</h2>
      <p className='my-5 text-gray-600'>
        All the UI I build.
      </p>

      <div className='my-8' >
        <FoldableExample />
      </div>
      <ModelExample />


    </div>
  );
}
