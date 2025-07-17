import React from 'react';
import { motion } from 'framer-motion';
import studentsImage from '../components/assets/bgimg.svg';
import '../App.css'

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative max-h-[calc(100vh-4.5rem)] h-[60vh] mt-18 w-screen lg:h-screen lg:p-auto flex items-center justify-center"
      >
        <div className="hidden lg:block lg:bg-[linear-gradient(#ffffff00,_white)] absolute w-full h-15 bottom-0 z-1" id="green-bar"></div>
        
        {/* Background Image Container */}
        <motion.div
          className="absolute inset-0 bg-cover lg:bg-contain bg-center sm:bg-[center_40%] md:bg-right lg:bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${studentsImage})` }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="hidden lg:block lg:absolute lg:left-0 w-full h-full bg-gradient-to-r from-white via-white/95 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/100 lg:to-white/5"></div>
            <div className="block lg:hidden w-full h-full bg-[#4a7158] opacity-80"></div>
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex items-center h-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <motion.div
            className="w-full md:w-4/5 lg:w-1/2 lg:max-w-lg p-8 bg-transparent rounded-lg lg:ml-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white lg:text-black mb-4 leading-tight lg:leading-tight">
              HGLO Honors <br /> Ambassadors
            </h1>
            <p className="text-lg md:text-xl lg:text-xl text-white lg:text-gray-600 mb-8 lg:mb-12">
              Teaching prospective students how to think critically in a data-centric world
            </p>

            <div className="hidden md:flex space-x-4">
              <a href="#officers">
                <button className="px-6 py-3 
                  md:bg-white md:text-[#509a81] 
                  lg:bg-transparent lg:text-[#509a81] lg:border-2 lg:border-[#509a81] 
                  font-semibold rounded-md 
                  transition duration-300 ease-in-out 
                  hover:bg-[#509a81] hover:text-white hover:border-[#509a81] cursor-pointer">
                  Meet the Team
                </button>
              </a>
              <a href="#join">
                <button className="px-6 py-3 bg-[#509a81] text-white font-semibold rounded-md hover:bg-green-800 transition duration-300 ease-in-out cursor-pointer lg:border-2">
                  Join Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;