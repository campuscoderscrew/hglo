export default function Offer({ elem }) {



    return (
        <>
            <div className="p-6 py-12 mr-6 flex flex-col items-center justify-center bg-[#86B896] rounded-lg">
                <img src={elem.icon} className="w-15" />
                <h3 className="text-white uppercase font-bold">{elem.title}</h3>
                <ul className="text-white max-w-55 mt-5 list-disc mx-4 *:mb-5">
                    <li className="">{elem.pointOne}</li>
                    <li className="">{elem.pointTwo}</li>
                </ul>
            </div>
        </>
    )
}