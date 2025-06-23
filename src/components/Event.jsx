

//Created example list of events
const eventCards = [
  {
    eventName: "Crazy Crazy Fun-Time!",
    dateMonth: "May",
    dateDay: "28",
    dateTime: "5:00 - 7:00PM",
    location: "Dorchester Basemeent",
  },

  {
    eventName: "Crazy Crazy Bad-Time",
    dateMonth: "June",
    dateDay: "20",
    dateTime: "10:00AM - 7:00PM",
    location: "Stamp Student Union",
  },
];

export default function Event() {
  return (
    <>
      <ul className="grid grid-cols-3 gap-4">
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
      </ul>
    </>
  );
}
