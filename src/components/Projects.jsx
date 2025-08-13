import React from 'react';

import ProjectsOne from './ProjectsOne';
import ProjectsTwo from './ProjectsTwo';
import ProjectThree from './ProjectThree';


const Projects = ({ ref }) => {
    return (
        <div>
            <div className='my-12 px-2 lg:px-16'>

                <h1 ref={ref} id="projects" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>Projects</h1>

                <ProjectThree></ProjectThree>
                <ProjectsOne></ProjectsOne>
                <ProjectsTwo></ProjectsTwo>
                
            </div>
        </div>
    );
};

export default Projects;