import "../App.css"

export default function Event({ img, title, month, day, time, location, description }) {

  // 3E685F

  return (
    <div className="w-full flex justify-center relative">

      {/* >= Large screens */}
      <div className="hidden lg:block 
        bg-white w-full aspect-[3/4] rounded-lg relative"
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

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl xl:text-3xl">{title}</h2>

            <div className="flex flex-col gap-1
              *:flex *:items-center *gap-x-2"
            >
              <span>
                <img src="/events-icons/time.svg" className="w-6" />
                <span>{time}</span>
              </span>

              <span>
                <img src="/events-icons/location.svg" className=" w-6" />
                <span>{location}</span>
              </span>
            </div>

            <p className="text-sm xl:text-base">{description}</p>
            <div>
              <button className="mt-4 px-6 py-2 bg-hglo-main-500 rounded shadow-lg
                text-white text-left bold cursor-pointer"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* <= Md screens */}
      <div className="lg:hidden p-4 w-full md:w-[90%]  min-h-max xs:aspect-[7/2]
        flex relative bg-white rounded-lg box-border 
        text-xs sm:text-sm md:text-base"
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
      {/* <div className="grid grid-cols-3 gap-4">
        {eventCards.map((eventCard, index) => {
          return (
            <li key={index}>
              <h1>{eventCard.eventName}</h1>
              <p>
                Date: {eventCard.dateMonth} {eventCard.dateDay}
              </p>
            </li>
          );
        })}
      </div> */}

    </div>
  );
}
