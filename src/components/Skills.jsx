import React from "react";

const skills = [
    { name: "Next.js", image: "https://i.ibb.co/Gfz1Mgd8/nextjs.png" },
    { name: "React", image: "https://i.ibb.co/VYycSH4m/react.png" },
    {
        name: "TypeScript",
        image: "https://i.ibb.co/5xFFTfqq/type-Script.png",
    },
    {
        name: "JavaScript",
        image: "https://i.ibb.co/B5bBssz7/javacsript.png",
    },
    { name: "Node.js", image: "https://i.ibb.co/JFM8krnK/nodejs.png" },
    { name: "Express.js", image: "https://i.ibb.co/39NJrHsN/expressjs.png" },
    { name: "Redux", image: "https://i.ibb.co/JRKVkbdM/redux.png" },
    {
        name: "Tailwind CSS",
        image: "https://i.ibb.co/s9mr5SrN/tailwindcss.png",
    },
    { name: "shadcn/ui", image: "https://i.ibb.co/jP4LxVh3/shadcn-ui.png" },
    { name: "Prisma", image: "https://i.ibb.co/hRgLWPVg/prisma.png" },
    { name: "ReactHookForm", image: "https://i.ibb.co/S7rvP54h/react-hook-form.png" },
    { name: "Zod", image: "https://i.ibb.co/9938VvbZ/zod.png" },
    {
        name: "PostgreSQL",
        image: "https://i.ibb.co/608wkvZX/postgresql.png",
    },
    { name: "MongoDB", image: "https://i.ibb.co/JwBVXnwW/mongodb.png" },
    {
        name: "React Router",
        image: "https://i.ibb.co/KzqnXYLT/react-router.png",
    },
    { name: "NextAuth", image: "https://i.ibb.co/Rk2kSVLB/next-auth.png" },
    { name: "Redis", image: "https://i.ibb.co/VWMXw0Vr/redis.png" },
    { name: "Firebase", image: "https://i.ibb.co/ZzzsVN2s/firebase.png" },
    {
        name: "Mongoose",
        image: "https://i.ibb.co/ynQXg9vY/mongoosejs.png",
    },
    { name: "HTML", image: "https://i.ibb.co/RTYr3R8K/html.png" },
    { name: "CSS", image: "https://i.ibb.co/zVLbx2vd/css.png" },

    { name: "Figma", image: "https://i.ibb.co/JRR3rb4V/figma.png" },
    { name: "npm", image: "https://i.ibb.co/mF60r9SF/npm.png" },
    { name: "Postman", image: "https://i.ibb.co/NnNLkzNz/postman.png" },
    { name: "Git", image: "https://i.ibb.co/mFqQR63X/git.png" },
    { name: "Vercel", image: "https://i.ibb.co/Y7MGGTzL/vercel.png" },

];

const Skills = React.forwardRef(function Skills(props, ref) {
    return (
        <div className="my-24 px-2 lg:px-16">
            <h1
                ref={ref}
                id="skills"
                className="mb-12 scroll-mt-32 text-center text-5xl font-bold"
            >
                Skills
            </h1>

            <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        title={skill.name}
                        className="
        group flex min-w-0 flex-col items-center justify-center
        gap-3 rounded-2xl p-2
        transition-transform duration-300
        hover:-translate-y-1
        motion-reduce:transform-none motion-reduce:transition-none
      "
                    >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            loading="lazy"
                            className="
          aspect-square w-16 max-w-full object-contain p-2
          md:w-24 lg:w-28
          transition-transform duration-300
          group-hover:scale-110
          motion-reduce:transform-none motion-reduce:transition-none
        "
                        />

                        <span className="w-full break-words text-center text-[10px] font-semibold leading-tight sm:text-xs">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Skills;