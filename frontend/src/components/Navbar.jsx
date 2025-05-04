import React, { useEffect, useRef } from "react";
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    return (
        <header className="shadow sticky z-50 top-0 max-w-[1200px] mx-auto">
            <nav className="bg-white border-gray-200  py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <div>
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex font-medium flex-row space-x-8 mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/testimonials"
                                    className={({ isActive }) =>
                                        `py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 p-0`
                                    }
                                >
                                    Testimonial
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
