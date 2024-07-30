import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Looking back',
};

export default function Page() {
  return (
    <div className='container p-4 mx-auto mt-5 md:p-6 md:mt-8'>

      <div className='w-full mb-6 md:mb-12'>
        <h1 className='mb-2 text-3xl font-bold leading-tight tracking-tighter text-center text-balance md:mb-4 md:text-left md:text-5xl md:leading-none lg:text-6xl'>
          Looking back
        </h1>
        <p className='text-xl text-center text-gray-600 text-balance text-muted-foreground md:text-left md:text-2xl'>
          Below are all my public journal entries.
        </p>
      </div>

      <section className='my-5'>
        <h3 className='my-1 text-2xl font-bold'>2024</h3>
        <div>
          <h5 className='my-1 font-bold text-gray-600'>June</h5>
          <div className='flex flex-col md:flex-row md:flex-wrap mx-4 mb-4'>
            <Image
              src="/images/2024/jun/ME_T6_1.jpg"
              width={2568}
              height={1926}
              className='p-1 rounded-md shadow-md'
              alt="OF1 YEP" />
            <Image
              src="/images/2024/jun/ME_T6_2.jpg"
              width={2056}
              height={1182}
              className='p-1 rounded-md shadow-md'
              alt="OF1 YEP" />
          </div>

          <h5 className='my-1 font-bold text-gray-600'>January</h5>

          <div className='px-4 py-4 my-2 bg-gray-100 rounded-md shadow-md'>
            <h5 className='mb-1 italic'>19.01.2024 - Tất niên OF1</h5>
            <div className='flex flex-col md:flex-row md:flex-wrap'>
              <Image
                src="/images/2024/jan/BEE_T7_YEP.jpg"
                width={2568}
                height={1926}
                className='p-1 rounded-md shadow-md'
                alt="OF1 YEP" />
              <Image
                src="/images/2024/jan/BEE_T7_YEP_1.jpg"
                width={2056}
                height={1182}
                className='p-1 rounded-md shadow-md'
                alt="OF1 YEP" />
              <Image
                src="/images/2024/jan/BEE_T7_YEP_2.jpg"
                width={2560}
                height={1440}
                className='p-1 rounded-md shadow-md'
                alt="OF1 YEP" />
            </div>
          </div>

          <figure className='px-4 py-4 my-2 bg-gray-100 rounded-md shadow-md'>
            <Image
              src="/images/wine_2.jpg"
              width={2040}
              height={1530}
              className='p-1 rounded-md shadow-md'
              alt="Tet 1" />
          </figure>

          <figure className='px-4 py-4 my-2 bg-gray-100 rounded-md shadow-md'>
            <Image
              src="/images/tracy.jpg"
              width={960}
              height={1280}
              alt="Tet 2" />
          </figure>
        </div>

      </section>

    </div>
  );
}
