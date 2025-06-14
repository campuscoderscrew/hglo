import Officer from "../components/Officer";

export default function Officers() {

  // Expandable list of officers in case the number of them ever increases
  const officersInfo = [
    {
      name: "Brennen Le",
      major: "Computer Science & Mathematics",
      year: "Junior",
      quote: "If he were to be eaten by a food, it would be flan.",
      imgSrc: "mountains-placeholder.jpg",
    },
    {
      name: "Liz Frisbie",
      major: "Biochemistry",
      year: "Junior",
      quote: "If she were to be eaten by a food, it would be ???.",
      imgSrc: "mountains-placeholder.jpg",
    },
  ];

  return (
    <div className="py-16 h-screen relative">
      {/* Slant divider */}
      <h2 className="mb-16 text-3xl text-center font-bold">Meet the Captains</h2>
      <div className="mx-4 sm:mx-auto sm:w-100 md:w-110 lg:w-200 grid lg:grid-flow-col gap-16">
        {officersInfo.map((info, index) => (
          <Officer key={`officer-${info.name}-${index}`} {...info} />
        ))}
      </div>
    </div>
  );
}
