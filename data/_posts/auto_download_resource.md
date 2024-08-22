---
title: 'Auto Download Resource'
date: '2024-08-20'
tags: dev, coding, javascript
---

### Tự động download resources

    Để tự động tải xuống file audio mỗi khi bạn gọi hàm `toSpeech`, bạn có thể tạo một phần tử `<a>` tạm thời, thiết lập thuộc tính `href` của nó là URL của audio và kích hoạt sự kiện `click` trên phần tử đó. Điều này sẽ tự động tải xuống file khi `toSpeech` được gọi.

    Dưới đây là cách cập nhật hàm `toSpeech` của bạn để tự động tải xuống file audio:

    ```
    const toSpeech = async () => {
      const response = await fetch('/chatbot/tts/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const arrayBuffer = await response.arrayBuffer();

      const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);

      console.log('--------- audio -----------------');
      console.log(url);

      setAudio(url);

      // Tạo một phần tử <a> tạm thời
      const a = document.createElement('a');
      a.href = url;

      // Đặt tên file bạn muốn tải xuống
      a.download = 'generated-audio.mp3';

      // Kích hoạt sự kiện click để tải file
      a.click();

      // Giải phóng URL sau khi tải xuống
      URL.revokeObjectURL(url);
    }

    ```

    ### Giải thích:

    - **Tạo phần tử `<a>` tạm thời**: Phần tử `<a>` được tạo ra để thiết lập hành động tải xuống.
    - **Thiết lập `href` và `download`**: `href` được gán với URL của blob, và `download` là tên file mà bạn muốn tải xuống.
    - **Kích hoạt sự kiện `click`**: Sự kiện `click` được kích hoạt để thực hiện việc tải xuống.
    - **Giải phóng URL**: Sau khi tải xong, URL được giải phóng bằng `URL.revokeObjectURL(url)` để tránh rò rỉ bộ nhớ.