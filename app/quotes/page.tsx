import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quotes',
};

export default function Page() {
  return (
    <div className='container p-4 mx-auto mt-5 md:p-6 md:mt-8'>
      <div className='w-full mb-6 md:mb-12'>
        <h1 className='mb-2 text-3xl font-bold leading-tight tracking-tighter text-center text-balance md:mb-4 md:text-left md:text-5xl md:leading-none lg:text-6xl'>
          Quotes
        </h1>
        <p className='text-xl text-center text-gray-600 text-balance text-muted-foreground md:text-left md:text-2xl'>
          Inspiring words. Beautifully expressed.
        </p>

        <div className='mx-4 my-4' >
          <p className='text-xl italic text-gray-700'>Thỉnh thoảng, bạn phải có chút buồn bã để biết khi nào là thời điểm tốt đẹp sẽ đến.</p>
        </div>

      </div>
    </div>
  );
}
