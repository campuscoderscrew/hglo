import Button from '../components/Button'

export default function Join() {
    return (
        <div className="flex flex-col xl:flex-row *:content-center" id="join">
            <div className="px-24 xl:px-48 py-24 md:py-36 xl:py-40
                flex-4 relative bg-hglo-main-500 overflow-hidden"
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
                <div className="flex flex-col gap-8
                    items-center justify-center
                    text-white text-center *:z-1"
                >
                    <h2 className="text-3xl xl:text-4xl font-bold">JOIN US</h2>
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
            <div className="px-10 sm:px-20 md:px-38 lg:px-44 xl:px-30 
                py-20 md:py-30 xl:py-40
                flex flex-col flex-5 gap-8 justify-center bg-white
                text-base lg:text-lg"
            >
                {/* Join introduction for <md screens */}
                <p className="block md:hidden 
                    xl:text-xl text-center text-balance"
                >
                    Are you passionate about global challenges and eager to
                    share your experiences with prospective students?{" "}
                    <span className="font-bold">Join our team!</span>
                </p>

                <hr className="px-4 block md:hidden opacity-10" />
                <h3 className="text-lg md:text-xl lg:text-2xl 
                    text-center text-balance font-bold"
                >
                    Eligibility Requirements
                </h3>

                <p>To become a HGLO Honors Ambassador, you must:</p>

                {/* 
                  * list-image-[url] does not work for some reason because
                  * ::marker pseudo elements refuse to be resized
                  */}
                <ul
                    role="list"
                    className="list-outside flex flex-col gap-2
                        *:before:bg-[url(checkmark.svg)]
                        *:before:bg-size-[2em]
                        *:before:size-[2em]
                        *:grid *:grid-flow-col *:gap-4 *:justify-start"
                >
                    <li>
                        Be currently enrolled or have previously participated
                        in the Honors Global Challenges and Solutions program.
                    </li>

                    <li>
                        Have been accepted into the general Honors Ambassadors
                        program.
                    </li>
                </ul>

                <p>
                    If you are eligible and would like to join, please fill out
                    the form below!
                </p>

                <div className="flex justify-center">
                    <button
                        className="mt-4 px-6 py-4 
                            block bg-hglo-main-500 rounded-md shadow-lg text-white  
                            transition-color duration-300 
                            hover:bg-hglo-main-600 hover:cursor-pointer"
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