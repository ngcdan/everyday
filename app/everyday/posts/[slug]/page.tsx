import { Metadata } from 'next';
import { getPostData } from '@/lib/post';

//Trang chi tiết bài viết, với [slug] là dynamic segment.
export const metadata: Metadata = {
  title: 'Le Ngoc Dan',
};

export default async function BlogPostPage({ params }: any) {
  const { slug } = params;
  let postData: any = await getPostData(slug)
  const { title, date, contentHtml } = postData;


  return (
    <div className="max-w-5xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900">{title}</h2>
      <div className="mb-8 text-gray-600 text-md">{`Posted On ${date}`}</div>

      {/* Post Content */}
      <div className="prose prose-lg max-w-none converted-html"
        dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

