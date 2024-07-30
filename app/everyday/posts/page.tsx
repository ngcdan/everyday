import { Metadata } from 'next';
import Link from 'next/link';
import { merriweather } from '@/lib/fonts'
import { getAllPostIds, getPostData } from '@/lib/post';

//Trang danh sách bài viết (blog index).
export const metadata: Metadata = {
  title: 'posts',
};

export default async function BlogPostPage() {
  let paths = getAllPostIds();
  console.log(paths);

  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Everyday</h2>
      <p className='my-5 mx-4 text-gray-600'>
        I keep a development log for some of the project I'm working on, you can find them here:
      </p>

      <section className='my-4'>
        <h2 className='font-bold text-xl'>I. Recently Added</h2>
        <div className='my-3 mx-5'>

        </div>
      </section>


    </div>
  );
}

