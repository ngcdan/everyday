import { Metadata } from 'next';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: 'everyday',
};

export default function Page() {
  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Everyday</h2>
      <p className='my-5 text-gray-600'>
        I keep a development log for some of the project I'm working on, you can find them here:
      </p>

      <section>
        <h2 className='font-bold text-xl'>I. Recently Added</h2>
        <div>
          <p className='mt-3'>
            <span className={`font-bold ${lusitana.className} antialiased px-5 text-gray-600`}>2024.01.29</span>
            <Link href="everyday/reading/cultivate-an-inclination-towards-resistance-and-pain">
              Reading - Cultivate an inclination towards resistance and pain.
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
}
