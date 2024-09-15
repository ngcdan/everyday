import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Looking back',
};

export default function Page() {
  return (
    <div className='w-full h-full overflow-y-auto'>
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
            <h5 className='my-1 font-bold text-gray-600'>July</h5>
            <div className='flex flex-col md:flex-row md:flex-wrap mx-4 mb-4'>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0132.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0169.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0183.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0183" />
                </figure>
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0179.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0192.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0153.jpg"
                    height={3024}
                    width={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0185.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0195.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0207.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0325.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0351.jpg"
                    width={3024}
                    height={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jul/IMG_0360.jpg"
                    height={3024}
                    width={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="IMG_0185" />
                </figure>
              </div>

              <h5 className='my-1 font-bold text-gray-600'>June</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jun/ME_T6_1.jpg"
                    height={3024}
                    width={4032}
                    className='p-1 rounded-md shadow-md'
                    alt="OF1 YEP" />
                </figure>
                <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                  <Image
                    src="/images/2024/jun/ME_T6_2.jpg"
                    width={2056}
                    height={1182}
                    className='p-1 rounded-md shadow-md'
                    alt="OF1 YEP" />
                </figure>
              </div>

            </div>

            <h5 className='my-1 font-bold text-gray-600'>January</h5>

            <h5 className='mb-1 italic'>19.01.2024 - Tất niên OF1</h5>
            <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
              <Image
                src="/images/2024/jan/BEE_T7_YEP_1.jpg"
                width={2056}
                height={1182}
                className='p-1 rounded-md shadow-md'
                alt="OF1 YEP" />
            </figure>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure className='p-4 bg-gray-200 rounded-md shadow-md'>
                <Image
                  src="/images/2024/jan/BEE_T7_YEP.jpg"
                  width={2568}
                  height={1926}
                  className='p-1 rounded-md shadow-md'
                  alt="OF1 YEP" />
              </figure>
              <figure className='p-4 bg-gray-200 rounded-md shadow-md flex justify-center items-center h-full'>
                <Image
                  src="/images/2024/jan/BEE_T7_YEP_2.jpg"
                  width={2560}
                  height={1440}
                  className='p-1 rounded-md shadow-md'
                  alt="OF1 YEP" />
              </figure>
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
    </div>
  );
}
