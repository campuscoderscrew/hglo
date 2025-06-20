import Button from '../components/Button'
import Event from '../components/Event'

export default function Events() {
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

  return <>
  <ul>
    {eventCards.map((eventCard, index)=> {
    return (
    <li key = {index}>
    <h1>{eventCard.eventName}</h1>
    <p>Date: {eventCard.dateMonth} {eventCard.dateDay}</p>
    <p>Event Time: {eventCard.dateTime}</p>
    <p>Location: {eventCard.location}</p>
     </li>
    );
    })}
    </ul>

  </>;
}
  