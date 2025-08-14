import React from 'react';
import { Link } from 'react-router';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";


import { FaCode } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";

const ProjectsTwo = () => {
    return (
        <div className='my-12'>
            <div className='flex flex-col lg:flex-row  justify-between items-center gap-8'>


                <div className='flex-1 bg-white border-2 rounded-md'>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/Q3ymNpkh/Roomies-github.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/pjKWfvJq/Roomies-post-02.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/Rk7p7LPj/Roomies-post-03.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/bMyXQHzJ/Roomies-post-04.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/V06yJgMc/Roomies-post-05.png" />
                        </div>
                    </Carousel>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-8'>
                        <span className='border-b-2 border-[#00df72]'>
                            Roomies
                        </span>
                    </h1>
                    <p className='text-xl text-justify'>Roomies is a web app for finding roommates or rooms to rent, offering secure authentication, detailed listings, like-to-contact features, and a personal dashboard with posts, likes, and rent analytics.</p>

                    {/* <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Roomies helps you find and post rooms for rent with ease.</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Like a listing to reveal the owner's contact details.</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>View your posts, likes, and stats in your personal dashboard.</div>
                    </div> */}

                    <div className='grid grid-cols-8 place-items-center gap-2 my-8'>

                        <AiOutlineJavaScript className='text-5xl text-[#FFED29] border-2 bg-[#333333] border-[#333333] p-2 rounded-md' />
                        <FaReact className='text-5xl text-[#61DAFB] border-2 border-[#333333] p-2 rounded-md' />
                        <FaNodeJs className='text-5xl text-[#5FA04E] border-2 border-[#333333] p-2 rounded-md' />
                        <SiExpress className='text-5xl text-[#000000] border-2 border-[#333333] p-2 rounded-md' />

                        <SiMongodb className='text-5xl text-[#47A248] border-2 border-[#333333] p-2 rounded-md' />
                        <RiTailwindCssFill className='text-5xl text-[#06B6D4] border-2 border-[#333333] p-2 rounded-md' />
                        <SiReactrouter className='text-5xl text-[#CA4245] border-2 border-[#333333] p-2 rounded-md' />
                        <IoLogoFirebase className='text-5xl text-[#DD2C00] border-2 border-[#333333] p-2 rounded-md' />
                    </div>

                    <div className='grid grid-cols-2 gap-2'>

                        <a href="https://fascinating-sunflower-cfec7f.netlify.app/" target='_blank' rel="noopener noreferrer">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <PiLinkSimpleBold />
                                Live Link
                            </button>
                        </a>

                        <Link to="/projectRoomies">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <FaCode />
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsTwo;