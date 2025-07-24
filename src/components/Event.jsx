import "../App.css"

export default function Event({ event, click, open }) {

  const { img, title, month, day, time, location, description, tag, tagColor } = event

  // 3E685F

  return (
    <div className="w-full flex justify-center relative" onClick={() => {
      click(event);
      open(true);
    }

    }>

      {/* >= Large screens */}
      <div className="hidden lg:block 
        bg-white w-full aspect-[3/4] rounded-lg relative hover:cursor-pointer"
      >
        <img
          src={img}
          className="w-full rounded-lg relative"
        />

        <div className="p-8 -mt-4
            flex flex-row gap-x-6 justify-start relative 
            bg-white box-border rounded-lg
            text-base xl:text-lg text-[#3E685F]"
        >
          <div className="w-max flex flex-col items-center font-bold">
            <p className="text-lg xl:text-xl">{month}</p>
            <p className="text-2xl xl:text-3xl">{day}</p>
          </div>
          <div>
            <h2 className="text-3xl mb-4">{title}</h2>
            <span className="flex items-center gap-x-2 mb-1">
              <img src="/events-icons/time.svg" className="w-6" />
              {time}
            </span>
            <span className="flex items-center gap-x-2 mb-4">
              <img src="/events-icons/location.svg" className=" w-6" />
              {location}
            </span>
            <p className="my-2">{description}</p>
            <div className="flex justify-between items-center mt-4">
              <span style={{ backgroundColor: tagColor }} className="rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
              <button className="bg-[#66AB7B] rounded text-white bold px-6 py-2 cursor-pointer shadow text-left">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* <= Md screens */}
      <div className="lg:hidden p-4 w-full md:w-[90%]  min-h-max xs:aspect-[7/2]
        flex relative bg-white rounded-lg box-border 
        text-xs sm:text-sm md:text-base hover:cursor-pointer"
      >
        <div className="self-center h-20 xs:h-full aspect-square">
          <img
            src={img}
            className="size-full object-cover
              relative rounded-lg m-auto"
          />
        </div>

        <div className="p-4 w-full
            flex flex-col justify-center relative 
            box-border rounded-lg text-[#3E685F]"
        >
          <div className="mb-2 w-full flex justify-between">
            <span className="font-bold">{month} {day}</span>
            <span>{time}</span>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl mb-4">{title}</h2>
            <span className="sm:flex items-center gap-x-2 hidden mb-2">
              <img src="/events-icons/location.svg" className=" w-6" />
              {location}
            </span>
            <div className="flex justify-between items-center mt-4">
              <span style={{ backgroundColor: tagColor }} className="rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
              <button className="bg-[#66AB7B] rounded text-white bold px-6 py-2 cursor-pointer shadow text-left">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
