import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const ProjectBridge = () => {

    const [openMenu, setOpenMenu] = useState(false);

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

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>User Registration & Login — Sign up via email or Google for quick access.</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>JWT Authentication — Secures private routes and user data with token-based access.</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>Add & Edit Products — Users can create, categorize, and manage their own product listings.</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>Category-Based Browsing — View products by category for organized shopping.</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>All Products Page — Displays the full inventory available for browsing or purchase.</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>Product Details Page — Shows in-depth information with a “Buy” option for each item.</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>Shopping Cart — Users can view and manage all selected items before purchase.</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>Responsive Navbar — Includes profile dropdown to display username and sign out.</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>Error Handling Page — Custom page shown for broken or invalid routes.</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg lg:text-xl font-medium'>Mobile-Friendly Design — Optimized for use on all devices for better accessibility.</div>
                </div>
            </div>

            <div>
                <h3 className='text-2xl lg:text-3xl font-semibold my-12'>Main Technology Stack - B2Bridge</h3>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='text-right text-lg lg:text-2xl col-span-1'>Frontend</div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
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

            <div className='grid grid-cols-3 gap-2 py-12'>

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
            </div>


            <div>
                <h1 className='text-3xl font-medium my-12'>Description</h1>
                <p className='text-lg text-justify'>
                    B2Bridge is a dynamic web application designed to simplify online product sales for users by offering a complete, user-friendly marketplace experience. From seamless product posting to secure user management and detailed browsing capabilities, B2Bridge provides everything individuals need to list, manage, and purchase items online with ease.
                </p>
                <br />

                <p className='text-lg text-justify'>
                    At its core, B2Bridge allows registered users to post products for sale directly through the platform. The "Add" page gives sellers the tools to upload product information, categorize items, and make their listings visible to others. Once posted, sellers retain full control over their listings and can edit them at any time.
                </p>
                <br />


                <p className='text-lg text-justify'>
                    User registration and login are straightforward, with the added convenience of Google account integration for quick sign-in. To enhance security and protect user data, B2Bridge implements JWT (JSON Web Token) authentication. This ensures that only authorized users can access private features, such as adding products, managing accounts, and viewing the cart.
                </p>
                <br />

                <p className='text-lg text-justify'>
                    Browsing the site is intuitive and visually organized. The homepage highlights the core features of the platform, including product categories, business management options, mobile usability, and a helpful FAQ section. The Category Page lets users explore products by type, while the All Products Page displays the full inventory available for purchase. Each product listing includes a “Product Details” button, offering more information and a “Buy” option for immediate purchase. The Cart Page collects all selected items, allowing users to review their order before checkout.
                </p>
                <br />

                <p className='text-lg text-justify'>
                    Navigation is streamlined with a responsive navbar, where users can hover over their profile icon to view their username and sign out easily. Error handling is also built in—if a user visits a broken or missing page, they're met with a custom error page for a smoother experience.
                </p>
                <br />

                <p className='text-lg text-justify'>
                    Designed with both functionality and user experience in mind, B2Bridge bridges the gap between sellers and buyers in a simple, secure, and scalable way. Whether you're listing a new product or shopping across categories, B2Bridge makes online selling effortless and accessible.
                </p>
                <br />
            </div>

            <div>
                <h1 className='text-3xl font-medium my-12'>Future Plans</h1>

                <p className='text-lg text-justify'>
                    To enhance user engagement and functionality, future plans for B2Bridge include integrating secure payment gateways like Stripe, PayPal, or Razorpay for real-time transactions. A built-in chat or messaging system will allow direct communication between buyers and sellers, improving trust and convenience. Introducing a wishlist or favorites feature will let users save products for future interest, increasing user retention. Multi-language support (i18n) will broaden accessibility for a global audience, while an email or in-app notification system will keep users informed about purchases, product updates, and important interactions in real time.
                </p>
                <br />
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