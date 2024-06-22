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