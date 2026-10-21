import React from 'react';
import { Link } from 'react-router';

import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { SiPrisma } from "react-icons/si";
import { SiZod } from "react-icons/si";

const HomeProjectSix = () => {
    return (
        <div className='my-2'>
            <div className='flex flex-col lg:flex-row  justify-between items-center gap-4 m-2 p-2 border-2 border-[#33333330] rounded-md h-full'>

                <div className='flex-1'>
                    <div className='flex justify-center items-center bg-white border-2 border-gray-100 rounded-md shadow-2xl p-4'>
                        <img src="https://i.ibb.co/wmYVCx8/Open-Notes-Full-Page.png" alt="" className='w-[320px] rounded-md' />
                    </div>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-8'>
                        <span className='border-b-2 border-[#00df72]'>
                            OpenNotes
                        </span>
                    </h1>
                    <p className='text-xl text-justify p-2'>OpenNotes is a full-stack blogging platform where users can create, share, and discover articles with a rich-text editor and secure authentication.</p>

                    <div className='grid grid-cols-4 gap-4 place-items-center my-8'>

                        <SiTypescript className='text-5xl text-[#3178C6] border-0 bg-[#333333] border-[#333333] p-2 rounded-md' />

                        <SiNextdotjs className='text-5xl text-[#333333] border-2 border-[#333333] p-2 rounded-md' />

                        <FaReact className='text-5xl text-[#61DAFB] border-2 border-[#333333] p-2 rounded-md' />

                        <SiExpress className='text-5xl text-[#000000] border-2 border-[#333333] p-2 rounded-md' />

                        <BiLogoPostgresql className='text-5xl text-[#4169E1] border-2 border-[#333333] p-2 rounded-md' />

                        <SiPrisma className='text-5xl text-[#2D3748] border-2 border-[#333333] p-2 rounded-md' />

                        <SiZod className='text-5xl text-[#408AFF] border-2 border-[#333333] p-2 rounded-md' />

                        <SiShadcnui className='text-5xl text-[#000000] border-2 border-[#333333] p-2 rounded-md' />
                    </div>

                    <div className='grid grid-cols-1 gap-2 mr-2'>
                        <Link to="/projectOpenNotes">
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

export default HomeProjectSix;