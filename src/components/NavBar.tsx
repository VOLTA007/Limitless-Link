import React from 'react'

export const NavBar = () => {
    return (
        <nav className="bg-white border-gray-200 font-[700] mb-[55px]">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-8">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img src="/Logo.png"></img>
                    </a>
                    <ul className="md:flex space-x-3 hidden md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black rounded hover:bg-gray-100"
                                aria-current="page"
                            >
                                What We Do
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black rounded hover:bg-gray-100"
                            >
                                Case
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black rounded hover:bg-gray-100"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black rounded hover:bg-gray-100"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center space-x-3 md:space-x-0">
                    <button
                        type="button"
                        className="text-black md:flex hidden bg-gradient-to-r from-[#B57737] via-[#ECC974] to-[#F7D980] font-bold py-2 px-4  rounded-[75px] text-sm text-center pt-[16px] pr-[32px] pb-[16px] pl-[32px]"
                    >
                        Hire Us
                    </button>
                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-cta"
                        aria-expanded="false"
                    >
                        <span className="sr-only"></span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
