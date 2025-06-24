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
        <div className="relative bg-white overflow-hidden" id="officers">
            {/* SVG background */}
            <img 
                className="absolute w-60 md:w-80 
                    bottom-16 -right-16 md:right-32"
                src="officers-background/dot-array.svg" 
            />
            <img 
                className="absolute w-70 lg:w-80 
                    top-[calc(50%-60px)] -left-50"
                src="officers-background/gradient-circle.svg"
            />
            <img 
                className="absolute w-50 md:w-60 
                    top-50 -right-30"
                src="officers-background/gradient-hoop.svg" 
            />
            <img 
                className="hidden md:block absolute w-40 
                    top-[calc(15vw-170px)] left-[calc(50%-200px)]" 
                src="officers-background/gradient-ripple.svg"
            />
            <img 
                className="hidden lg:block absolute w-50 
                    top-[calc(50%-200px)] left-50" 
                src="officers-background/gradient-waves.svg" 
            />

            {/* Tilt divider */}
            <div className="absolute top-0 left-0 w-full
                overflow-hidden leading-0"
            >
                <svg
                    className="relative block
                        w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <polygon 
                        className="fill-[#CFE0D8]" 
                        points="0,0 1200,0 0,120"
                    />
                </svg>

            </div>

            {/* Captains content */}
            <div className="pb-48">
                <h2 className="mt-[15vw] mb-24 z-1
                    text-3xl text-center font-bold"
                >
                    Meet the Captains
                </h2>

                <div className="mx-auto w-fit grid lg:grid-cols-2 gap-32">
                    {officersInfo.map((info, index) => (
                        <Officer key={`officer-${info.name}-${index}`} {...info} />
                    ))}
                </div>
            </div>
        </div>
    );
}
