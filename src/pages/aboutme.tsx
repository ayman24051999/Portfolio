import React from "react";
import { Link } from "react-router-dom";
import myImage from "../config/images/[removal.ai]_e1da0c78-35a9-4bd5-b39f-c96e3874c38f-1000025462 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { router } from "../config";

function Aboutme() {
    return (
        <div className='bg-gradient-to-r from-teal-600 to-teal-400 min-h-screen w-full flex relative overflow-hidden'>
            {/* Background Circle */}
            <div className='absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-200 opacity-30 transform -translate-x-1/2 -translate-y-1/2' />
            <div className='absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-200 opacity-30 transform translate-x-1/2 translate-y-1/2' />

            {/* Back Button */}
            <div className='absolute top-5 left-5'>
                <Link
                    to={router.home.portfeille}
                    className='flex items-center text-white text-xl bg-teal-800 p-2 rounded-full shadow-lg hover:bg-teal-700 transition duration-200'>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                    Back
                </Link>
            </div>

            {/* Content Container */}
            <div className='mt-20 ml-12 text-2xl text-white font-bold z-10'>
                <div>About Me:</div>
                <div className='w-[45%] mt-10 text-xl text-white font-sans md:w-2/3'>
                    I will graduate by the first of September 2024 from Esprit
                    University in Tunisia as a software engineer. I am eager to
                    be part of your company because I want to contribute to
                    interesting projects, learn within your team, and give my
                    added value. I am disciplined, determined, and I adapt fast
                    to change. In fact, I changed my career at the age of 21
                    from a mechanical technician to a computer engineer. I also
                    believe in the efficiency of teamwork and am committed to
                    continuous learning in advanced software development.
                </div>
            </div>

            {/* Image Section */}
            <div className='absolute right-0 z-10 flex items-center justify-center h-full'>
                <img
                    src={myImage}
                    alt='Description of image'
                    className='w-[50vw] h-[40vh] sm:w-[40vw] sm:h-[50vh] md:w-[40vw] md:h-[60vh] rounded-full shadow-lg transform hover:scale-105 transition duration-300' // Responsive width and height
                />
            </div>
        </div>
    );
}

export default Aboutme;
