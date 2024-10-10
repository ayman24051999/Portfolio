import React from "react";
import myImage from "../config/images/[removal.ai]_e1da0c78-35a9-4bd5-b39f-c96e3874c38f-1000025462 (1).png"; // Adjust the path based on your directory structure
import blob from "../config/images/magicpattern-blob-1728569375768.png"; // Adjust the path based on your directory structure

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/layout/navBar/NavBar";
import { Link } from "react-router-dom";

function Portfeuille() {
    return (
        <div className='relative bg-violetta min-h-screen w-full bg-blue-600 flex flex-col items-start p-5'>
            <Navbar /> {/* Include the Navbar here */}
            <p className='text-3xl font-bold text-white mb-4 mt-16 ml-4 md:mt-32 md:ml-[10%]'>
                Hi There,
            </p>
            <div className='flex flex-col md:flex-row ml-4 md:ml-[10%]'>
                <p className='text-3xl font-bold text-white mb-4'>I'm Ayman </p>
                <p className='text-3xl font-bold text-blue-1000 mb-4 md:ml-2'>
                    Hammemi
                </p>
            </div>
            <div className='flex ml-4 md:ml-[10%] space-x-4'>
                {/* Rounded button with icons */}
                <Link
                    to='https://www.facebook.com/ayman.hammami.7/'
                    className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition duration-200'>
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        className='text-blue-600'
                    />
                </Link>
                <Link
                    to='https://www.instagram.com/ayman_hammemi/'
                    className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition duration-200'>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className='text-pink-600'
                    />
                </Link>
                <Link
                    to='https://www.linkedin.com/in/ayman-hammemi/'
                    className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition duration-200'>
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className='text-blue-700'
                    />
                </Link>
                <Link
                    to='https://github.com/ayman24051999/'
                    className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition duration-200'>
                    <FontAwesomeIcon
                        icon={faGithub}
                        className='text-gray-800'
                    />
                </Link>
            </div>
            <div className='absolute right-12 top-1/2 transform -translate-y-1/2 z-1 w-[150px] h-[30vh] sm:w-[200px] sm:h-[35vh] md:w-[320px] md:h-[70vh]'>
                <img
                    src={blob}
                    alt='blob'
                    className='w-full h-full object-cover' // Ensures the blob fills the container
                />
            </div>
            <div className='absolute right-0 z-10 flex items-center justify-center h-full'>
                <img
                    src={myImage}
                    alt='Description of image'
                    className='w-[50vw] h-[40vh] sm:w-[40vw] sm:h-[50vh] md:w-[40vw] md:h-[60vh]' // Responsive width and height
                />
            </div>
        </div>
    );
}

export default Portfeuille;
