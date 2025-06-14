export default function Officer(props) {
    const { name, major, year, quote, imgSrc } = props;

    return (
        <div className="bg-white rounded-xl shadow-lg
            transition duration-300 hover:scale-105 hover:shadow-xl"
        >
            <div className="p-8 grid gap-8 lg:gap-4 grid-flow-col lg:grid-flow-row 
                justify-start lg:justify-center"
            >
                <div className="w-30 md:w-40 lg:w-50 justify-center">
                    <img
                        className="object-cover aspect-square
                        rounded-full"
                        src={imgSrc}
                        alt={name}
                    />
                </div>

                <div className="flex flex-col justify-center
                    text-left lg:text-center *:block"
                >
                    <p className="text-xl font-bold">{name}</p>
                    <p className="text-base">{major}</p>
                    <p className="text-base text-[#a8b2a1]">{year}</p>
                </div>
            </div>

            <hr className="text-base text-[#a8b2a1] leading-0" />
            <p className="p-8 text-base text-center">{quote}</p>
        </div>
    )
}