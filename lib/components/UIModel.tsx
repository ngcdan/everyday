'use client'

import React, { useRef } from 'react';

interface UIModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function UIModel({ children, isOpen, onClose, title, className, style }: UIModelProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  // Open the modal
  React.useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal();
    } else if (modalRef.current) {
      modalRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="py-4">{children}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </dialog>
  );
}
