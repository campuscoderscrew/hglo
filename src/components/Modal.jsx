import React from "react";
import { useEffect } from "react";
import { X } from "lucide-react"

export default function Modal({ open, children, onClose, event }) {

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Clean up just in case
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);


  if (!open) return null;

  const eventColors = {
    "work-study": "bg-[#C7DAD3]",
    "social": "bg-[#FEEBB0]",
    "educational": "bg-[#F7DCCF]",
    "wellness": "bg-[#BAD6E0]",
    "other": "bg-[#bfbfbf]",
  }

  const eventColor = (event.type = event.type?.toLowerCase()) in eventColors
    ? eventColors[event.type]
    : eventColors["other"];


  function format(text, max) {
    if (text.length > max) {
      return text.slice(0, max) + "..."
    }
    return text;
  }

  return (
    <>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center sm:bg-black/20 transition-opacity duration-300 px-4 sm:px-6 lg:px-8 backdrop-blur-md"
        onClick={onClose}
      >

        <div className="absolute w-full h-full bg-white blur-sm flex flex-col">
          <div className="h-[50%]">
            <img className="w-full h-full object-cover" src={event.img} />
          </div>
          <div className="bg-white h-[50%]"></div>
        </div>

        {/* Center modal in relation to screen-size - navbar (2.25 on top and bottom) */}
        <div
          className="absolute w-full sm:h-max sm:max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg overflow-y-auto max-h-max sm:max-h-[90vh] top-[50%] transform -translate-y-[calc(50%-2.25rem)]"
          onClick={(e) => e.stopPropagation()}
          id="modal"
        >

          {event && (
            <div className="flex flex-col">
              <img src={event.img} className="w-full h-[40%] sm:border-t-0 rounded-t-lg" />
              <div className="space-y-4 xl:space-y-3 p-6">
                <h2 className="text-xl xl:text-2xl font-bold mb-5">{event.title}</h2>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <img src="events-icons/time.svg" className="w-6" />
                    <span className="font-light capitalize">{event.month} {event.day}, {event.time}</span>
                  </div>

                  <div className="flex gap-3">
                    <img src="events-icons/location.svg" className="w-6" />
                    <span className="font-light">{event.location}</span>
                  </div>
                </div>

                <p className="mt-2 text-sm xl:text-base text-black">
                  {event.description}
                </p>


                {/* Event type badge and register button */}
                <div className="mt-8 justify-self-end flex justify-between
              *:px-6 *:py-2 *:rounded *:shadow-l w-full"
                >
                  <span className={`${eventColor} text-black capitalize`}>
                    {event.type != null ? event.type : "Other"}
                  </span>

                  <button className="bg-hglo-main-500
              text-white bold cursor-pointer"
                  >
                    Register
                  </button>
                </div>
              </div>

            </div>
          )}



          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-800 hover:text-red-600 bg-white rounded-lg p-1 px-2 border-1 border-white text-sm font-[500] hover:cursor-pointer flex justify-center items-center gap-1"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X strokeWidth={3} size={14} />
            Close
          </button>
        </div>
      </div>
    </>
  );
}
