import { Metadata } from 'next';
import Link from 'next/link';

import { getAllPostIds, getPostsGroupedByTags } from '../api/post';
import { UIBlogIndex } from '@/app/dev/lib/components/UIBlog';

export const metadata: Metadata = {
  title: 'Archive',
};

export default async function PostListPage() {
  const postsByYearAndTags = getPostsGroupedByTags();
  const postIds = getAllPostIds();

  return (
    <div className="max-w-3xl w-full mx-auto px-4">
      <div className="py-8">
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Archive
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Explore all my posts, organized chronologically and by category.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Recently Added</h2>
          <UIBlogIndex postIds={postIds} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Posts by Categories</h2>
          {Object.entries(postsByYearAndTags).map(([tag, posts]) => (
            <div key={tag} className="mb-8">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">#{tag}</h3>
              <ul className="space-y-3">
                {(posts as Array<{ slug: string; title: string; date: string }>).map((post) => (
                  <li key={post.slug} className="flex items-baseline">
                    <span className="mr-2 text-gray-400">•</span>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
                    >
                      {post.title}
                      <span className="ml-2 text-sm text-gray-500">({post.date})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div >
  );
}

