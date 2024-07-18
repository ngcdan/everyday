import { Metadata } from 'next';
import Link from 'next/link';
import { merriweather } from '@/lib/fonts'
import { getAllPostIds } from '@/lib/post';

export const metadata: Metadata = {
  title: 'Everyday',
};

export default async function Page() {
  let paths = getAllPostIds();

  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Everyday</h2>
      <p className='my-5 mx-4 text-gray-600'>
        I keep a development log for some of the project I'm working on, you can find them here:
      </p>

      <section className='my-4'>
        <h2 className='font-bold text-xl'>I. Recently Added</h2>
        <div className='my-3 mx-5'>
          <p>
            <span className={`block md:inline-block font-bold ${merriweather.className} text-gray-600`}>
              2024.01.29
            </span>
            <Link className='ml-3' href="everyday/reading/cultivate-an-inclination-towards-resistance-and-pain">
              Reading - Cultivate an inclination towards resistance and pain.
            </Link>
          </p>
        </div>

        {paths.map((path: any) => {
          return (
            <p key={path}>
              <span className={`block md:inline-block font-bold ${merriweather.className} text-gray-600`}>
                2024.01.29
              </span>
              <Link className='ml-3' href="everyday/reading/cultivate-an-inclination-towards-resistance-and-pain">
                {path['slug']}
              </Link>
            </p>
          )
        })}
      </section>
    </div>
  );
}

//Similar to getStaticPaths - it helps define the possible parameter values for your routes.
export function generateStaticParams() {
  const paths = getAllPostIds();
  console.log(paths);
  return paths;

}