import Offer from '../components/Offer'

export default function About() {

    const offers = [
        {
            icon: "../public/about/Commercial.svg",
            title: "outreach",
            pointOne: "Represent the Honors College at panels for prospective and incoming students",
            pointTwo: "Participate in letter writing campaigns to prospective students"
        },
        {
            icon: "../public/about/Users.svg",
            title: "community building",
            pointOne: "Host memorable, engaging social events",
            pointTwo: "Foster friendships and connections within the Honors Global Challenges & Solutions community"
        },
        {
            icon: "../public/about/Star.svg",
            title: "exclusive perks",
            pointOne: "Enjoy free coffee credit during finals week at Starbucks in STAMP",
            pointTwo: "Attend events with provided snacks and drinks, courtesy of the Honors College"
        }
    ]


    return (
        <div className=" bg-white relative">
            <h1 className="text-center text-3xl font-bold pt-30">About Us</h1>

            <div className="h-full bg-white">
                <img src="../public/about/half-blob.svg" className="absolute w-55 -top-5 left-[20%] transform rotate-180 md:left-[10%] md:w-40" />
                <img src="../public/about/array.svg"
                    className="absolute w-30" />
                {/* <img src="../public/about/half-ring.svg" className="absolute w-30" /> */}
                {/* <img src="../public/about/half-circle.svg" className="absolute w-30" /> */}
                {/* <img src="../public/about/waves.svg" className="absolute w-30" /> */}


                <p className="text-center w-[45%] m-auto mt-10">
                    We are a vibrant community of students from the Global Challenges and Solutions Honors Program at the University of Maryland, College Park. As a branch of the university-wide Honors Ambassadors Program, our mission is to advocate for the Honors College experience and inspire prospective students to join our dynamic academic community.
                </p>
                <h3 className="text-center font-bold text-xl m-auto mt-35">What We Offer</h3>
                <div className="flex flex-col lg:flex-row justify-center items-center mt-20">
                    {
                        offers.map((offer, index) => (
                            <Offer elem={offer} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}