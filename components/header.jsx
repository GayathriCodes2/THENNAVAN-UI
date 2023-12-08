// Header.js
"use client"
import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-green-600 mt-2 mx-2 text-white p-3 flex flex-col md:flex-row justify-between items-center lg:rounded-full">
            {/* Logo and Navigation Menu (Desktop) */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <img src="/cultivate.png" alt="Logo" className="h-10 w-10"/>
                    <span className="text-lg font-bold">Thennavan</span>
                </div>
            </div>

            {/* Navigation Menu (Desktop) */}
            <div className="flex items-center space-x-4">
                <nav className="hidden md:flex items-center space-x-4 ml-auto ">
                    <a href="/fromfarmersproducts" className="nav-link  hover:bg-green-500 transition-all rounded p-2">Our Harvested Goods</a>
                    <a href="/tasteofourlandproducts" className="nav-link  hover:bg-green-500 transition-all rounded p-2">Signature Local Delicacies</a>
                    <a href="/loveofourladies" className="nav-link  hover:bg-green-500 transition-all rounded p-2">Love of Our ladies</a>
                    <a href="/sellwithus" className="nav-link  hover:bg-green-500 transition-all rounded p-2">Sell With Us</a>
                    <a href="/about-us" className="nav-link hover:bg-green-500 transition-all rounded p-2">About Us</a>
                </nav>
            </div>

            {/* Search Bar */}
            <div className="flex">

                <div className="md:hidden ml-0 self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className='items-center space-x-2 flex'>
                    <input type="text" placeholder="Search" className="px-4 py-1 border flex items-center text-black border-white rounded-full lg:w-60 transition-all duration-300 ease-in-out to-black focus:outline-none focus:border-green-400" />
                    <button className="bg-white text-gray-800 px-2 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 my-1">
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd" />
                        </svg></button>
                </div>

            </div>

            {/* Mobile Menu Icon (Right-aligned) */}


            {/* Navigation Menu (Mobile) */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-2">
                    <a href="/tasteofourlandproducts" className="nav-link  hover:bg-green-500 transition-all p-2">Signature Local Delicacies</a>
                    <a href="/fromfarmersproducts" className="nav-link  hover:bg-green-500 transition-all p-2">Our Harvested Goods</a>
                    <a href="/loveofourladies" className="nav-link  hover:bg-green-500 transition-all rounded p-2">Love of Our ladies</a>
                    <a href="/sellwithus" className="nav-link  hover:bg-green-500 transition-all p-2">Sell With Us</a>
                    <a href="/about-us" className="nav-link hover:bg-green-500 transition-all p-2">About Us</a>
                </div>
            )}
        </header>
    );
};

export default Header;
