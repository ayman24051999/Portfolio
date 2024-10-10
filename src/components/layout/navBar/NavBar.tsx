import React from "react";
import { Link } from "react-router-dom"; // Import Link if you're using React Router
import { router } from "../../../config";

function Navbar() {
    return (
        <nav className='bg-nav min-w-[300px] sm:min-w-[400px] md:min-w-[500px] shadow-md border-lg rounded-md border-gray-200 w-[90vw] sm:w-[70vw] md:w-[45vw]'>
            <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
                <div className='text-l font-bold text-test sm:text-2xl'>
                    My Portfolio
                </div>
                <ul className='flex space-x-4'>
                    <li>
                        <Link
                            to={router.home.aboutme}
                            className='inline-block px-4 py-2 text-write transition duration-200 relative group'>
                            <span className='absolute inset-0 bg-test opacity-0 rounded-md transition-opacity duration-200 group-hover:opacity-100'></span>
                            <span className='relative z-10 hover:text-write'>
                                About Me
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/about'
                            className='inline-block px-4 py-2 text-write transition duration-200 relative group'>
                            <span className='absolute inset-0 bg-test opacity-0 transition-opacity rounded-md duration-200 group-hover:opacity-100'></span>
                            <span className='relative z-10 hover:text-write'>
                                About
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/details'
                            className='inline-block px-4 py-2 text-write transition duration-200 relative group'>
                            <span className='absolute inset-0 bg-test opacity-0 transition-opacity rounded-md duration-200 group-hover:opacity-100'></span>
                            <span className='relative z-10 hover:text-write'>
                                Details
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
