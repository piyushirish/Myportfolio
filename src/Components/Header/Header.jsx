import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header className=' shadow sticky top-0 z-50'>
            <nav className='bg-gray-900 text-slate-300 px-4 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl mt-1'>
                    <Link to="/" className="flex items-center">
                       
                    </Link>
                    <div className='flex items-center lg:order-2'>                        
                        <a className='text-slate-400 hover:text-emerald-400 hover:bg-gray-50 focus:ring-4 focus:ring-emerald-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                         href="https://github.com/piyushirish"
                         target="_blank"
                          rel="noopener noreferrer">
                            My GitHub
                        </a>
                        <NavLink to ="/contact"
                            className={({isActive}) =>
                                `block duration=200 ${isActive ? 'text-orange-700' : 'text-gray-700'} text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none `
                        }
                            >
                                Contact
                        </NavLink>
                    </div>
                    <div className='flex justify-center lg:justify-end lg:order-1'>
                        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                        <li>
                            <NavLink to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration=200 ${isActive ? 'text-emerald-400' : 'text-slate-400'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg-border-0 hover:text-emerald-400 lg:p-0 `
                        }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/project"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration=200 ${isActive ? 'text-emerald-400' : 'text-slate-400'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg-border-0 hover:text-emerald-400 lg:p-0 `
                        }
                        >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to ="/contact"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration=200 ${isActive ? 'text-emerald-400' : 'text-slate-400'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg-border-0 hover:text-emerald-400 lg:p-0 `
                        }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/github" 
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration=200 ${isActive ? 'text-emerald-400' : 'text-slate-400'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg-border-0 hover:text-emerald-400 lg:p-0 `
                        }
                            >
                                Github
                            </NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}