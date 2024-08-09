"use client"

import { UIModel } from "@/lib/components/UIModel";
import React, { useState } from "react";

// Example usage

export default function ModelExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className='my-8' >
      <button className="btn" onClick={handleOpenModal}>Open Modal</button>
      <UIModel
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Hello!" >
        Press ESC key or click outside to close
      </UIModel>
    </div>
  )
}