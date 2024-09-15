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
    <ul className={`space-y-4 ${className}`} style={style}>
      {postIds.map(({ date, title, slug }: any) => (
        <li key={slug} className="flex flex-col sm:flex-row sm:items-center sm:justify-between group">
          <span className={`text-sm font-semibold text-gray-500 ${merriweather.className} mb-1 sm:mb-0 sm:w-32`}>
            {date}
          </span>
          <Link
            href={`/everyday/posts/${slug}`}
            className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200 ease-in-out group-hover:underline flex-grow"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
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
  }, [contentHtml]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">{title}</h1>
        <time className="text-sm sm:text-base text-gray-600">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      </header>
      <div
        className="prose prose-sm sm:prose-base lg:prose-lg max-w-none converted-html"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
