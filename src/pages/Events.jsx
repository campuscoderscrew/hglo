import "../App.css"
import Event from '../components/Event';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming');

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

  const upcomingEvents = eventCards.filter(event => {
    const eventDate = new Date(`${event.month} ${event.day}, 2025`);
    return eventDate >= new Date();
  });

  const pastEvents = eventCards.filter(event => {
    const eventDate = new Date(`${event.month} ${event.day}, 2025`);
    return eventDate < new Date();
  });

  return (
    <>
      {/* flex flex-col justify-center items-center bg-blue */}
      <div className="bg-[linear-gradient(white,_#CFE0D8)] w-screen py-25 pt-40 flex flex-col justify-center items-center" id="events">

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

        <div className="flex justify-center mb-12">
          <button
            className={`px-6 py-2 text-xl ${activeTab === 'upcoming' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`px-6 py-2 text-xl ${activeTab === 'past' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past
          </button>
        </div>

        {/* Events cards */}
        <div className="w-[90%] sm:w-[75%]
            grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 
            gap-6 lg:gap-10 justify-center"
          id="event-cards"
        >
          {activeTab === 'upcoming' && upcomingEvents.map((eventCard, index) => (
            <Event
              key={index}
              event={eventCard}
              click={setSelectedEvent}
              open={setIsOpen}
            />
          ))}

          {activeTab === 'past' && pastEvents.map((eventCard, index) => (
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
