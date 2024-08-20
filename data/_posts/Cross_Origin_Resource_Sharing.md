---
title: 'Cấu hình CORS trong API Route của Next.js'
date: '2024-08-20'
tags: dev, coding
---

### Các khái niệm chính:

1. **CORS (Cross-Origin Resource Sharing)**:
   - **CORS** là một cơ chế bảo mật cho phép hoặc ngăn chặn các yêu cầu giữa các gốc khác nhau (cross-origin requests). Khi bạn cố gắng truy cập tài nguyên từ một domain khác với domain của trang web hiện tại, trình duyệt sẽ kiểm tra xem server đích có cho phép yêu cầu đó không.
   - Ví dụ: Nếu ứng dụng của bạn chạy trên `http://localhost:5173` và bạn muốn gọi API từ `http://localhost:3000`, đây là một yêu cầu cross-origin.

2. **Preflight Request**:
   - Trước khi thực hiện yêu cầu chính (như `POST`, `PUT`, `DELETE`), trình duyệt thường gửi một yêu cầu `OPTIONS` để kiểm tra xem server có cho phép yêu cầu cross-origin này không. Đây được gọi là `preflight request`.
   - Server cần trả về các header CORS thích hợp để cho phép hoặc từ chối yêu cầu.

3. **CORS Headers**:
   - **`Access-Control-Allow-Origin`**: Header này xác định domain nào có quyền truy cập vào tài nguyên trên server. Giá trị có thể là một domain cụ thể (`http://example.com`) hoặc ký tự đại diện `*` cho phép tất cả các domain.
   - **`Access-Control-Allow-Methods`**: Xác định những phương thức HTTP (`GET`, `POST`, `PUT`, v.v.) mà server cho phép từ các domain khác.
   - **`Access-Control-Allow-Headers`**: Xác định những header nào có thể được sử dụng trong yêu cầu cross-origin.

4. **Mode `no-cors`**:
   - Nếu bạn đặt `mode` của yêu cầu `fetch` thành `'no-cors'`, trình duyệt sẽ bỏ qua một số kiểm tra CORS và chỉ cho phép bạn truy cập một số dữ liệu hạn chế trong phản hồi. Tuy nhiên, điều này thường không được khuyến nghị vì nó không giải quyết vấn đề CORS một cách toàn diện.

### Giải pháp để khắc phục lỗi CORS:

Để khắc phục lỗi này, bạn cần cấu hình server để cho phép các yêu cầu từ các domain khác. Dưới đây là cách bạn có thể cấu hình trong Next.js.

### Cấu hình CORS trong API Route của Next.js

Bạn có thể cấu hình CORS trong Next.js bằng cách thêm các header CORS vào trong API route.

#### Ví dụ:

```typescript
import OpenAI from 'openai'
import fs from 'fs-extra';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

export async function POST(req: Request) {
  // Thêm header CORS vào phản hồi
  const headers = {
    "Access-Control-Allow-Origin": "*", // Hoặc thay '*' bằng domain cụ thể như 'http://localhost:5173'
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Xử lý yêu cầu 'OPTIONS' để giải quyết preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: headers,
    });
  }

  try {
    const { text } = (await req.json()) as {
      text: string;
    }

    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "onyx",
      input: text,
    });

    const arrayBuffer = await response.arrayBuffer();

    const date = new Date();
    const dateTimeID = date.toISOString().slice(0, 10).replace(/-/g, '');
    const randomString = Math.random().toString(36).substring(2, 8);
    const fileName = `${dateTimeID}_${randomString}.mp3`;

    const mediaDirPath = `/Users/linuss/Dev/projects/datatp/datatp-build/webui/phoenix/vocab`;
    const fullFilePath = path.join(mediaDirPath, fileName);

    await fs.outputFile(fullFilePath, Buffer.from(arrayBuffer));
    console.log('File saved successfully:', fullFilePath);

    return new Response(JSON.stringify({ fileName, filePath: fullFilePath }), {
      status: 200,
      headers: {
        ...headers, // Thêm header CORS vào phản hồi chính
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    console.error('Error handling the request:', error);

    return new Response(JSON.stringify({ error: 'Failed to generate or save audio' }), {
      status: 500,
      headers: {
        ...headers, // Thêm header CORS vào phản hồi lỗi
        "Content-Type": "application/json",
      },
    });
  }
}
```

### Giải thích:

1. **CORS Headers**:
   - `Access-Control-Allow-Origin: "*"`: Cho phép mọi domain. Nếu bạn muốn chỉ cho phép một domain cụ thể, thay thế `*` bằng URL của domain đó, ví dụ `http://localhost:5173`.
   - `Access-Control-Allow-Methods`: Xác định các phương thức được phép (ví dụ: `POST`, `OPTIONS`).
   - `Access-Control-Allow-Headers`: Xác định các header được phép sử dụng trong yêu cầu.

2. **Xử lý `OPTIONS` Request**:
   - Khi trình duyệt gửi một yêu cầu `OPTIONS` để kiểm tra preflight, API sẽ trả về phản hồi với các header CORS thích hợp và status `204` (No Content), cho phép yêu cầu chính được thực hiện.
