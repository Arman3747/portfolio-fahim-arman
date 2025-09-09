import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import HomeProjectThree from './HomeProjectThree';
import HomeProjectOne from './HomeProjectOne';
import HomeProjectTwo from './HomeProjectTwo';
import HomeProjectFour from './HomeProjectFour';

const AllProjects = () => {

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

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/allProjects">./allProjects</NavLink>
                    </div>

                    <div>

                    </div>

                    <div className='flex flex-col lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                        {
                            openMenu ? <RiCloseLargeFill className='text-3xl lg:hidden' /> : <HiMenu className='text-3xl lg:hidden' />
                        }

                        <div className={`lg:hidden absolute flex flex-col justify-end duration-500 gap-2 bg-[#fbf7f4] rounded-md p-2 border border-gray-300 ${openMenu ? 'top-14 right-0' : '-top-25 right-0'}`}>

                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/allProjects">./allProjects</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* header  */}
            <div className='my-12 px-2 lg:px-16'>
                <h1 className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>All Projects</h1>
            </div>
            
            {/* body  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 my-12'>
                <HomeProjectThree></HomeProjectThree>
                <HomeProjectOne></HomeProjectOne>
                <HomeProjectTwo></HomeProjectTwo>
                <HomeProjectFour></HomeProjectFour>
            </div>

            {/* footer  */}
            <div className=" bg-[#333333] text-[#fbf7f4] py-4">
                <div className='flex justify-center items-center gap-4 px-16'>
                    <div className='flex justify-between items-center gap-8'>
                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/allProjects">./allProjects</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;