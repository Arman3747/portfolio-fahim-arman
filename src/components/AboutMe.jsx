import React from 'react';

const AboutMe = ({ ref }) => {
    return (
        <div className='my-12 px-2 lg:px-16'>

            <h1 ref={ref} id="about" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>About Me</h1>

            <p className='text-xl text-justify'>I’m a passionate Full Stack JavaScript Developer specializing in the MERN Stack, PERN Stack, and Next.js, focused on building scalable, responsive, and user-friendly web applications. I enjoy creating dynamic interfaces with React.js, Next.js, Redux Toolkit, Tailwind CSS, and shadcn/ui, while developing secure and high-performance backend systems using Node.js, Express.js, MongoDB, PostgreSQL, MySQL, and Redis.</p>
            <br />

            <p className='text-xl text-justify'>I work with modern technologies and tools including TypeScript, Prisma ORM, Mongoose, Zod, REST APIs, JWT Authentication, Passport.js, NextAuth.js, Firebase, React Hook Form, TanStack Query, and Stripe integration to build clean, maintainable, and production-ready applications.</p>
            <br />

            <p className='text-xl text-justify'>Alongside strong frontend and backend development skills, I have experience with Git, GitHub, Postman, Vite, Figma, Vercel, and Netlify for efficient development, collaboration, and deployment workflows. I’m always eager to learn new technologies, solve real-world problems, and build modern digital experiences with clean architecture and intuitive UI/UX.</p>
            <br />
            <p className='text-xl text-justify'>Passionate about building modern SaaS applications, I enjoy exploring new technologies and creating scalable solutions that deliver real-world impact and seamless user experiences.</p>

        </div>
    );
};

export default AboutMe;