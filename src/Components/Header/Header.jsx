import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='shadow sticky top-0 z-50'>
            <nav className='bg-gray-900 text-slate-300 px-4 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <div className='flex items-center lg:order-1'>
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='lg:hidden p-2 ml-1 text-gray-400 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-600'
                        >
                            <svg
                                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            <svg
                                className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        
                        {/* Desktop Navigation */}
                        <ul className='hidden lg:flex lg:space-x-8'>
                            {renderNavLinks(setIsMenuOpen)}
                        </ul>
                    </div>

                    {/* Right Section - Always visible */}
                    <div className='flex items-center lg:order-2'>                        
                        <a className='hidden lg:inline-block text-slate-400 hover:text-emerald-400 hover:bg-gray-50 focus:ring-4 focus:ring-emerald-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                         href="https://github.com/piyushirish"
                         target="_blank"
                          rel="noopener noreferrer">
                            My GitHub
                        </a>
                        <NavLink 
                            to="/contact"
                            className={({isActive}) =>
                                `hidden lg:inline-block text-sm px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-medium ${
                                    isActive 
                                    ? 'text-white bg-orange-700 hover:bg-orange-800' 
                                    : 'text-white bg-gray-800 hover:bg-gray-700'
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`w-full lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className='flex flex-col mt-4 space-y-2'>
                            {renderNavLinks(setIsMenuOpen)}
                            <li>
                                <a
                                    className='block py-2 px-4 text-slate-400 hover:bg-gray-800 rounded-lg'
                                    href="https://github.com/piyushirish"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    My GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function renderNavLinks(setIsMenuOpen) {
    const linkClass = ({isActive}) => 
        `block py-2 px-4 rounded-lg ${
            isActive 
            ? 'text-emerald-400 bg-gray-800' 
            : 'text-slate-400 hover:bg-gray-800'
        }`;

    return (
        <>
            <li>
                <NavLink 
                    to="/" 
                    className={linkClass}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/project" 
                    className={linkClass}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/contact" 
                    className={linkClass}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/github" 
                    className={linkClass}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Github
                </NavLink>
            </li>
        </>
    );
}