import { Metadata } from 'next';
import Link from 'next/link';
import { merriweather } from '@/lib/fonts'
import { getAllPostIds } from '@/lib/post';

export const metadata: Metadata = {
  title: 'Archive',
};

export default async function Page() {
  let paths = getAllPostIds();

  return (
    <div className='container p-4 mx-auto mt-5 md:p-6 md:mt-8'>
      <div className='w-full mb-6 md:mb-12'>
        <h1 className='mb-2 text-3xl font-bold leading-tight tracking-tighter text-center text-balance md:mb-4 md:text-left md:text-5xl md:leading-none lg:text-6xl'>
          Archive
        </h1>
        <p className='text-xl text-center text-gray-600 text-balance text-muted-foreground md:text-left md:text-2xl'>
          Here's all my posts in chronological order. Cheers!
        </p>
      </div>

      <section className='my-4'>
        <h2 className='text-xl font-bold'>I. Recently Added</h2>
        <div className='mx-5 my-3'>
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