export default function Join() {
    return (
        <div className="flex flex-col xl:flex-row" id="join">
            <div className="flex">
                <div className="size-full py-24 md:py-36 xl:py-48
                    flex justify-center 
                    bg-[url(join-background.svg)] bg-cover bg-center"
                >
                    {/* Join introduction for >=md screens */}
                    <div className="flex flex-col gap-8
                        items-center justify-center
                        text-white text-center"
                    >
                        <h2 className="text-3xl xl:text-4xl font-bold">JOIN US</h2>
                        <p className="hidden md:block min-w-100 max-w-[80%]
                            text-lg md:text-xl text-balance"
                        >
                            Are you passionate about global challenges and eager to
                            share your experiences with prospective students?{" "}
                            <span className="font-bold">Join our team!</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Join requirements and form link */}
            <div className="px-10 sm:px-20 md:px-38 lg:px-44 xl:px-30 
                py-20 md:py-30 xl:py-40
                flex flex-col gap-8 justify-center bg-white
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
                            block bg-hglo-main-400 rounded-md shadow-lg text-white  
                            transition-color duration-300 
                            hover:bg-hglo-main-600 hover:cursor-pointer"
                        href={null}
                        target="_blank"
                    >
                        Ambassador Form
                    </button>
                </div>
            </div>
        </div>
    )
}