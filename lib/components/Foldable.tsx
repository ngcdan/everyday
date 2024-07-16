'use client'

import React, { useState } from 'react';

interface FoldableProps {
  children: React.ReactNode;
  label?: string;
  defaultFolded?: boolean;
  className?: string;
  headerCss?: string;
  style?: React.CSSProperties;
}

function Foldable({ children, label = 'Foldable', defaultFolded = true, className, style, headerCss }: FoldableProps) {
  const [isFolded, setIsFolded] = useState(defaultFolded);

  const toggleFold = () => {
    setIsFolded(!isFolded);
  };

  return (
    <div className={className} style={style}>
      <button className={headerCss} onClick={toggleFold}>
        {label} {isFolded ? '▼' : '▲'}
      </button>
      {!isFolded && <div>{children}</div>}
    </div>
  );
}

export default Foldable;
