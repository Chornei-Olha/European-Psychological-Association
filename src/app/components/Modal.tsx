// components/Modal.tsx
import React from "react";

export default function Modal({ isOpen, onClose, children }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
