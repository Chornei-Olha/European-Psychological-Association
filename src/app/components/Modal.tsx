import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-lg w-[90%] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl text-black"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
