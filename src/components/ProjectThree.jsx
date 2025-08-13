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

const ProjectThree = () => {
    return (
        <div className='my-12'>
            <div className='flex flex-col lg:flex-row  justify-between items-center gap-8'>


                <div className='flex-1 bg-white border-2 rounded-md'>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/7dhbSrZt/Blood-Connect-github.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/BHpsjCTq/Blood-Connect-post-02.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/bMGmNjCK/Blood-Connect-post-03.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/JRLMzpWK/Blood-Connect-post-04.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/hJGV8rnp/Blood-Connect-post-05.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/VWTyBTBw/Blood-Connect-post-06.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/6Rs9xYNb/Blood-Connect-post-07.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/JRfd2Z0S/Blood-Connect-post-08.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/WWB9WysS/Blood-Connect-post-09.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/bgP1rKLC/Blood-Connect-post-10.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/wZynrKFz/Blood-Connect-post-11.png" />
                        </div>
                    </Carousel>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-2'>
                        <span className='border-b-2 border-[#00df72]'>
                            BloodConnect
                        </span>
                    </h1>
                    <p className='text-xl text-justify'>Blood Connect is a web platform that instantly connects blood donors and seekers through location-based search, verified profiles, and role-based dashboards, making blood donation faster, organized, and reliable for urgent needs.</p>
                    <br />

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Quickly find blood donors by blood group and location.</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Separate interfaces for Admins, Volunteers, and Donors to manage requests.</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Create, track, and update blood donation requests securely.</div>
                    </div>
                    <br />

                    <div className='grid grid-cols-8 place-items-center gap-2 mb-4'>

                        <FaReact className='text-5xl text-[#61DAFB] border-2 border-[#333333] p-2 rounded-md' />
                        <AiOutlineJavaScript className='text-5xl text-[#FFED29] border-2 bg-[#333333] border-[#333333] p-2 rounded-md' />
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

                        <Link to="/projectBloodConnect">
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

export default ProjectThree;