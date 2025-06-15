export default function Officer(props) {
    const { name, major, year, quote, imgSrc } = props;

    return (
        <>
            {/* Card background */}
            <div className="relative before:absolute 
                before:-translate-3 before:-inset-1 before:-z-1
                before:bg-[#66ab7b] before:rounded-xl before:shadow-lg 
                transition duration-300 hover:scale-105 -rotate-1 hover:-rotate-2 

                *:transition-rotate *:duration-300 *:rotate-1
                hover:*:rotate-4
            ">
                {/* Card content */}
                <div className="w-70 sm:w-100 md:w-120 lg:w-75
                    bg-white rounded-xl shadow-sm translate-3"
                >
                    <div className="p-4 grid gap-8 lg:gap-4 
                        grid-flow-col lg:grid-flow-row 
                        justify-start lg:justify-center"
                    >
                        <div className="size-20 sm:size-30 lg:size-50 justify-self-center">
                            <img
                                className="object-cover aspect-square rounded-full"
                                src={imgSrc}
                                alt={name}
                            />
                        </div>

                        <div className="flex flex-col justify-center
                            text-left lg:text-center *:block"
                        >
                            <p className="text-md sm:text-xl font-bold">{name}</p>
                            <p className="text-sm sm:text-base">{major}</p>
                            <p className="text-sm sm:text-base">{year}</p>
                        </div>
                    </div>

                    <hr className="text-base text-[#a8b2a1] leading-0" />
                    <p className="p-4 text-sm sm:text-base text-center">{quote}</p>
                </div>
            </div>
        </>
    )
}