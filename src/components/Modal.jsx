import React from "react";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 transition-opacity duration-300 px-4 sm:px-6 lg:px-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-lg overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}
