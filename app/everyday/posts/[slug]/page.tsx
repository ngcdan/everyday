import { Metadata } from 'next';
import { getPostData } from '../../api/post';
import { UIBlogContent } from '@/app/dev/lib/components/UIBlog';

export const metadata: Metadata = {
  title: 'Blog',
};

//Trang chi tiết bài viết, với [slug] là dynamic segment.
export default async function BlogPostPage({ params }: any) {
  const { slug } = params;
  let postData: any = await getPostData(slug);
  const { title, date, contentHtml } = postData;

  return (
    <UIBlogContent title={title} date={date} contentHtml={contentHtml} />
  );
}

