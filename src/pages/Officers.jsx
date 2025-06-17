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
            imgSrc: "gradient-waves.svg",
        },
    ];

    return (
        <div className="relative bg-white">
            {/* SVG background */}
            <div className="absolute">
                <img className="w-20" src="dot-array.svg" />
                <img src="gradient-circle.svg" />
                {/*<img src="gradient-hoop.svg" />
                <img src="gradient-ripple.svg" />
                <img src="gradient-waves.svg" />*/}
            </div>
            
            {/* Tilt divider */}
            <div className="absolute top-0 left-0 w-full
                overflow-hidden leading-0
                officers-tilted-divider"
            >
                <svg
                    className="relative block
                        width-[calc(100%+1.3px)] h-[250px]
                        rotate-y-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        className="fill-[#CFE0D8]"
                    />
                </svg>

            </div>

            

            {/* Captains content */}
            <div className="pt-64 pb-48">
                <h2 className="mb-24 text-3xl text-center font-bold">Meet the Captains</h2>

                <div className="mx-auto w-fit grid lg:grid-cols-2 gap-32">
                    {officersInfo.map((info, index) => (
                        <Officer key={`officer-${info.name}-${index}`} {...info} />
                    ))}
                </div>
            </div>
        </div>
    );
}
