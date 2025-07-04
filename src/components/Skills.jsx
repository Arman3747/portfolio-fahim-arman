import React from 'react';
import Marquee from "react-fast-marquee";

const Skills = ({ref}) => {
    return (
        <div className='my-24 px-2 lg:px-16'>

            <h1 ref={ref} id="skills" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>Skills</h1>

            <Marquee className='mb-4 lg:mb-24'>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/RTYr3R8K/html.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/zVLbx2vd/css.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/s9mr5SrN/tailwindcss.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/csbNzZH/daisyui.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/zhRy1T49/bootstrap.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/mFqQR63X/git.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/mF60r9SF/npm.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/JRR3rb4V/figma.png" alt="" />
                </div>
            </Marquee>

            <Marquee direction="right">
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/B5bBssz7/javacsript.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/VYycSH4m/react.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/JFM8krnK/nodejs.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/39NJrHsN/expressjs.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/JwBVXnwW/mongodb.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/Gfz1Mgd8/nextjs.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 lg:mx-12 my-8 p-2 w-[64px] lg:w-[132px]' src="https://i.ibb.co/KzqnXYLT/react-router.png" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Skills;
