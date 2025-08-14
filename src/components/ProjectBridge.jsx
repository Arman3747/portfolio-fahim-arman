import React, { useEffect, useState } from "react";

import { Link, NavLink, useLocation } from 'react-router';
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";


const ProjectBridge = () => {

    const { pathname } = useLocation();

    const [openMenu, setOpenMenu] = useState(false);

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        fetch("BtoBridgeFeatures.json")
            .then((res) => res.json())
            .then((data) => setFeatures(data));
    }, []);

    return (
        <div className='max-w-[1600px] mx-auto px-4'>

            <div className="sticky top-0 z-1000 bg-[#fbf7f4] py-4 border-b border-gray-300">
                <div className='flex justify-between items-center gap-4 px lg:px-16'>
                    <div className='flex items-center justify-center gap-2'>
                        <Link to="/home#hero">
                            <img className='h-12' src="https://i.ibb.co/yn97fytF/logo-fahim-arman.png" alt="" />
                        </Link>

                        <Link to="/home#hero">
                            <h1 className='text-3xl font-semibold'>fahim_arman</h1>
                        </Link>
                    </div>

                    <div className='hidden lg:flex justify-between items-center gap-8'>
                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectBridge">./B2Bridge</NavLink>
                    </div>

                    <div>

                    </div>

                    <div className='flex flex-col lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                        {
                            openMenu ? <RiCloseLargeFill className='text-3xl lg:hidden' /> : <HiMenu className='text-3xl lg:hidden' />
                        }

                        <div className={`lg:hidden absolute flex flex-col justify-end duration-500 gap-2 bg-[#fbf7f4] rounded-md p-2 border border-gray-300 ${openMenu ? 'top-14 right-0' : '-top-25 right-0'}`}>

                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectBridge">./B2Bridge</NavLink>
                        </div>
                    </div>
                </div>
            </div>


            <div className='my-12'>
                <h1 className='text-4xl lg:text-5xl font-bold mb-6'>B2Bridge</h1>
                <p className='text-lg lg:text-2xl font-medium'>
                    B2Bridge is a user-friendly web app where users can securely list, browse, and purchase products online, with features like Google login, product management, JWT protection, and responsive navigation.
                </p>
            </div>

            <div className='bg-white border-2 rounded-md'>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/yFQ0fj9Y/btob01.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/BHfxC82s/btob02.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/yJPW5bS/btob03.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/s9RjWSLm/btob04.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/ycq86M8j/btob05.png" />
                    </div>
                </Carousel>
            </div>

            <div className='my-12'>
                <h3 className='text-2xl lg:text-3xl font-semibold mb-8'>Key Features of B2Bridge:</h3>


                {features.map((feature) => (
                    <div key={feature.bridgeFeatureId} className='flex gap-2 mb-2'>
                        <div>
                            <span className="text-green-500 text-3xl font-medium">✓</span>
                        </div>

                        <div className='text-lg lg:text-xl font-medium'>
                            <span className='font-bold text-xl lg:text-2xl'>
                                {feature.bridgeFeature}
                            </span> -&nbsp; {feature.bridgeFeatureDescription}
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <h3 className='text-2xl lg:text-3xl font-semibold my-12'>Main Technology Stack - B2Bridge</h3>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>

                    <div className='text-lg lg:text-2xl col-span-1 flex justify-end items-start lg:items-center'>
                        Frontend
                    </div>

                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>

                        {/* <div className="border-2 p-1 flex justify-center items-center gap-2 bg-[#333333] rounded-md">
                            <FaHtml5 className='text-xl text-[#E34F26]' />
                            <p className="text-white">HTML5</p>
                        </div>

                        <div className="border-2 p-1 flex justify-center items-center gap-2 bg-[#333333] rounded-md">
                            <FaCss3Alt className='text-xl text-[#663399]' />
                            <p className="text-white">CSS3</p>
                        </div> */}




                        <img src="https://img.shields.io/badge/HTML5-333333?logo=html5" alt="" />
                        <img src="https://img.shields.io/badge/CSS3-333333?logo=css" alt="" />
                        <img src="https://img.shields.io/badge/JavaScript-333333?logo=javascript" alt="" />
                        <img src="https://img.shields.io/badge/React-333333?logo=react" alt="" />
                        <img src="https://img.shields.io/badge/Tailwind_CSS-333333?logo=tailwindcss" alt="" />
                        <img src="https://img.shields.io/badge/Daisy_UI-333333?logo=daisyui" alt="" />
                        <img src="https://img.shields.io/badge/React_Router-333333?logo=reactrouter" alt="" />
                        <img src="https://img.shields.io/badge/Swiper-333333?logo=swiper" alt="" />
                        <img src="https://img.shields.io/badge/Axios-333333?logo=axios" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Backend</div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/Node.js-333333?logo=nodedotjs" alt="" />
                        <img src="https://img.shields.io/badge/Express.js-333333?logo=express" alt="" />
                        <img src="https://img.shields.io/badge/MongoDB-333333?logo=mongodb" alt="" />
                        <img src="https://img.shields.io/badge/Nodemon-333333?logo=nodemon" alt="" />

                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Authentication
                        <span className='hidden lg:inline-block'>& Security</span>
                    </div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/Firebase-333333?logo=firebase" alt="" />
                        <img src="https://img.shields.io/badge/JSON_Web_Token-333333?logo=jsonwebtokens" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Supporting Tools</div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/.ENV-333333?logo=dotenv" alt="" />
                        <img src="https://img.shields.io/badge/NPM-333333?logo=npm" alt="" />
                        <img src="https://img.shields.io/badge/Vite-333333?logo=vite" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Version Control</div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/Git-333333?logo=git" alt="" />
                        <img src="https://img.shields.io/badge/GitHub-333333?logo=github" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Web Hosting <span className='hidden lg:inline-block'>& Deployment</span></div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/Vercel-333333?logo=vercel" alt="" />
                        <img src="https://img.shields.io/badge/Netlify-333333?logo=netlify" alt="" />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 py-12'>

                <a href="https://rad-daffodil-39264b.netlify.app/" target='_blank' rel="noopener noreferrer">
                    <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                        <PiLinkSimpleBold />
                        Live Link
                    </button>
                </a>

                <a href="https://github.com/Arman3747/B2Bridge-client" target='_blank' rel="noopener noreferrer">
                    <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                        <FaGithub />
                        Github Client
                    </button>
                </a>

                <a href="https://github.com/Arman3747/B2Bridge-server" target='_blank' rel="noopener noreferrer">
                    <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex items-center justify-center gap-2'>
                        <FaGithub />
                        Github Server
                    </button>
                </a>
            </div>

            <div className="my-12 mx-4">
                <h1 className='text-3xl font-medium my-12'>Future Plans</h1>

                <ul class="list-disc">
                    <li>
                        <p className='text-lg text-justify'>B2Bridge will integrate secure payment gateways like Stripe, PayPal, or Razorpay for real-time transactions.</p>
                    </li>
                    <li>
                        <p className='text-lg text-justify'>A built-in chat system will allow direct communication between buyers and sellers.</p>
                    </li>
                    <li>
                        <p className='text-lg text-justify'>A wishlist feature will let users save products for future reference.</p>
                    </li>
                    <li>
                        <p className='text-lg text-justify'>AI-powered recommendations will suggest relevant products to users based on their browsing and purchasing behavior.</p>
                    </li>
                </ul>
            </div>

            <div className=" bg-[#333333] text-[#fbf7f4] py-4">
                <div className='flex justify-center items-center gap-4 px-16'>
                    <div className='flex justify-between items-center gap-8'>
                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectBridge">./B2Bridge</NavLink>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectBridge;