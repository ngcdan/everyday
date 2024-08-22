'use client'

//// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
import React, { useEffect } from 'react';
import Link from 'next/link';
import { merriweather } from '../fonts';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

interface BlogIndexProps {
  postIds: any[];
  className?: string;
  style?: React.CSSProperties;
}

export function UIBlogIndex({ className, style, postIds }: BlogIndexProps) {
  return (
    <div className={className} style={style}>
      {postIds.map(({ date, title, slug }: any) => (
        <p key={slug} className='text-gray-800'>
          <span className={`inline font-bold text-md ${merriweather.className}`} style={{ marginRight: '15px' }}>
            {date}
          </span>
          <Link className='hover:underline' href={`/everyday/posts/${slug}`}>
            {title}
          </Link>
        </p>
      ))}
    </div>
  );
}

interface UIBlogContentProps {
  title: string;
  date: string;
  contentHtml: string;
}
export function UIBlogContent({ title, date, contentHtml }: UIBlogContentProps) {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="max-w-5xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900">{title}</h2>
      <div className="mb-8 text-gray-600 text-md">{`Posted On ${date}`}</div>
      <div className="prose prose-lg max-w-none converted-html"
        dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>

  )
}

