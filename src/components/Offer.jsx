export default function Offer({ elem, offset }) {

    let divStyle = "max-w-[90%] w-100 p-5 sm:w-120 py-8 md:w-140 md:min-h-60 lg:min-h-90 lg:w-80 lg:p-6 lg:py-12 lg:mx-4 flex flex-col items-center justify-center bg-[#86B896] rounded-lg box-border xl:transform xl:scale-110 xl:mx-8"

    // transition-transform duration-[1000ms] ease-in-out lg:hover:scale-115 hover:cursor z-1

    divStyle += offset === "top" ? " lg:mb-12 mb-12" : " lg:-mb-12 mb-12"

    return (

        <div className={divStyle}>
            <div className="flex flex-row items-center lg:flex-col md:mb-2">
                <img src={elem.icon} className="w-10 lg:mb-2 sm:w-12 lg:w-14" />
                <h3 className="text-white uppercase font-bold ml-4 lg:m-0">{elem.title}</h3>
            </div>
            <ul className="text-white mt-2 list-disc
                 w-full md:max-w-[85%] *:ml-8 *:md:ml-4 lg:mx-4 *:md:text-md">
                <li className="mb-2 lg:mb-4">{elem.pointOne}</li>
                <li className="">{elem.pointTwo}</li>
            </ul>
        </div>

    )
}