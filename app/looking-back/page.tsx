import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'looking-back',
};

export default function Page() {
  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>
        Looking back
      </h2>
      <p className='my-5 text-gray-600'>Below are all my public journal entries.</p>
    </div>
  );
}
