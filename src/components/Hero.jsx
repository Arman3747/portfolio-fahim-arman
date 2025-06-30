import React from 'react';

import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

const Hero = ({ ref }) => {
    return (
        <div ref={ref} id='hero' className='scroll-mt-36 my-2 lg:my-12 px-2 lg:px-16'>
            <div className='flex flex-col-reverse lg:flex-row justify-evenly items-center gap-4'>
                <div className='flex-1'>
                    <h1 className='text-5xl lg:text-7xl mb-4 lg:mb-8'> Fahim Arman</h1>
                    <h3 className='text-xl lg:text-3xl mb-4'> <span className='border-b-2 border-[#00df72]'>Front-End Developer (MERN Stack)</span></h3>
                    <p className='text-xl'>Creative Front-End Developer skilled in MERN Stack, building responsive, user-friendly, and dynamic web applications.</p>

                    <div className='flex justify-start items-center gap-4 my-6'>

                        <a href="https://au.linkedin.com/in/fahim37/" target="_blank">
                            <button className='hover:cursor-pointer'>
                                <FaLinkedin className='text-center bg-[#fbf7f4] w-9 h-9 text-[#0077B5] m-0 p-0 rounded-xs' />
                            </button>
                        </a>

                        <a href="https://github.com/Arman3747" target="_blank">
                            <button className='hover:cursor-pointer'>
                                <FaGithubSquare className='text-center bg-[#fbf7f4] w-9 h-9 text-[#333333] m-0 p-0 rounded-xs' />
                            </button>
                        </a>

                        <a href="https://www.instagram.com/fahimarman1/" target="_blank">
                            <button className='hover:cursor-pointer'>
                                <FaInstagramSquare className='text-center w-9 h-9 text-[#fbf7f4] bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5] m-0 p-0 rounded-sm' />
                            </button>
                        </a>
                    </div>

                    <button className='bg-[#00df72] px-16 py-4 text-xl rounded-md'>


                        <a href="https://drive.google.com/file/d/1YJzaekf_z9NaWpF9-D72WcxyUpdIm-W4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <span className='flex justify-center items-center gap-2'>
                                <SiReaddotcv />
                                
                                <span>Resume</span>
                            </span>

                        </a>
                    </button>
                </div>
                <div className='flex-1 '>
                    <div className='flex justify-center items-center'>
                        <img className='border-2 rounded-full w-md' src="https://i.ibb.co/bjvNNZsL/developer-512.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;