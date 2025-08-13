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

const ProjectsOne = () => {
    return (
        <div className='my-12'>
            <div className='flex flex-col lg:flex-row-reverse  justify-between items-center gap-8'>
                <div className='flex-1 bg-white border-2 rounded-md'>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/yFQ0fj9Y/btob01.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/BHfxC82s/btob02.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/yJPW5bS/btob03.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/s9RjWSLm/btob04.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/ycq86M8j/btob05.png" />
                        </div>
                    </Carousel>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-2'>
                        <span className='border-b-2 border-[#00df72]'>
                            B2Bridge
                        </span>
                    </h1>
                    <p className='text-xl text-justify'>A web app where businesses (users) can post their products for sale, browse by category, and make purchases — essentially bridging the gap between sellers and buyers in the business world.</p>
                    <br />

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Seamless Product Posting and Management</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Category-Based Browsing with Detailed Product View</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Secure Authentication with Google and JWT</div>
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



                        {/* <img src="https://img.shields.io/badge/React-333333?logo=react" alt="" />

                            <img src="https://img.shields.io/badge/JavaScript-333333?logo=javascript" alt="" />

                            <img src="https://img.shields.io/badge/Node.js-333333?logo=nodedotjs" alt="" />

                            <img src="https://img.shields.io/badge/Express.js-333333?logo=express" alt="" />

                            <img src="https://img.shields.io/badge/MongoDB-333333?logo=mongodb" alt="" />

                            <img src="https://img.shields.io/badge/Tailwind_CSS-333333?logo=tailwindcss" alt="" />

                            <img src="https://img.shields.io/badge/Daisy_UI-333333?logo=daisyui" alt="" />

                            <img src="https://img.shields.io/badge/React_Router-333333?logo=reactrouter" alt="" /> */}


                    </div>

                    <div className='grid grid-cols-2 gap-2'>

                        <a href="https://rad-daffodil-39264b.netlify.app/" target='_blank' rel="noopener noreferrer">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <PiLinkSimpleBold />
                                Live Link
                            </button>
                        </a>

                        {/* <a href="https://github.com/Arman3747/B2Bridge-client" target='_blank' rel="noopener noreferrer">
                                <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer'>
                                    Github Client
                                </button>
                            </a>

                            <a href="https://github.com/Arman3747/B2Bridge-server" target='_blank' rel="noopener noreferrer">
                                <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer'>
                                    Github Server
                                </button>
                            </a> */}

                        <Link to="/projectBridge">
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

export default ProjectsOne;