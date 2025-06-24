import React from 'react';
import studentsImage from '../components/assets/bgimg.svg';

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative w-full h-screen lg:pt-[64px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover lg:bg-contain lg:bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${studentsImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large screens: white-to-transparent fade */}
            <div className="hidden lg:block w-full h-full bg-gradient-to-r from-white via-white/100 to-transparent"></div>
            {/* Small & medium screens: full greenish overlay */}
            <div className="block lg:hidden w-full h-full bg-[#82A890] opacity-80"></div>
          </div>
        </div>

        {/* Content Container */}
          <div className="relative z-10 w-full flex items-center h-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
          {/* Text Content */}
          <div className="w-full md:w-4/5 lg:w-2/5 p-8 bg-transparent rounded-lg lg:ml-20 xl:ml-28 2xl:ml-40">
            <h1 className="text-4xl md:text-5xl font-bold text-white lg:text-gray-800 mb-4 leading-tight">
              HGLO Honors <br /> Ambassadors
            </h1>
            <p className="text-lg md:text-xl text-white lg:text-gray-600 mb-8">
              Teaching prospective students how to think critically in a data-centric world
            </p>

            {/* Buttons: visible on md+ screens only */}
            <div className="hidden md:flex space-x-4">
              <a href="#officers">
                <button className="px-6 py-3 
                  md:bg-white md:text-[#43985e] 
                  lg:bg-transparent lg:text-green-700 lg:border-2 lg:border-green-700 
                  font-semibold rounded-md 
                  transition duration-300 ease-in-out 
                  hover:bg-green-700 hover:text-white hover:border-green-700 cursor-pointer">
                  Meet the Team
                </button>
              </a>
              <a href="#join">
                <button className="px-6 py-3 bg-[#43985e] text-white font-semibold rounded-md hover:bg-green-800 transition duration-300 ease-in-out cursor-pointer">
                  Join Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;