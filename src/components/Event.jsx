import "../App.css"
import { useState } from "react"
import { ChevronDown } from "lucide-react";


export default function Event({ event, click, open }) {
  let { img, title, month, day, time, location, description, type } = event;

  const [toggle, setToggle] = useState(false);

  const openModal = () => {
    if (window.innerWidth >= 768) { // Only open on >= medium screens
      click(event);
      open(true);
    }
  }

  const eventColors = {
    "work-study": "bg-[#C7DAD3]",
    "social": "bg-[#FEEBB0]",
    "educational": "bg-[#F7DCCF]",
    "wellness": "bg-[#BAD6E0]",
    "other": "bg-[#bfbfbf]",
  }

  const eventColor = (type = type?.toLowerCase()) in eventColors
    ? eventColors[type]
    : eventColors["other"];


  function format(text, max) {
    if (text.length > max) {
      return text.slice(0, max) + "..."
    }
    return text;
  }

  return (
    <div className="*:shadow-lg hover:cursor-pointer" onClick={openModal}
    >
      {/* >= Large screens */}
      <div className="hidden lg:block">
        <img
          src={img}
          className="-mb-4 w-full h-64 rounded-xl object-cover"
        />

        {/* 
          * The tab height is the total height minus the height of the image 
        */}
        <div className="p-8 h-[calc(100%-240px)] relative 
            flex flex-col justify-between
            bg-white rounded-lg
            text-base xl:text-lg text-[#434343]"
        >
          {/* Event main information */}
          <div className="space-y-4 xl:space-y-3">
            <h2 className="text-xl xl:text-2xl font-bold mb-5">{title}</h2>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <img src="events-icons/time.svg" className="w-6" />
                <span className="font-light capitalize">{month} {day}, {time}</span>
              </div>

              <div className="flex gap-3">
                <img src="events-icons/location.svg" className="w-6" />
                <span className="font-light">{format(location, 25)}</span>
              </div>
            </div>

            <p className="mt-2 text-sm xl:text-base text-black line-clamp-2">
              {description}
            </p>
          </div>

          {/* Event type badge and register button */}
          <div className="mt-8 justify-self-end flex justify-between
              *:px-6 *:py-2 *:rounded *:shadow-lg"
          >
            <span className={`${eventColor} text-black capitalize`}>
              {type != null ? type : "Other"}
            </span>

            <button className="bg-hglo-main-500
              text-white bold cursor-pointer"
            >
              Register
            </button>
          </div>

        </div>
      </div>


      {/* <= Md screens */}
      <div className="bg-white *:transition-all duration-100">
        <div className="lg:hidden p-4 w-full
          flex justify-start gap-4 
          bg-white rounded-lg
          text-xs sm:text-sm md:text-base"
        >
          <div className="h-20 sm:h-24 md:h-28 aspect-square self-center">
            <img
              src={img}
              className="size-full object-cover
              relative rounded-lg m-auto"
            />
          </div>

          <div className="w-full
            flex flex-col justify-center relative 
            text-[#3E685F] gap-2"
          >
            <div className="w-full flex justify-between">
              <span className="font-bold">{month} {day}</span>
              <span>{time}</span>
            </div>

            <h2 className="text-base sm:text-lg md:text-xl font-[500] -mt-1">{title}</h2>

            <div className="hidden md:flex md:items-center md:gap-x-2">
              <img
                src="/events-icons/location.svg"
                className="block w-4"
              />
              <span className="text-lg">{location}</span>
            </div>
            <div className="flex md:hidden mr-2 items-end justify-between">
              <span className="flex gap-1 items-center" onClick={() => { setToggle(prev => !prev) }}>
                <p>See More</p>
                <div className="">
                  <ChevronDown strokeWidth={2} size={14} className={`relative top-0.5 transition-all transform ${toggle ? 'rotate-180' : 'rotate-0'} duration-400`} />
                </div>
              </span>
            </div>
          </div>
        </div>

        {/* See More */}
        <div className={`transition-all duration-600 overflow-hidden ease-in-out ${toggle ? 'max-h-50 opacity-100' : 'opacity-0 max-h-0'} flex flex-col`}>
          <p className="px-4 py-2 bg-white mb-2">{description}</p>
          <div className="flex w-full p-4 pt-0 justify-between *: capitalize *:px-6 *:py-2 *:rounded *:shadow-lg *:text-sm *:mt-1">
            <span className={`${eventColor} text-black`}>
              {type != null ? type : "Other"}
            </span>
            <button className="bg-hglo-main-500
              text-white bold cursor-pointer"
            >
              Register
            </button>
          </div>
        </div>

      </div>
    </div >
  );
}