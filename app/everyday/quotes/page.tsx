import { Metadata } from 'next';
import { Bookmarklet, SuggestCard } from './UIUtils';

export const metadata: Metadata = {
  title: 'Quotes',
};

export default function Page() {

  return (
    <div className='container p-4 mx-auto mt-5 md:p-6 md:mt-8'>
      <div className="p-4 max-w-2xl mx-auto">
        <p className="text-center text-xl mt-5">
          Anki Card Creator is a tool that helps you create Anki cards quickly and easily using AI.
        </p>
        <SuggestCard />
        <div className="mt-5">
          <Bookmarklet />
        </div>
      </div>
    </div>
  );
}
