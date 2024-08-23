---
title: 'React Context API for Class Component'
date: '2024-08-23'
tags: dev, coding, reactjs
---

### React Context API

Để giải quyết vấn đề của bạn trong một ứng dụng React sử dụng **class components**, và bạn muốn tránh việc truyền object qua từng cấp component dưới dạng **props**, đồng thời vẫn cho phép các component con đọc và thay đổi object này, **React Context API** là giải pháp thích hợp.

### 1. Giải pháp sử dụng Context API

**React Context API** cho phép bạn tạo một "ngữ cảnh" để lưu trữ object của bạn và cho phép bất kỳ component nào trong cây component truy cập, đọc, và thay đổi object này mà không cần truyền qua từng cấp bằng props.

### 2. Cách thiết kế và triển khai

### Bước 1: Tạo Context

Đầu tiên, bạn tạo một Context để lưu trữ object của bạn.

```tsx
import React, { createContext } from 'react';

// Giả sử object của bạn là kiểu dữ liệu như sau:
interface MyObject {
  property1: string;
  property2: number;
  // Các thuộc tính khác...
}

// Khởi tạo context với kiểu dữ liệu là object của bạn và một hàm để cập nhật nó
export const MyObjectContext = createContext<{
  myObject: MyObject;
  setMyObject: (obj: MyObject) => void;
} | undefined>(undefined);

```

### Bước 2: Tạo Provider để quản lý trạng thái của object

Tiếp theo, bạn tạo một `Provider` để quản lý trạng thái của object và cung cấp nó cho các component con.

```tsx
import React, { Component } from 'react';
import { MyObjectContext } from './MyObjectContext';

class MyObjectProvider extends Component {
  state = {
    myObject: {
      property1: 'Giá trị mặc định',
      property2: 0,
    },
  };

  setMyObject = (newObject: MyObject) => {
    this.setState({ myObject: newObject });
  };

  render() {
    return (
      <MyObjectContext.Provider
        value={{
          myObject: this.state.myObject,
          setMyObject: this.setMyObject,
        }}
      >
        {this.props.children}
      </MyObjectContext.Provider>
    );
  }
}

export default MyObjectProvider;

```

### Bước 3: Sử dụng Context trong các Component con

Các component con có thể truy cập và thay đổi object mà không cần thông qua props bằng cách sử dụng `contextType`.

```tsx
import React, { Component } from 'react';
import { MyObjectContext } from './MyObjectContext';

class ChildComponent extends Component {
  static contextType = MyObjectContext;

  context!: React.ContextType<typeof MyObjectContext>;

  handleUpdateObject = () => {
    if (this.context) {
      const updatedObject = {
        ...this.context.myObject,
        property1: 'Giá trị mới',
      };
      this.context.setMyObject(updatedObject);
    }
  };

  render() {
    if (!this.context) {
      return <div>Error: No context found</div>;
    }

    return (
      <div>
        <p>Property 1: {this.context.myObject.property1}</p>
        <p>Property 2: {this.context.myObject.property2}</p>
        <button onClick={this.handleUpdateObject}>Update Object</button>
      </div>
    );
  }
}

export default ChildComponent;

```

### Bước 4: Bao bọc các Component con với Provider

Cuối cùng, bạn bao bọc các component cần truy cập object với `MyObjectProvider`.

```tsx
import React from 'react';
import MyObjectProvider from './MyObjectProvider';
import ChildComponent from './ChildComponent';

class App extends React.Component {
  render() {
    return (
      <MyObjectProvider>
        <ChildComponent />
        {/* Các component con khác */}
      </MyObjectProvider>
    );
  }
}

export default App;

```

### 3. Ưu điểm của Context API trong tình huống này

- **Tránh truyền props qua nhiều cấp**: Bạn không cần truyền object qua từng cấp của component, giảm sự phức tạp và lỗi phát sinh khi có nhiều cấp độ component.
- **Dễ dàng cập nhật trạng thái từ bất kỳ component nào**: Các component con có thể cập nhật object mà không cần phải gửi hàm callback từ component cha.
- **Dễ bảo trì**: Khi bạn cần thay đổi cấu trúc của object, bạn chỉ cần chỉnh sửa trong context, không cần thay đổi từng component truyền props.

### Tóm tắt:

- Bạn nên sử dụng **React Context API** để quản lý object của mình.
- Bao bọc các component con bằng một `Provider` để chia sẻ object và các phương thức cập nhật giữa các component mà không cần truyền qua props.
- Context API giúp giảm thiểu sự phức tạp trong quản lý state toàn cục và tăng tính dễ đọc của code.

Bạn có thể sử dụng `PureComponent` hoặc `shouldComponentUpdate` để kiểm soát việc cập nhật component chỉ khi phần của object mà component đó quan tâm thay đổi.

