import Button from '../components/Button'

export default function Join() {
    return (
        <div className="flex flex-col xl:flex-row *:content-center lg:h-[94vh]" id="join">
            <div className="px-24 xl:px-48 py-24 md:py-36 xl:py-40
                flex-4 relative bg-[#6BB080] overflow-hidden"
            >
                {/* SVG background */}
                <img
                    className="absolute w-50 md:w-70
                        -top-2 left-10 xl:left-10"
                    src="join-background/dot-array.svg"
                />
                <img
                    className="absolute w-50 md:w-70
                        -top-10 -left-20 md:-left-10"
                    src="join-background/gradient-circle1.svg"
                />
                <img
                    className="hidden md:block absolute w-20 xl:w-25
                        top-20 xl:top-30 right-40"
                    src="join-background/gradient-waves.svg"
                />
                <img
                    className="hidden md:block absolute w-40 xl:w-50
                        bottom-[calc(50%-200px)] right-25"
                    src="join-background/gradient-hoop1.svg"
                />


                <img
                    className="hidden xl:block z-1 absolute w-65
                        -bottom-20 left-[calc(50%-150px)]"
                    src="join-background/gradient-circle2.svg"
                />
                <img
                    className="hidden md:block z-2 absolute w-100 xl:w-110
                        -bottom-80 xl:-bottom-40 -left-40 xl:-left-40"
                    src="join-background/gradient-hoop2.svg"
                />
                <img
                    className="hidden md:block absolute w-100 xl:w-110
                        -bottom-76 xl:-bottom-36 -left-36 xl:-left-36 "
                    src="join-background/gradient-hoop3.svg"
                />
                <img
                    className="hidden xl:block absolute w-70
                        bottom-2 right-0"
                    src="join-background/dot-array.svg"
                />

                {/* Join introduction for >=md screens */}
                <div className="flex flex-col gap-8 *:z-1 text-white text-center items-center justify-center  ">
                    <h2 className="text-4xl font-bold">JOIN US</h2>

                    <p className="min-w-100 max-w-[80%]
                            hidden md:block text-lg md:text-xl text-balance"
                    >
                        Are you passionate about global challenges and eager to
                        share your experiences with prospective students?{" "}
                        <span className="font-bold">Join our team!</span>
                    </p>
                </div>
            </div>

            {/* Join requirements and form link */}
            <div className="sm:px-20 px-10 xl:px-30 py-20 md:py-30 md:px-38 lg:px-44 xl:py-40
                flex flex-col flex-5 gap-8 
                bg-white text-lg md:text-xl justify-center"
            >
                {/* Join introduction for <md screens */}
                <p className="block md:hidden text-lg xl:text-xl text-center text-balance">
                    Are you passionate about global challenges and eager to
                    share your experiences with prospective students?{" "}
                    <span className="font-bold">Join our team!</span>
                </p>

                <hr className="px-4 block md:hidden text-[#0000001b]" />
                <h3 className="font-bold text-center text-balance lg:text-2xl">
                    Eligibility Requirements
                </h3>

                <p className="lg:text-lg">To become a HGLO Honors Ambassador, you must:</p>

                {/* 
                  * list-image-[url] does not work for some reason because
                  * ::marker pseudo elements refuse to be resized
                  */}
                <ul
                    role="list"
                    className="list-outside flex flex-col gap-2
                        *:before:bg-[url(checkmark.svg)]
                        *:before:bg-size-[2rem] xl:*:before:bg-size-[2.5rem]
                        *:before:size-[2rem] xl:*:before:size-[2.5rem]
                        *:grid *:grid-flow-col *:gap-4 *:justify-start *:lg:text-lg"
                >
                    <li className="mb-4">
                        Be currently enrolled or have previously participated
                        in the Honors Global Challenges and Solutions progrlgam.

                    </li>

                    <li>
                        Have been accepted into the general Honors Ambassadors
                        program.
                    </li>
                </ul>

                <p className="lg:text-lg">
                    If you are eligible and would like to join, please fill out
                    the form below!
                </p>

                <div className="flex justify-center">
                    <button
                        className="block px-6 py-4 bg-[#43985e] 
                            text-white rounded-md shadow-lg
                            transition-color duration-300 hover:bg-green-800 mt-4 lg:text-lg hover:cursor-pointer"
                        href=""
                        target="_blank"
                    >
                        Ambassador Form
                    </button>
                </div>
            </div>
        </div>
    )
}