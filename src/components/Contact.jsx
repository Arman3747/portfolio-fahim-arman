import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";





const Contact = ({ ref }) => {
    return (
        <div>
            <div className='my-12 px-2 lg:px-16'>
                <h1 ref={ref} id="contacts" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>Contact</h1>

                <div className='flex flex-col lg:flex-row justify-between h-full items-stretch gap-4'>

                    <div className='flex-1'>
                        <h1 className='text-3xl lg:text-4xl px-0 lg:px-4 text-left mb-12 font-semibold'>Contact information</h1>
                        <div className='flex flex-col justify-between items-start h-full px-0 lg:px-4 mt-2 lg:mt-20'>

                            <div className='flex-1 flex flex-col gap-2'>
                                <div className='flex justify-start items-center gap-2'>
                                    <IoPersonSharp className='text-3xl text-[#00df72]' />
                                    <h3 className='text-2xl font-medium'>Fahim Arman</h3>
                                </div>

                                <div className='flex justify-start items-center gap-2'>
                                    <FaLocationDot className='text-3xl text-[#00df72]' />
                                    <h3 className='text-xl'>Sydney, Australia</h3>
                                </div>

                                <div className='flex justify-start items-center gap-2'>
                                    <IoCall className='text-3xl text-[#00df72]' />
                                    <h3 className='text-xl'>+61 469 359 791</h3>
                                </div>

                                <div className='flex justify-start items-center gap-2'>
                                    <FaSquareWhatsapp className='text-3xl text-[#00df72]' />
                                    <h3 className='text-xl'>+61 469 359 791</h3>
                                </div>

                                <div className='flex justify-start items-center gap-2'>
                                    <MdEmail className='text-3xl text-[#00df72]' />
                                    <h3 className='text-xl'>Fahim.3761@gmail.com</h3>
                                </div>
                            </div>

                            <div className='flex-1'>
                                <div className='hidden lg:flex justify-start items-center gap-2  text-xl mt-4'>
                                    <FaMagnifyingGlass className='text-[#00df72]' />

                                    <p>Find me on:</p>
                                </div>

                                <div className='flex justify-start items-center gap-4 mt-4'>

                                    <IoShareSocialSharp className='text-3xl text-[#00df72]' />

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
                                            <FaInstagramSquare className='text-center w-9 h-9 text-[#fbf7f4]
                             bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5] m-0 p-0 rounded-sm' />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <h1 className='text-4xl text-center mb-12 font-semibold'>Email</h1>

                        <div className="card w-full">
                            <div className="card-body">
                                <form className="fieldset">

                                    <label className="label">Email</label>
                                    <input type="email" className="input w-full bg-[#fbf7f4]" placeholder="Email" />
                                    <br />

                                    <label className="label">Message</label>
                                    <textarea type="text" className="textarea h-36 w-full bg-[#fbf7f4]" placeholder="Message"></textarea>
                                    <br />

                                    <button className='bg-[#00df72] px-8 py-4 text-xl rounded-md'>
                                        Send Email
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;