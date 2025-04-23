import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg w-[90%] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
