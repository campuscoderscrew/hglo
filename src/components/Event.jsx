import "../App.css"

export default function Event({ event, click, open }) {
  let { img, title, month, day, time, location, description, type } = event;

  const openModal = () => {
    click(event);
    open(true);
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

  return (
    <div className="*:shadow-lg hover:cursor-pointer"
      onClick={openModal}
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
          <div className="space-y-2 xl:space-y-3">
            <h2 className="text-xl xl:text-2xl font-bold">{title}</h2>

            <div className="flex gap-2">
              <img src="events-icons/calendar.svg" className="w-6" />
              <span className="font-light capitalize">{month} {day}, {time}</span>
            </div>

            <div className="flex gap-2">
              <img src="events-icons/location.svg" className="w-6" />
              <span className="font-light">{location}</span>
            </div>

            <p className="mt-2 text-sm xl:text-base text-black line-clamp-3">
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
            flex flex-col relative 
            text-[#3E685F]"
        >
          <div className="mb-2 w-full flex justify-between">
            <span className="font-bold">{month} {day}</span>
            <span>{time}</span>
          </div>

          <h2 className="mb-4 text-base sm:text-lg md:text-xl">{title}</h2>

          <div className="flex items-center gap-x-2">
            <img
              src="/events-icons/location.svg"
              className="block w-6"
            />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
