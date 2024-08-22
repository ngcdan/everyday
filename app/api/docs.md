Để xử lý tất cả các yêu cầu preflight (OPTIONS) cho các request chéo origin trong ứng dụng Next.js sử dụng App Router, bạn cần tạo một middleware để xử lý `OPTIONS` request cho toàn bộ ứng dụng. Middleware này sẽ trả về phản hồi với các headers CORS thích hợp.

### Kế hoạch thực hiện:
1. **Tạo middleware trong Next.js**: Sử dụng middleware để xử lý tất cả các yêu cầu preflight.
2. **Cấu hình CORS headers**: Đặt các headers cần thiết cho CORS trong response của `OPTIONS` request.
3. **Kết hợp với các routes API**: Đảm bảo rằng middleware này được áp dụng cho tất cả các routes, đặc biệt là các API routes.

### Implement chi tiết:

1. **Tạo middleware `middleware.ts`**: Đặt middleware này ở cấp độ root của thư mục `app` để áp dụng cho toàn bộ ứng dụng.

```typescript
// app/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.method === 'OPTIONS') {
    const headers = {
      'Access-Control-Allow-Origin': '*', // hoặc cấu hình domain cụ thể
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    return new NextResponse(null, { status: 204, headers });
  }

  // Tiếp tục request với các method khác
  return NextResponse.next();
}
```

2. **Cập nhật `next.config.js` (nếu cần thiết)**:
   - Nếu bạn muốn tùy chỉnh thêm hoặc chỉ định các routes cụ thể cho middleware, bạn có thể cấu hình trong `next.config.js`.

```javascript
// next.config.js
module.exports = {
  async middleware() {
    return [
      {
        source: '/api/:path*',
        middleware: 'app/middleware.ts',
      },
    ];
  },
};
```

3. **Cấu hình API Routes**:
   - Đảm bảo rằng các API routes của bạn có thể tiếp tục hoạt động mà không cần xử lý `OPTIONS` riêng lẻ, vì middleware sẽ xử lý trước.

### Giải thích:
- **Middleware**: Đoạn code trong `middleware.ts` sẽ kiểm tra nếu phương thức của request là `OPTIONS`, thì nó sẽ trả về phản hồi với status `204` và các headers cần thiết cho CORS.
- **Headers**: `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, và `Access-Control-Allow-Headers` là các headers cơ bản để xử lý CORS.

### Gợi ý cải thiện:
**a.** Tạo thêm các unit tests để kiểm tra phản hồi của middleware với các phương thức khác nhau.
**b.** Cấu hình các giá trị headers CORS một cách linh hoạt để phù hợp với các môi trường khác nhau (development, production).