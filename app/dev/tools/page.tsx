import { Metadata } from 'next'
import { HouseCalculator } from './HouseCalculator';
import Foldable from '@/app/dev/lib/components/Foldable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tools',
};

export default function Page() {
  return (
    <div className='container p-4 mx-auto mt-5 md:p-6 md:mt-8'>
      <div className='w-full mb-6 md:mb-12'>
        <h1 className='mb-2 text-3xl font-bold leading-tight tracking-tighter text-center text-balance md:mb-4 md:text-left md:text-5xl md:leading-none lg:text-6xl'>
          Tools
        </h1>
        <p className='text-xl text-center text-gray-600 text-balance text-muted-foreground md:text-left md:text-2xl'>
          All the tools I use.
        </p>
      </div>

      <div className='my-8' >

        <div className="gap-2 ml-4 text-base text-thin">
          <Link className={`block select-none space-y-1 rounded-full px-4 py-2`}
            href="/dev/tools/anki">
            Anki Maker
          </Link>
        </div>

        {/* <Foldable label='1. House Rent Calculator' defaultFolded headerCss='text-center text-xl font-bold text-gray-800 my-2'>
          <HouseCalculator />
        </Foldable> */}

      </div>
    </div>
  );
}

