### Using Server Components to fetch data

- Server components allow you fetch data directly from your database.

### What are request waterfalls? 

- refers to a sequence of network requests that depend on the completion of previous requests. In the case of data fetching, each request can only begin once the previous request has returned data.

### What is Static Rendering?

- With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or during revalidation.

### What is streaming?

- a data transfer technique that allows you to break down a large data set into smaller chunks.
- by streaming, you can prevent slow data requests from blocking your whole page. This allows the user to see and interact with parts of the page without waiting for all the data to load before any UI can be shown to the user

### Route Groups

- allow you to organize files into lotgical groups without affecting the URL path structure.
- Create a new folder using parentheses (), the name won't be included in the URL path. So `/dashboard/(overview)/page.tsx` become `/dashboard`

### Streaming a component?

- Suspense allows you to defer rendering parts of your app until some condition is met.

### Css note
overflow-x-auto: Đảm bảo bảng có thể cuộn ngang nếu vượt quá chiều rộng màn hình.
fixed top-0 left-0 right-0 z-10: cố định đầu trang, z-10 đảm bảo form hiển thị trên các thành phần khác.
overflow-y-auto max-h-screen: Cuộn dọc và không vượt quá chiều cao màn hình.


###
app/
└── ui-examples/
    ├── foldable/
    │   └── page.tsx   // Component UI cho trang Foldable
    └── layout.tsx     // Layout chung cho thư mục ui-examples


18.07.2024
###  Customize PostCSS Config.
- Công cụ chuyển đổi và mở rộng css, cho phép sử dụng css mới nhất mà chưa được hỗ trợ đầy đủ trên mọi trình duyệt.

_Out of the box, with no configuration, Next.js compiles CSS using PostCSS._
_(postcss.config.js)[https://github.com/vercel/next.js/tree/canary/examples/with-postcss]_

#### SSG with data using _getStaticProps_
[Static Generation](https://nextjs.org/docs/advanced-features/data-fetching#static-generation)
```
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```
Essentially, _getStaticProps_ allow you to tell Nextj:
_This page has some data dependencies - so when you pre-render this page at build time, make sure to resolve them first_


 ### Dynamic Routes
[](https://nextjs.org/learn-pages-router/basics/dynamic-routes/page-path-external-data)

Overview of the steps


