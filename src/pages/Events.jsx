import Button from '../components/Button'
import Event from '../components/Event'

export default function Events() {
  //Created example list of events
  const eventCards = [
    {
      imgSrc: "peepee",
      eventName: "Crazy Crazy Fun-Time!",
      dateMonth: "May",
      dateDay: "28",
      dateTime: "5:00 - 7:00PM",
      location: "Dorchester Basemeent",
      descriptionEvent:
        " Lorem ipsum sit amet dolor, Lorem ipsum sit amet dolorr...",
    },

    {
      imgSrc: "peepee",
      eventName: "Crazy Crazy Bad-Time",
      dateMonth: "June",
      dateDay: "20",
      dateTime: "10:00AM - 7:00PM",
      location: "Stamp Student Union",
      descriptionEvent:
        " Lorem ipsum sit amet dolor, Lorem ipsum sit amet dolorr...",
    },
    {
      imgSrc: "peepee",
      eventName: "Crazy Crazy Ok-Time",
      dateMonth: "August",
      dateDay: "15",
      dateTime: "12:00AM - 10:00PM",
      location: "Hornbake",
      descriptionEvent:
        " Lorem ipsum sit amet dolor, Lorem ipsum sit amet dolorr...",
    },
  ];

  return (
    <>
      <h1 className="mt-[10vw] text-3xl text-center font-bold mb-5">Events</h1>
      <h3 className="text-center text-xl">
        Come join us and socialize + have fun at one of our events!
      </h3>
      <h3 className=" text-center mb-24 font-sans text-xl">
        They're open to all prospective students.
      </h3>
      <ul>
        {eventCards.map((eventCard, index) => {
          return (
            <li
              key={index}
              className=" inline-block border-2 mt-4 rounded shadow"
            >
              <h1>{eventCard.eventName}</h1>
              <p>
                Date: {eventCard.dateMonth} {eventCard.dateDay}
              </p>
              <p>Event Time: {eventCard.dateTime}</p>
              <p>Location: {eventCard.location}</p>
              <p>Description: {eventCard.descriptionEvent}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
  