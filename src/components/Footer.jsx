import React from 'react';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className="bg-[#333333] text-[#fbf7f4] py-4">
            <div className='flex justify-center items-center gap-4 px-16'>
                <div className='flex flex-col lg:flex-row justify-start gap-8'>
                    <NavLink className="text-xl cursor-pointer" to="/home#hero">
                    <span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#hero' ? "border-b-2 border-[#00df72]" : " "}`}>./home</span></NavLink>

                    <NavLink className="text-xl cursor-pointer" to="/home#about"><span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#about' ? "border-b-2 border-[#00df72]" : " "}`}>./about</span></NavLink>

                    <NavLink className="text-xl cursor-pointer" to="/home#skills"><span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#skills' ? "border-b-2 border-[#00df72]" : " "}`}>./skills</span></NavLink>

                    <NavLink className="text-xl cursor-pointer" to="/home#education"><span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#education' ? "border-b-2 border-[#00df72]" : " "}`}>./education</span></NavLink>

                    <NavLink className="text-xl cursor-pointer" to="/home#projects"><span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#projects' ? "border-b-2 border-[#00df72]" : " "}`}>./projects</span></NavLink>

                    <NavLink className="text-xl cursor-pointer" to="/home#contacts"><span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#contacts' ? "border-b-2 border-[#00df72]" : " "}`}>./contact</span></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;