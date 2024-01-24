import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'dev',
};

export default function Page() {
  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Coding</h2>
      <p className='my-5 text-gray-600'>
        I keep a development log for some of the project I'm working on, you can find them here:
      </p>
    </div>
  );
}
