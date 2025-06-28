import Button from '../components/Button';
import Event from '../components/Event';
import Modal from '../components/Modal';
import React, { useState } from 'react';

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventCards = [
    {
      imgSrc: "mountains-placeholder.jpg",
      eventName: "Crazy Crazy Fun-Time!",
      dateMonth: "May",
      dateDay: "28",
      dateTime: "5:00 - 7:00PM",
      location: "Dorchester Basemeent",
      descriptionEvent:
        " Lorem ipsum sit amet dolor, Lorem ipsum sit amet dolorr...",
    },
    {
      imgSrc: "mountains-placeholder.jpg",
      eventName: "Crazy Crazy Bad-Time",
      dateMonth: "June",
      dateDay: "20",
      dateTime: "10:00AM - 7:00PM",
      location: "Stamp Student Union",
      descriptionEvent:
        " Lorem ipsum sit amet dolor, Lorem ipsum sit amet dolorr...",
    },
    {
      imgSrc: "mountains-placeholder.jpg",
      eventName: "Crazy Crazy Ok-Time",
      dateMonth: "Sept.",
      dateDay: "15",
      dateTime: "12:00AM - 10:00PM",
      location: "Hornbake",
      descriptionEvent:
        " Lorem ipsum sit amet dolor, Lorem ipsum sit amet dolorr...",
    },
    {
      imgSrc: "mountains-placeholder.jpg",
      eventName: "Crazy Crazy Ok-Time",
      dateMonth: "Aug.",
      dateDay: "15",
      dateTime: "12:00AM - 10:00PM",
      location: "Hornbake",
      descriptionEvent:
        " Lorem ipsum sit amet dolor, Lorem ipsum sit amet dolorr...",
    },
    {
      imgSrc: "mountains-placeholder.jpg",
      eventName: "Crazy Crazy Ok-Time",
      dateMonth: "Aug.",
      dateDay: "15",
      dateTime: "12:00AM - 10:00PM",
      location: "Hornbake",
      descriptionEvent:
        " Lorem ipsum sit amet dolor, Lorem ipsum sit amet dolorr...",
    },
  ];

  return (
    <>
      <body className="bg-[#CFE0D8]">
        <h1 className="mt-[10vw] text-3xl text-center font-bold mb-5">
          Events
        </h1>
        <h3 className="text-center text-xl">
          Come join us and socialize + have fun at one of our events!
        </h3>
        <h3 className="text-center mb-24 font-sans text-xl">
          They're open to all prospective students.
        </h3>
        <ul className="flex flex-wrap justify-center gap-15">
          {eventCards.map((eventCard, index) => (
            <li
              key={index}
              className="bg-white mt-4 rounded shadow-lg w-75 cursor-pointer"
              onClick={() => {
                setSelectedEvent(eventCard);
                setIsOpen(true);
              }}
            >
              <img
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
                <button
                  className="bg-[#66AB7B] rounded text-white bold px-6 py-2 cursor-pointer shadow mt-4 text-left ml-12"
                >
                  Register
                </button>
              </div>
            </li>
          ))}
        </ul>
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
      </body>
    </>
  );
}
