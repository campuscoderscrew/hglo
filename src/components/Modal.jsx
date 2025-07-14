import React from "react";

export default function Modal({ open, children, onClose, event }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 transition-opacity duration-300 px-4 sm:px-6 lg:px-8"
      onClick={onClose}
    >

      {/* Center modal in relation to screen-size - navbar (2.25 on top and bottom) */}
      <div
        className="absolute w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-lg overflow-y-auto max-h-[90vh] top-[50%] transform -translate-y-[calc(50%-2.25rem)]"
        onClick={(e) => e.stopPropagation()}
      >

        {event && (
          <div className="space-y-4">
            <img src={event.img} className="w-full border-t-0 rounded-xl" />
            <div className="flex items-center justify-between bg-">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="text-gray-600">
                {event.month} {event.day}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-600 flex gap-2">
                <img src="/events-icons/time.svg" className="w-4" />
                {event.time}
              </span>
              <span className="text-gray-600 flex gap-2">
                <img
                  src="/events-icons/location.svg"
                  className="block w-4"
                />
                {event.location}
              </span>
            </div>
            <p className="text-sm">{event.description}</p>
            <button
              className="px-6 py-2 bg-[#66AB7B] rounded shadow text-white font-bold"
            >
              Register
            </button>
          </div>
        )}



        {/* Close Button */}
        <button
          className="absolute top-1 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold hover:cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
