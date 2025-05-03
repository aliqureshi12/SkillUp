import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow sticky top-0 z-50 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 max-w-screen-xl mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="logo" className="h-20 ml-2" />
                    </Link>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
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
                                strokeWidth={2}
                                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>

                    <div className={`${menuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto`}>
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 px-4 text-gray-800 hover:text-amber-700"
                                    activeClassName="text-blue-600 font-semibold"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courses-page"
                                    className="block py-2 px-4 text-gray-800 hover:text-amber-700"
                                    activeClassName="text-blue-600 font-semibold"
                                >
                                    Our Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/add-course"
                                    className="block py-2 px-4 text-gray-800 hover:text-amber-700"
                                    activeClassName="text-blue-600 font-semibold"
                                >
                                    Add Course
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        <button className="bg-amber-700 text-white hover:bg-amber-800 px-4 py-2 rounded-4xl">
                            Contact Us
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="mt-4 lg:hidden">
                        <button className="w-full bg-amber-700 text-white py-2 rounded">Contact Us</button>
                    </div>
                )}
            </nav>
        </header>
    );
}
