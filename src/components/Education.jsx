import React from 'react';

const Education = ({ ref }) => {
    return (
        <div>
            <div className='my-12 px-2 lg:px-16'>
                <h1 ref={ref} id="education" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>Education</h1>

                <div className='mb-12'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-2xl font-bold'>Masters of Data Science</h3>
                        <h3 className='hidden lg:block text-2xl font-bold'>Mar 2019 - Nov 2021</h3>
                    </div>
                    <h4 className='text-lg lg:text-xl'>Western Sydney University, Sydney, Australia</h4>
                </div>

                <div className='mb-12'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-xl lg:text-2xl font-bold'>Bachelor of Science in <span className='lg:hidden'><br /></span> Computer Science and Engineering</h3>
                        <h3 className='hidden lg:block text-2xl font-bold'>Jul 2012 - Jun 2016</h3>
                    </div>
                    <h4 className='text-lg lg:text-xl'>Ahsanullah University of Science and Technology, Dhaka, Bangladesh</h4>
                </div>
            </div>
        </div>
    );
};

export default Education;