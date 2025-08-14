import React from 'react';
import { Link } from 'react-router';

import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";


import { FaCode } from "react-icons/fa6";

const HomeProjectThree = () => {
    return (
        <div className='my-2'>
            <div className='flex flex-col lg:flex-row  justify-between items-center gap-4 m-2 p-2 border-2 border-[#33333330] rounded-md h-full'>
                <div className='flex-1 bg-white border-2 border-gray-100 rounded-md shadow-2xl'>
                    <img src="https://i.ibb.co/DPm1QV6v/Blood-Connect-home-project.png" alt="" className='w-[320px] rounded-md' />
                </div>
                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-8'>
                        <span className='border-b-2 border-[#00df72]'>
                            BloodConnect
                        </span>
                    </h1>
                    <p className='text-xl text-justify p-2'>Blood Connect is a web platform that instantly connects blood donors and seekers through location-based search, verified profiles, and role-based dashboards, making blood donation faster, organized, and reliable for urgent needs.</p>

                    <div className='grid grid-cols-4 gap-4 place-items-center my-8'>

                        <AiOutlineJavaScript className='text-5xl text-[#FFED29] border-2 bg-[#333333] border-[#333333] p-2 rounded-md' />
                        <FaReact className='text-5xl text-[#61DAFB] border-2 border-[#333333] p-2 rounded-md' />
                        <FaNodeJs className='text-5xl text-[#5FA04E] border-2 border-[#333333] p-2 rounded-md' />
                        <SiExpress className='text-5xl text-[#000000] border-2 border-[#333333] p-2 rounded-md' />

                        <SiMongodb className='text-5xl text-[#47A248] border-2 border-[#333333] p-2 rounded-md' />
                        <RiTailwindCssFill className='text-5xl text-[#06B6D4] border-2 border-[#333333] p-2 rounded-md' />
                        <SiReactrouter className='text-5xl text-[#CA4245] border-2 border-[#333333] p-2 rounded-md' />
                        <IoLogoFirebase className='text-5xl text-[#DD2C00] border-2 border-[#333333] p-2 rounded-md' />
                    </div>

                    <div className='grid grid-cols-1 gap-2 mr-2'>
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

export default HomeProjectThree;