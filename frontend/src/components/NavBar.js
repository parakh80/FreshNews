import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const { mode, toggleMode } = props; // Destructuring props

    return (
        <>
            {/* Navigation bar */}
            <nav className={`fixed w-full z-10 top-0 start-0 border-b ${mode === 'light' ? 'bg-white  border-gray-200' : 'bg-gray-900 border-gray-600'}`}>
                <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-1">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={`${process.env.PUBLIC_URL}/freshnews.png`}
                            className="h-20" alt="FreshNews Logo" />
                    </Link>

                    {/* Mode switcher */}
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value=""
                                className="sr-only peer" onClick={toggleMode} />
                            <div className={`relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600 ${mode === 'light' ? 'bg-gray-200 after:border-gray-300 peer-focus:ring-blue-300' : 'border-gray-600 bg-gray-700 peer-focus:ring-blue-800'}`}></div>
                            <span className={`ms-2 text-sm font-medium ${mode === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>{mode === 'light' ? 'Lights Off' : 'Lights On'}</span>
                        </label>
                        {/* Mobile menu toggle */}
                        <button type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 ${mode === 'light' ? 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200' : 'text-gray-400 hover:bg-gray-700 focus:ring-gray-600'}`} aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className={`flex flex-col p-2 md:p-0 mt-2 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${mode === 'light'
                            ? 'bg-gray-50 border-gray-100 md:bg-white'
                            : 'bg-gray-800 border-gray-700 md:bg-gray-900'
                            }`}>
                            {/* Menu items */}
                            <Link
                                to="/"
                                aria-current="page"
                                className={`block py-2 px-3 rounded md:p-0 ${mode === 'light'
                                    ? 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                    : 'text-white border-gray-700 hover:text-white hover:bg-gray-700 md:hover:text-blue-500  md:hover:bg-transparent'
                                    }`}

                                onClick={scrollToTop}
                            >
                                Home
                            </Link>
                            <Link
                                to="/business"
                                className={`block py-2 px-3 rounded md:p-0 ${mode === 'light'
                                    ? 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                    : 'text-white border-gray-700 hover:text-white hover:bg-gray-700 md:hover:text-blue-500  md:hover:bg-transparent'
                                    }`}
                                onClick={scrollToTop}
                            >
                                Business
                            </Link>
                            <Link
                                to="/entertainment"
                                className={`block py-2 px-3 rounded md:p-0 ${mode === 'light'
                                    ? 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                    : 'text-white border-gray-700 hover:text-white hover:bg-gray-700 md:hover:text-blue-500  md:hover:bg-transparent'
                                    }`}
                                onClick={scrollToTop}
                            >
                                Entertainment
                            </Link>
                            <Link
                                to="/health"
                                className={`block py-2 px-3 rounded md:p-0 ${mode === 'light'
                                    ? 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                    : 'text-white border-gray-700 hover:text-white hover:bg-gray-700 md:hover:text-blue-500  md:hover:bg-transparent'
                                    }`}
                                onClick={scrollToTop}
                            >
                                Health
                            </Link>
                            <Link
                                to="/science"
                                className={`block py-2 px-3 rounded md:p-0 ${mode === 'light'
                                    ? 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                    : 'text-white border-gray-700 hover:text-white hover:bg-gray-700 md:hover:text-blue-500  md:hover:bg-transparent'
                                    }`}
                                onClick={scrollToTop}
                            >
                                Science
                            </Link>
                            <Link
                                to="/sports"
                                className={`block py-2 px-3 rounded md:p-0 ${mode === 'light'
                                    ? 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                    : 'text-white border-gray-700 hover:text-white hover:bg-gray-700 md:hover:text-blue-500  md:hover:bg-transparent'
                                    }`}
                                onClick={scrollToTop}
                            >
                                Sports
                            </Link>
                            <Link
                                to="/technology"
                                className={`block py-2 px-3 rounded md:p-0 ${mode === 'light'
                                    ? 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                    : 'text-white border-gray-700 hover:text-white hover:bg-gray-700 md:hover:text-blue-500  md:hover:bg-transparent'
                                    }`}
                                onClick={scrollToTop}
                            >
                                Technology
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;



