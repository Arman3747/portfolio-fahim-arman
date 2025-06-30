import React from 'react';
import { Link } from 'react-router';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Projects = ({ ref }) => {
    return (
        <div>
            <div className='my-12 px-2 lg:px-16'>

                <h1 ref={ref} id="projects" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>Projects</h1>

                <div className='flex flex-col lg:flex-row  justify-between items-center gap-8'>
                    <div className='flex-1 bg-white border-2 rounded-md'>
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                            <div>
                                <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/yFQ0fj9Y/btob01.png" />
                            </div>
                            <div>
                                <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/BHfxC82s/btob02.png" />
                            </div>
                            <div>
                                <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/yJPW5bS/btob03.png" />
                            </div>
                            <div>
                                <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/s9RjWSLm/btob04.png" />
                            </div>
                            <div>
                                <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/ycq86M8j/btob05.png" />
                            </div>
                        </Carousel>
                    </div>

                    <div className='flex-1'>
                        <h1 className='text-3xl font-semibold mb-2'>
                            <span className='border-b-2 border-[#00df72]'>
                                B2Bridge
                            </span>
                        </h1>
                        <p className='text-xl text-justify'>B2Bridge is a secure web app where users can register, log in, and post products for sale. It features category-based browsing, product detail pages, and a shopping cart. Users can sign in with Google, add or edit products, and manage listings easily. JWT ensures secure access, and a custom error page enhances the overall user experience.</p>
                        <br />

                        <div className='flex gap-2 mb-2'>
                            <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                            <div className='text-xl font-medium'>Seamless Product Posting and Management</div>
                        </div>

                        <div className='flex gap-2 mb-2'>
                            <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                            <div className='text-xl font-medium'>Category-Based Browsing with Detailed Product View</div>
                        </div>

                        <div className='flex gap-2 mb-2'>
                            <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                            <div className='text-xl font-medium'>Secure Authentication with Google and JWT</div>
                        </div>
                        <br />

                        <div className='grid grid-cols-4 place-items-center gap-4 mb-4'>
                            <img src="https://img.shields.io/badge/React-333333?logo=react" alt="" />

                            <img src="https://img.shields.io/badge/JavaScript-333333?logo=javascript" alt="" />

                            <img src="https://img.shields.io/badge/Node.js-333333?logo=nodedotjs" alt="" />

                            <img src="https://img.shields.io/badge/Express.js-333333?logo=express" alt="" />

                            <img src="https://img.shields.io/badge/MongoDB-333333?logo=mongodb" alt="" />

                            <img src="https://img.shields.io/badge/Tailwind_CSS-333333?logo=tailwindcss" alt="" />

                            <img src="https://img.shields.io/badge/Daisy_UI-333333?logo=daisyui" alt="" />

                            <img src="https://img.shields.io/badge/React_Router-333333?logo=reactrouter" alt="" />
                        </div>

                        <div className='grid grid-cols-4 gap-2'>

                            <a href="https://rad-daffodil-39264b.netlify.app/" target='_blank' rel="noopener noreferrer">
                                <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer'>
                                    Live
                                </button>
                            </a>

                            <a href="https://github.com/Arman3747/B2Bridge-client" target='_blank' rel="noopener noreferrer">
                                <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer'>
                                    Github Client
                                </button>
                            </a>

                            <a href="https://github.com/Arman3747/B2Bridge-server" target='_blank' rel="noopener noreferrer">
                                <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer'>
                                    Github Server
                                </button>
                            </a>

                            <Link to="/projectBridge">
                                <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer'>
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;