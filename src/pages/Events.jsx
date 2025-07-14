import "../App.css"
import Event from '../components/Event';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventCards = [
    {
      img: "mountains-placeholder.jpg",
      title: "Event Name Here",
      month: "May",
      day: "28",
      time: "5:00 - 7:00 PM",
      location: "Dorchester Basemeent",
      description:
        "Lorem ipsum sit amet dolor lorem ipsum, Lorem ipsum sit amet dolor, Lorem ipsum sit amet ipsum...",
    },
    {
      img: "mountains-placeholder.jpg",
      title: "Event Name Here",
      month: "May",
      day: "29",
      time: "5:00 - 7:00 PM",
      location: "Dorchester Basemeent",
      description:
        "Lorem ipsum sit amet dolor lorem ipsum, Lorem ipsum sit amet dolor, Lorem ipsum sit amet ipsum...",
    },
    {
      img: "mountains-placeholder.jpg",
      title: "Event Name Here",
      month: "May",
      day: "30",
      time: "5:00 - 7:00 PM",
      location: "Dorchester Basemeent",
      description:
        "Lorem ipsum sit amet dolor lorem ipsum, Lorem ipsum sit amet dolor, Lorem ipsum sit amet ipsum...",
    },
    {
      img: "mountains-placeholder.jpg",
      title: "Event Name Here",
      month: "May",
      day: "31",
      time: "5:00 - 7:00 PM",
      location: "Dorchester Basemeent",
      description:
        "Lorem ipsum sit amet dolor lorem ipsum, Lorem ipsum sit amet dolor, Lorem ipsum sit amet ipsum...",
    },
    {
      img: "mountains-placeholder.jpg",
      title: "Event Name Here",
      month: "June",
      day: "1",
      time: "5:00 - 7:00 PM",
      location: "Dorchester Basemeent",
      description:
        "Lorem ipsum sit amet dolor lorem ipsum, Lorem ipsum sit amet dolor, Lorem ipsum sit amet ipsum...",
    },
    {
      img: "mountains-placeholder.jpg",
      title: "Event Name Here",
      month: "May",
      day: "28",
      time: "5:00 - 7:00 PM",
      location: "Dorchester Basemeent",
      description:
        "Lorem ipsum sit amet dolor lorem ipsum, Lorem ipsum sit amet dolor, Lorem ipsum sit amet ipsum....",
    },
  ];

  return (
    <>
      {/* flex flex-col justify-center items-center bg-blue */}
      <div className=" w-screen pt-40 pb-25 
          flex flex-col gap-24 justify-center items-center
          bg-[linear-gradient(white,_#CFE0D8)]"
        id="events"
      >
        <div className="w-[70%] md:w-[50%]
            text-base md:text-lg xl:text-xl text-center"
        >
          <h1 className="text-3xl font-bold mb-5">
            Events
          </h1>
          <h3>
            Come join us and socialize + have fun at one of our events!
          </h3>
          <h3>
            They're open to all prospective students.
          </h3>
        </div>

        {/* Events cards */}
        <div className="w-[90%] sm:w-[75%]
            grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 
            gap-6 lg:gap-10 justify-center"
          id="event-cards"
        >
          {eventCards.map((eventCard, index) => (
            <Event
              event={eventCard}
              click={setSelectedEvent}
              open={setIsOpen}
            />
          ))}

        </div >

        <Modal open={isOpen} onClose={() => setIsOpen(false)} event={selectedEvent} />

      </div >

      {/* <li
            //   key={index}
            //   className="bg-white mt-4 rounded shadow-lg w-75 cursor-pointer"
            //   onClick={() => {
            //     setSelectedEvent(eventCard);
            //     setIsOpen(true);
            //   }}
            // > */}
      {/* <img
                className="w-full h-45 object-cover object-center mx-auto rounded shadow-lg"
                src={eventCard.imgSrc}
                alt={eventCard.eventName}
              />
              <div className="relative z-50 rounded -mt-1 p-4">
                <h1 className="text-green-900 font-semibold text-left ml-12 text-xl mt-2">
                  {eventCard.eventName}
                </h1>
                <p className="text-left ml-16 text-sm ">
                  {eventCard.dateTime}
                </p>
                <p className="text-left ml-16 text-sm">
                  {eventCard.location}
                </p>
                <div className="absolute top-2 left-1 rounded px-2 py-1 text-center">
                  <p className="text-sm font-bold leading-none">
                    {eventCard.dateMonth}
                  </p>
                  <p className="text-2xl font bold leading-none mt-1">
                    {eventCard.dateDay}
                  </p>
                </div>
                <p className="text-left text-xs ml-12 mt-2">
                  {eventCard.descriptionEvent}
                </p>
                {/* Prevent modal from opening when clicking this button */}

      {/* //         </div>
      // </li> */}
    </>
  );
}
