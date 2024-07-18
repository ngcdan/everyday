import { Metadata } from 'next';
import Link from 'next/link';
import { merriweather } from '@/lib/fonts'
import { getAllPostIds, getPostData } from '@/lib/post';

//Trang chi tiết bài viết, với [slug] là dynamic segment.
export const metadata: Metadata = {
  title: 'posts',
};

export default async function BlogPostPage({ params }: any) {
  const { slug } = params;
  const postData: any = await getPostData(slug);

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

        <div className='my-3 mx-5'>
          <p>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </p>
        </div>

      </section>


    </div>
  );
}

//Similar to getStaticPaths - it helps define the possible parameter values for your routes.
export async function generateStaticParams() {
  const paths = getAllPostIds();
  if (!paths) [{ slug: 'pre-rendering' }, { slug: '2' }]
  return paths;
}