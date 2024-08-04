import { Metadata } from 'next';
import { getAllPostIds } from '@/lib/post';
import BlogIndex from '@/lib/components/BlogIndex';

export const metadata: Metadata = {
  title: 'Archive',
};

export default async function EverydayPage() {
  let postIds = getAllPostIds();

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
        <h2 className='text-xl font-bold'>1. Recently Added</h2>
        <div className='mx-5 my-3'>
          <BlogIndex postIds={postIds} />
        </div>
      </section>

      <section className='my-4'>
        <h2 className='text-xl font-bold'>2. Posts by categories</h2>
      </section>

    </div>
  );
}

