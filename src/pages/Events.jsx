import "../App.css"
import Event from '../components/Event';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventCards = [
    {
      img: "cafeWork.png",
      title: "Cafe + Work",
      month: "May",
      day: "28",
      time: "5:00 - 7:00PM",
      location: "ESJ Ground Floor Café Lounge",
      description:
        "Grab your favorite drink and settle in for a productive session—perfect blend of focus and ambiance.",
      tag: "Workstudy",
      tagColor: "#C7DAD3",
    },
    {
      img: "karaoke.png",
      title: "Karaoke & Friends",
      month: "October ",
      day: "3",
      time: "5:00 - 7:00PM",
      location: "STAMP Student Union – TerpZone",
      description:
        "Unleash your inner star with friends—sing your heart out and make memories one chorus at a time.",
      tag: "Social",
      tagColor: "#FEEBB0",
    },
    {
      img: "workshop.png",
      title: "Workshop",
      month: "May",
      day: "28",
      time: "2:00 - 4:00PM",
      location: "IDEA Factory (A. James Clark Hall)",
      description:
        "Join us for an engaging workshop where you can learn new skills and connect with like-minded individuals.",
      tag: "Educational",
      tagColor: "#F7DCCF",
    },
    {
      img: "gameNight.png",
      title: "Game Night",
      month: "December",
      day: "3",
      time: "5:00 - 7:00PM",
      location: "STAMP Student Union – Benjamin Banneker Room",
      description:
        "Gather your friends for an exciting game night filled with laughter, competition, and fun—perfect for all ages.",
      tag: "Social",
      tagColor: "#FEEBB0",
    },
    {
      img: "communityPicnic.png",
      title: "Community Picnic",
      month: "October",
      day: "27",
      time: "1:00 - 3:00PM",
      location: "McKeldin Mall",
      description:
        "Join us for a delightful community picnic filled with good food, great company, and fun activities for all ages.",
      tag: "Social",
      tagColor: "#FEEBB0",
    },
    {
      img: "relaxStudy.png",
      title: "Relax & Study",
      month: "May",
      day: "28",
      time: "5:00 - 7:00PM",
      location: "Hornbake Library – Ground Floor Study Lounge",
      description:
        "Unwind and focus in a serene environment—perfect for studying or simply relaxing with friends.",
      tag: "Workstudy",
      tagColor: "#BAD6E0",
    },
  ];

  return (
    <>
      {/* flex flex-col justify-center items-center bg-blue */}
      <div className="bg-[linear-gradient(white,_#CFE0D8)] w-screen py-25 pt-40 flex flex-col justify-center items-center" id="events">

        <h1 className="text-3xl text-center font-bold mb-5">
          Events
        </h1>
        <h3 className="text-center text-xl">
          Come join us and socialize + have fun at one of our events!
        </h3>
        <h3 className="text-center mb-24 font-sans text-xl">
          They're open to all prospective students.
        </h3>

        {/* Events cards */}
        <div className="flex flex-col justify-center md:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 w-[90%] sm:w-[80%]lg:transform lg:scale-90" id="event-cards">

          {eventCards.map((eventCard, index) => (
            <Event {...eventCard} />
          ))}

        </div >

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {selectedEvent && (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">{selectedEvent.eventName}</h2>
              <p className="text-gray-600">
                {selectedEvent.dateMonth} {selectedEvent.dateDay}
              </p>
              <p className="text-gray-600">
                {selectedEvent.dateTime} · {selectedEvent.location}
              </p>
              <p className="text-sm">{selectedEvent.descriptionEvent}</p>
              <button className="bg-[#66AB7B] rounded text-white font-bold px-6 py-2 shadow">
                Register
              </button>
            </div>
          )}
        </Modal>

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
