import React from "react";
import Foldable from "@/app/dev/lib/components/Foldable";

// Example usage
export class FoldableExample extends React.Component {
  render() {
    return (
      <div>
        <h2>Foldable Example</h2>
        <Foldable label="Foldable">
          <p>Content</p>
          <ul>
            <li>Mục 1</li>
            <li>Mục 2</li>
          </ul>
        </Foldable>
        <Foldable label="Chi tiết sản phẩm 2" defaultFolded={false}>
          <p>Content</p>
        </Foldable>
      </div>
    )
  }
}