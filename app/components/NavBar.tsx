

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">My Portfolio</div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>
                <ul className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <li>
                        <Link href="/home" className="text-gray-300 hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;