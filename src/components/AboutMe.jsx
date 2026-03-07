import React from 'react';

const AboutMe = ({ ref }) => {
    return (
        <div className='my-12 px-2 lg:px-16'>

            <h1 ref={ref} id="about" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>About Me</h1>

            <p className='text-xl text-justify'>I'm a passionate Full Stack Developer specializing in the MERN and PERN stack, focused on building scalable, responsive, and user-friendly web applications. I enjoy creating dynamic interfaces with React.js and Next.js, while developing robust backend systems using Node.js, Express.js, MongoDB, and PostgreSQL.</p>
            <br />

            <p className='text-xl text-justify'>I also work with modern tools like Prisma ORM for efficient database management and Redux for scalable state management in complex applications. My goal is to build clean, maintainable, and high-performance web solutions.</p>
            <br />

            <p className='text-xl text-justify'>Along with strong coding skills in HTML, CSS, Tailwind CSS, and modern JavaScript (ES6+), I focus on delivering intuitive UI/UX and well-structured applications. I deploy projects using Vercel, Netlify, and Firebase, and manage code professionally with Git and GitHub.</p>
            <br />

            <p className='text-xl text-justify'>I’m always eager to learn new technologies, collaborate with teams, and take on challenging projects that help me grow as a developer.</p>

        </div>
    );
};

export default AboutMe;