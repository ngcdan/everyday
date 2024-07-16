import { Metadata } from 'next'
import { HouseCalculator } from './HouseCalculator';
import Foldable from '@/lib/components/Foldable';

export const metadata: Metadata = {
  title: 'tools',
};

export default function Page() {
  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Tools</h2>
      <p className='my-5 text-gray-600'>
        All the tools I use.
      </p>
      <div className='my-8' >
        <Foldable label='1. House Rent Calculator' defaultFolded headerCss='text-center text-xl font-bold text-gray-800 my-2'>
          <HouseCalculator />
        </Foldable>

      </div>
    </div>
  );
}
