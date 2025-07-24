import "../App.css"
import Event from '../components/Event';
import Modal from '../components/Modal';
import { useState, useEffect } from 'react';

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/events.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error loading data', error))
  }, [])

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
          {data.map((eventCard, index) => (
            <Event
              key={index}
              event={eventCard}
              click={setSelectedEvent}
              open={setIsOpen}
            />
          ))}

        </div >

        <Modal open={isOpen} onClose={() => setIsOpen(false)} event={selectedEvent} />

      </div >
    </>
  );
}