"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-purple-700 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">ByteBard</div>

                <div className="lg:hidden">
                    <button
                        className="text-white focus:outline-none focus:text-white"
                        onClick={toggleNavbar}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className={`lg:flex ${isOpen ? 'flex' : 'hidden'}`}>
                    <Link
                        href="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
