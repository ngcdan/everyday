## Everyday

## Format Markdown from OpenAI API repsonse

```bash
npm install react-markdown remark-gfm rehype-raw rehype-highlight
```

- Tạo một component để hiển thị nội dung markdown từ API.

```jsx
// components/MarkdownRenderer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Để hỗ trợ GitHub Flavored Markdown (GFM)
import rehypeRaw from 'rehype-raw'; // Để xử lý HTML trong markdown

<ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <pre className={`rounded-md my-2 ${className}`} {...props}>
                <code className={`language-${match[1]}`}>{children}</code>
              </pre>
            ) : (
              <code className="bg-gray-200 rounded p-1" {...props}>
                {children}
              </code>
            );
          },
        }}
      />

```

