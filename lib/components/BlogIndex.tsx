'use client'

import Link from 'next/link';
import React from 'react';
import { merriweather } from '../fonts';

interface BlogIndexProps {
  postIds: any[];
  className?: string;
  style?: React.CSSProperties;
}

function BlogIndex({ className, style, postIds }: BlogIndexProps) {
  return (
    <div className={className} style={style}>
      {postIds.map(({ date, title, slug }: any) => (
        <p key={slug} className='text-gray-800'>
          <span className={`inline font-bold text-md ${merriweather.className}`} style={{ marginRight: '15px' }}>
            {date}
          </span>
          <Link className='hover:underline' href={`everyday/posts/${slug}`}>
            {title}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default BlogIndex;
