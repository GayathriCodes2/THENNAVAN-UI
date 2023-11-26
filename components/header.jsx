// Header.js
"use client"
import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-green-600 mt-2 mx-2 text-white p-4 flex flex-col md:flex-row justify-between items-center lg:rounded-full">
            {/* Logo and Navigation Menu (Desktop) */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <img src="/cultivate.png" alt="Logo" className="h-8 w-8" />
                    <span className="text-lg font-bold">Our product</span>
                </div>
            </div>

            {/* Navigation Menu (Desktop) */}
            <div className="flex items-center space-x-4">
                <nav className="hidden md:flex items-center space-x-4 ml-auto ">
                    <a href="/about-us" className="nav-link hover:bg-green-500 transition-all rounded p-2">Who We Are</a>
                    <a href="/contact-us" className="nav-link  hover:bg-green-500 transition-all rounded p-2">Get in Touch</a>
                    <a href="/our-cultivated-products" className="nav-link  hover:bg-green-500 transition-all rounded p-2">Our Harvested Goods</a>
                    <a href="/famous-products" className="nav-link  hover:bg-green-500 transition-all rounded p-2">Signature Local Delicacies</a>
                </nav>
            </div>

            {/* Search Bar */}
            <div className="flex">

                <div className="md:hidden ml-0 self-end">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </div>
                <div className='items-center space-x-6'>
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-1 border border-white rounded lg:w-40 transition-all duration-300 ease-in-out to-black focus:outline-none focus:border-green-400"
                    />
                    <button className="bg-white text-gray-800 px-2 py-1 rounded">Search</button>
                </div>

            </div>

            {/* Mobile Menu Icon (Right-aligned) */}


            {/* Navigation Menu (Mobile) */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-2">
                    <a href="/about-us" className="nav-link hover:bg-green-500 transition-all p-2">Who We Are</a>
                    <a href="/contact-us" className="nav-link  hover:bg-green-500 transition-all p-2">Get in Touch</a>
                    <a href="/our-cultivated-products" className="nav-link  hover:bg-green-500 transition-all p-2">Our Harvested Goods</a>
                    <a href="/famous-products" className="nav-link  hover:bg-green-500 transition-all p-2">Signature Local Delicacies</a>
                </div>
            )}
        </header>
    );
};

export default Header;
