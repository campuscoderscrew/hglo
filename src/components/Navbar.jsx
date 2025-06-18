import React, { useState } from 'react';
import img1 from './assets/logo.svg'

// Navbar component with responsive design and a hamburger menu
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-[#43985e] to-[#367f4d] p-4 shadow-lg rounded-b-2xl">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img
                        src={img1} // Logo
                        alt="Custom Logo"
                        className="h-10 w-10"
                    />
                    <span className="text-white text-2xl font-bold">HGLO</span>
                </div>

                {/* Desktop Navigation Links: Visible only on medium and larger screens. */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-white hover:text-gray-200 transition duration-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-200 transition duration-300">About</a>
                    <a href="#" className="text-white hover:text-gray-200 transition duration-300">Events</a>
                    <a href="#" className="text-white hover:text-gray-200 transition duration-300">Officers</a>
                    <a href="#" className="text-white hover:text-gray-200 transition duration-300">Join</a>
                </div>

                {/* Hamburger Icon: Visible only on small screens.*/}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Conditional rendering of hamburger or close icon paths */}
                            {isOpen ? (
                                // Close icon (X) when menu is open
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            ) : (
                                // Hamburger icon when menu is closed
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu: Conditionally rendered based on the 'isOpen' state*/}
            {isOpen && (
                <div className="md:hidden mt-4 bg-[#327748] rounded-lg p-4 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col space-y-3">
                        {/* Mobile navigation links*/}
                        <a href="#" className="block text-white text-lg py-2 px-3 rounded-md hover:bg-green-900 transition duration-300" onClick={toggleMenu}>Home</a>
                        <a href="#" className="block text-white text-lg py-2 px-3 rounded-md hover:bg-green-900 transition duration-300" onClick={toggleMenu}>About</a>
                        <a href="#" className="block text-white text-lg py-2 px-3 rounded-md hover:bg-green-900 transition duration-300" onClick={toggleMenu}>Events</a>
                        <a href="#" className="block text-white text-lg py-2 px-3 rounded-md hover:bg-green-900 transition duration-300" onClick={toggleMenu}>Officers</a>
                        <a href="#" className="block text-white text-lg py-2 px-3 rounded-md hover:bg-green-900 transition duration-300" onClick={toggleMenu}>Join</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;