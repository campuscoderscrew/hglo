// src/Home.jsx
import React from 'react';
import studentsImage from '../components/assets/bgimg.svg';

const Home = () => {
    return (
        <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
            {/* Background Image Container */}
            <div
                className="absolute inset-0 bg-contain bg-right bg-no-repeat"
                style={{ backgroundImage: `url(${studentsImage})` }}
            >
                {/* Overlay:*/}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="hidden lg:block w-full h-full bg-gradient-to-r from-white via-white/100 to-transparent"></div>
                    <div className="block lg:hidden w-full h-full bg-[#82A890] opacity-80"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto flex items-center h-full px-4 md:px-0">
                {/* Text Content */}
                <div className="w-full md:w-1/2 lg:w-2/5 p-8 bg-white/90 md:bg-transparent rounded-lg md:rounded-none">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                        HGLO Honors <br /> Ambassadors
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                        Teaching prospective students how to think critically in a data-centric world
                    </p>
                    <div className="flex space-x-4">
                        <a href="#officers">
                            <button className="px-6 py-3 border-2 border-green-700 text-green-700 font-semibold rounded-md hover:bg-green-700 hover:text-white transition duration-300">
                                Meet the Team
                            </button>
                        </a>
                        <a href="#join">
                            <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition duration-300">
                                Join Us
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;