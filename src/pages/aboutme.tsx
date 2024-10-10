import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import myImage from "../config/images/[removal.ai]_e1da0c78-35a9-4bd5-b39f-c96e3874c38f-1000025462 (1).png"; // Adjust the path based on your directory structure
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the specific arrow icon
import { router } from "../config";

function Aboutme() {
    return (
        <div className='bg-teal-600 bg-gradient-to-r from-teal-600 to-teal-400 min-h-screen w-full flex'>
            <div className='relative top-5 left-5 '>
                <Link
                    to={router.home.portfeille}
                    className='flex items-center text-white text-xl'>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />{" "}

                </Link>
            </div>
            <div className='mt-10 ml-12 text-2xl text-white font-bold'>
                <div> About Me :</div>
                <div className='w-[45%] mt-10 text-xl text-white font-sans md:w-2/3'>
                    I will graduate by first of September 2024 from Esprit
                    university in Tunisia as a software engineer. I am eager to
                    be part of your company because I want to contribute to
                    interesting projects, learn within your team and give my
                    added value. I am a disciplined, determined, and I adapt
                    fast to change. In fact, I changed my career at the age of
                    21 from a mechanical technician to a computer engineer. I
                    also believe in the efficiency of teamwork and committed to
                    continuous learning in advanced software development.
                </div>
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

export default Aboutme;
