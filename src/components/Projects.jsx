import React from 'react';

import HomeProjectOne from './HomeProjectOne';
import HomeProjectThree from './HomeProjectThree';
import { Link } from 'react-router';
import { FaCode } from "react-icons/fa6";
import HomeProjectSix from './HomeProjectSix';
import HomeProjectFive from './HomeProjectFive';

const Projects = ({ ref }) => {
    return (
        <div>
            <div className='my-12 px-2 lg:px-16'>

                <h1 ref={ref} id="projects" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>Projects</h1>

                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <HomeProjectSix></HomeProjectSix>
                    <HomeProjectThree></HomeProjectThree>
                    <HomeProjectOne></HomeProjectOne>
                    <HomeProjectFive></HomeProjectFive>
                </div>

                <br />
                <br />
                <br />

                <div >
                    <Link to="/allProjects" className='flex justify-center items-center'>
                        <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-1/2 cursor-pointer flex justify-center items-center gap-2'>
                            <FaCode />
                            All Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;