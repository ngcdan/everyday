---
title: 'useLocalStorage Hook'
date: '2024-08-22'
tags: dev, coding, reactjs
---

### useLocalStorage Hook

```tsx
function useLocalStorage<T>(
  storageKey: string,
  fallbackState: T
): [T, React.Dispatch<React.SetStateAction<T>>]

```

### **Tham số**

- `storageKey` (`string`): Khóa dùng để lưu trữ và truy xuất giá trị trong `localStorage`.
- `fallbackState` (`T`): Giá trị mặc định được sử dụng nếu không có giá trị nào được lưu trữ trong `localStorage`.

### **Trả về**

- **`[value, setValue]`**: Mảng chứa:
    - `value` (`T`): Giá trị hiện tại của state, lấy từ `localStorage` hoặc `fallbackState`.
    - `setValue` (`React.Dispatch<React.SetStateAction<T>>`): Hàm để cập nhật giá trị của state và đồng bộ hóa với `localStorage`.

### **Cách sử dụng**

```tsx
const [theme, setTheme] = useLocalStorage<string>('theme', 'light');

// Đọc giá trị `theme` từ `localStorage`, nếu không có thì sử dụng giá trị mặc định là 'light'.
// Khi `theme` thay đổi, nó sẽ tự động được lưu vào `localStorage`.

```

### **Ví dụ**

```tsx
import React from 'react';
import { useLocalStorage } from './path/to/hooks';

function App() {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

```

### **Lợi ích**

- **Tính bền vững**: Giữ lại trạng thái ngay cả khi tải lại trang.
- **Dễ sử dụng**: Cung cấp một cách đơn giản để quản lý và lưu trữ state.
- **Tái sử dụng**: Có thể dễ dàng áp dụng trong nhiều component khác nhau mà không cần viết lại logic.

