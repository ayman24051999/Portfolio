import React, { useRef } from "react";
import myImage from "../config/images/[removal.ai]_e1da0c78-35a9-4bd5-b39f-c96e3874c38f-1000025462 (1).png";
import blob from "../config/images/magicpattern-blob-1728569375768.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faGithub,
    faJs, // JavaScript icon
    faReact, // React icon
    faHtml5,
    faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons"; // Java icon
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Solid icons for phone and envelope
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // WhatsApp icon
import Navbar from "../components/layout/navBar/NavBar";
import { Link } from "react-router-dom";
import springBootIcon from "../config/images/14756089569.png"; // Adjust the path based on your directory structure

function Portfeuille() {
    const skillsRef = useRef(null); // Create a ref for the Skills section
    const contactRef = useRef(null);
    const scrollToSkills = () => {
        if (skillsRef.current) {
            skillsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const scrollToContactUs = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className='relative bg-violetta min-h-screen w-full bg-blue-600 flex flex-col items-start p-5'>
            <Navbar
                scrollToSkills={scrollToSkills}
                scrollToContactUs={scrollToContactUs}
            />
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
            <div className='absolute right-12 top-1/3 transform -translate-y-1/2 z-1 w-[150px] h-[30vh] sm:w-[200px] sm:h-[35vh] md:w-[320px] md:h-[70vh]'>
                <img
                    src={blob}
                    alt='blob'
                    className='w-full h-full object-cover' // Ensures the blob fills the container
                />
            </div>
            <div className='absolute bottom-12 right-0 z-10 flex items-center justify-center h-full'>
                <img
                    src={myImage}
                    alt='Description of image'
                    className='w-[50vw] h-[40vh] sm:w-[40vw] sm:h-[50vh] md:w-[40vw] md:h-[60vh] hover:scale-105 transition duration-300' // Responsive width and height
                />
            </div>
            {/* Skills section without h-screen */}
            <div
                ref={skillsRef}
                className='flex gap-4 flex-col justify-center items-center w-full h-auto mt-48'>
                <p className='text-2xl font-bold text-white mb-4'>Skills</p>
                <div className='flex space-x-6'>
                    {/* Skill icons with colors and adjusted sizes */}
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon
                            icon={faReact}
                            className='text-[#61DBFB] text-4xl' // React color
                        />
                        <span className='text-white text-xs mt-1'>React</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon
                            icon={faJs}
                            className='text-[#F7DF1E] text-4xl' // JavaScript color
                        />
                        <span className='text-white text-xs mt-1'>
                            JavaScript
                        </span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon
                            icon={faCss3}
                            className='text-[#1572B6] text-4xl' // CSS color
                        />
                        <span className='text-white text-xs mt-1'>CSS</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon
                            icon={faJava}
                            className='text-[#007396] text-4xl' // Java color
                        />
                        <span className='text-white text-xs mt-1'>Java</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon
                            icon={faHtml5}
                            className='text-[#E34F26] text-4xl' // HTML color
                        />
                        <span className='text-white text-xs mt-1'>HTML</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img
                            src={springBootIcon}
                            alt='Spring Boot'
                            className='w-12 h-9 ' // Adjust size as needed
                        />
                        <span className='text-white text-xs mt-1'>
                            Spring Boot
                        </span>
                    </div>
                </div>
            </div>
            <div
                ref={contactRef}
                className='flex flex-col items-center w-full h-auto mt-8'>
                <p className='text-2xl font-bold text-white mb-4'>Contact</p>
                <div className='flex space-x-8'>
                    <div className='flex items-center space-x-2'>
                        <FontAwesomeIcon
                            icon={faPhone} // Use the imported icon
                            className='text-white'
                        />
                        <span className='text-white text-lg'>
                            +216 44327003
                        </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FontAwesomeIcon
                            icon={faEnvelope} // Use the imported icon
                            className='text-white'
                        />
                        <span className='text-white text-lg'>
                            ayman.hammami20188@gmail.com
                        </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FontAwesomeIcon
                            icon={faWhatsapp} // Use the imported icon
                            className='text-white'
                        />
                        <span className='text-white text-lg'>
                            +216 22327003
                        </span>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default Portfeuille;
