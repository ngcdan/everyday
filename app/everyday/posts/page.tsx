import { Metadata } from 'next';
import { getAllPostIds, getPostsGroupedByTags } from '../api/post';
import { UIBlogIndex } from '@/app/dev/lib/components/UIBlog';

export const metadata: Metadata = {
  title: 'Archive',
};

export default async function PostListPage() {
  let postsByYearAndTags: any = getPostsGroupedByTags();
  let postIds: any = getAllPostIds();

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
          <UIBlogIndex postIds={postIds} />
        </div>
      </section>

      <section className='my-4'>
        <h2 className='text-xl font-bold'>2. Posts by Categories</h2>
        {
          Object.keys(postsByYearAndTags).map((tag) => (
            <div key={tag} className='my-4'>
              <h4 className='text-md font-semibold text-blue-600'>{tag}</h4>
              <ul className='list-disc pl-5'>
                {
                  postsByYearAndTags[tag].map((post: any) => (
                    <li key={post.slug} className='mt-2'>
                      <a href={`/posts/${post.slug}`} className='text-gray-700 hover:text-blue-500'>
                        {post.title} <span className='text-sm text-gray-500'>({post.date})</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </section>

    </div>
  );
}

