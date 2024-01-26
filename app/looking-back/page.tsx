import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'looking-back',
};

export default function Page() {
  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>
        Looking back
      </h2>
      <p className='my-5 text-gray-600 italic'>Below are all my public journal entries.</p>

      <section className='my-5'>
        <h3 className='text-2xl font-bold my-1'>2024</h3>
        <div>
          <h5 className='font-bold text-gray-600 my-1'>January</h5>

          <div className='my-2 px-4 py-4 bg-gray-100 rounded-md shadow-md'>
            <h5 className='mb-1 italic'>19.01.2024 - Tất niên OF1</h5>
            <Image
              src="/images/2024/jan/BEE_T7_YEP.jpg"
              width={2568}
              height={1926}
              alt="OF1 YEP" />
            <Image
              src="/images/2024/jan/BEE_T7_YEP_1.jpg"
              width={2056}
              height={1182}
              alt="OF1 YEP" />
            <Image
              src="/images/2024/jan/BEE_T7_YEP_2.jpg"
              width={2560}
              height={1440}
              alt="OF1 YEP" />
          </div>

          <figure className='my-2 px-4 py-4 bg-gray-100 rounded-md shadow-md'>
            <Image
              src="/images/wine_2.jpg"
              width={2040}
              height={1530}
              alt="Tet 1" />
            <figcaption>Không khí trước Tết ở quê</figcaption>
          </figure>

          <figure className='my-2 px-4 py-4 bg-gray-100 rounded-md shadow-md'>
            <Image
              src="/images/tracy.jpg"
              width={960}
              height={1280}
              alt="Tet 2" />
            <figcaption>Cây đào từ năm trước</figcaption>
          </figure>
        </div>

      </section>

    </div>
  );
}
