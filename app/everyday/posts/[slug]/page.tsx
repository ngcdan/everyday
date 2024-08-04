import { Metadata } from 'next';
import { getPostData } from '@/lib/post';

//Trang chi tiết bài viết, với [slug] là dynamic segment.
export const metadata: Metadata = {
  title: 'Post Detail',
};

export default async function BlogPostPage({ params }: any) {
  const { slug } = params;
  let postData: any = await getPostData(slug)
  const { title, date, contentHtml } = postData;


  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold leading-tight text-gray-900 mb-4">{title}</h2>
      <div className="text-sm text-gray-500 mb-8">{`Posted On ${date}`}</div>

      {/* Post Content */}
      <div className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

