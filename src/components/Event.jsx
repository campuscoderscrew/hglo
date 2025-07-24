import "../App.css"

export default function Event({ img, title, month, day, time, location, description, tag, tagColor }) {

  // 3E685F

  return (
    <div className="w-full flex justify-center relative">


      {/* >= Large screens */}
      <div className="bg-white w-full aspect-[3/4] rounded-lg relative hidden lg:block">
        <img src={img} className="w-full rounded-lg relative" />

        <div className="box-border p-6 flex flex-row gap-x-6 justify-start *:text-[#3E685F] relative bg-white -mt-4 rounded-lg">
          <div className="flex flex-col items-center w-max">
            <p className="font-bold text-xl">{month}</p>
            <p className="font-bold text-3xl">{day}</p>
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
      <div className="lg:hidden w-full md:w-[90%] *:text-sm *:md:text-xl aspect-[7/3] sm:aspect-[7/2] min-h-max flex bg-white relative sm:px-4 rounded-lg p-1 sm:p-4 box-border">

        <img src={img} className="h-[95%] sm:h-[80%] aspect-square object-cover rounded-lg relative m-auto" />

        <div className="w-full box-border p-6 flex flex-col *:text-[#3E685F] relative rounded-lg justify-center">
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
