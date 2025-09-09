import React, { useEffect, useState } from "react";

import { Link, NavLink, useLocation } from 'react-router';
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const ProjectNextProduct = () => {

    const { pathname } = useLocation();
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='max-w-[1600px] mx-auto px-4'>
            {/* navbar  */}
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

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/allProjects">/allProjects</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectNextProduct">./NextProduct</NavLink>
                    </div>

                    <div>

                    </div>

                    <div className='flex flex-col lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                        {
                            openMenu ? <RiCloseLargeFill className='text-3xl lg:hidden' /> : <HiMenu className='text-3xl lg:hidden' />
                        }

                        <div className={`lg:hidden absolute flex flex-col justify-end duration-500 gap-2 bg-[#fbf7f4] rounded-md p-2 border border-gray-300 ${openMenu ? 'top-14 right-0' : '-top-35 right-0'}`}>

                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/allProjects">/allProjects</NavLink>
                            
                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectNextProduct">./NextProduct</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* header  */}
            <div className='my-12'>
                <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                    <span className='border-b-2 border-[#00df72]'>
                        NextProduct
                    </span>
                </h1>
                <p className='text-lg lg:text-2xl font-medium'>
                    NextProduct makes it easy for users to add products while allowing everyone to browse, view, and explore countless new items.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row  justify-between items-center gap-8'>
                <div className='flex-1 bg-white border-2 rounded-md'>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/tpy8hRDX/Next-Product-Home-001.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/23C7PL5D/Next-Product-002.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/nqKhHjpV/Next-Product-03.png" />
                        </div>
                    </Carousel>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-8'>
                        <span className='border-b-2 border-[#00df72]'>
                            Key Features of NextProduct
                        </span>
                    </h1>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Public Landing Page with Navbar, Hero, Product Highlights, and Footer.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Login with Google using NextAuth.js.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Public Product List page showing all products.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Product Details page with full product information.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Protected Add Product page for authenticated users to add new products.
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 py-4'>

                        <a href="https://nextproduct-sand.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <PiLinkSimpleBold />
                                Live Link
                            </button>
                        </a>

                        <a href="https://github.com/Arman3747/NextProduct" target='_blank' rel="noopener noreferrer">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <FaGithub />
                                Github
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='text-2xl lg:text-3xl font-semibold my-12'>
                    <span className='border-b-2 border-[#00df72]'>
                        Main Technology Stack - NextProduct
                    </span>
                </h3>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>

                    <div className='text-lg lg:text-2xl col-span-1 flex justify-end items-start lg:items-center'>
                        Frontend
                    </div>

                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>

                        <img src="https://img.shields.io/badge/HTML5-333333?logo=html5" alt="" />
                        <img src="https://img.shields.io/badge/CSS3-333333?logo=css" alt="" />
                        <img src="https://img.shields.io/badge/JavaScript-333333?logo=javascript" alt="" />
                        <img src="https://img.shields.io/badge/React-333333?logo=react" alt="" />
                        <img src="https://img.shields.io/badge/Tailwind_CSS-333333?logo=tailwindcss" alt="" />
                        <img src="https://img.shields.io/badge/Daisy_UI-333333?logo=daisyui" alt="" />
                        <img src="https://img.shields.io/badge/Next.js-333333?logo=nextdotjs" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Backend</div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/MongoDB-333333?logo=mongodb" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Authentication
                        <span className='hidden lg:inline-block'>& Security</span>
                    </div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/%20NextAuth.js-333333?logo=auth0" alt="" />
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
                    </div>
                </div>
            </div>

            <div className="my-12 mx-4">
                <h1 className='text-3xl font-medium my-12'>
                    <span className='border-b-2 border-[#00df72]'>
                        Challenges & Solutions
                    </span>
                </h1>

                <p className="text-lg text-justify">
                    Challenges included handling authentication, protecting routes, and managing product data securely. Solutions involved using NextAuth.js for login, middleware for route protection, and MongoDB integration for reliable product storage and retrieval.
                </p>
            </div>

            <div className="my-12 mx-4">
                <h1 className='text-3xl font-medium my-12'>
                    <span className='border-b-2 border-[#00df72]'>
                        Future Plans
                    </span>
                </h1>

                <p className="text-lg text-justify">
                    Future plans include adding product editing and deletion features, implementing user roles (admin/user), integrating payment gateways, enhancing UI with better design, and deploying the application with full CI/CD automation for scalability.
                </p>
            </div>

            <div className=" bg-[#333333] text-[#fbf7f4] py-4">
                <div className='flex justify-center items-center gap-4 px-16'>
                    <div className='flex justify-between items-center gap-8'>
                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/allProjects">/allProjects</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectNextProduct">./NextProduct</NavLink>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectNextProduct;