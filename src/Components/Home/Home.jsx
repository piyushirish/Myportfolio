import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (

<div className="py-16 bg-gray-900">
<div className="container m-auto px-6 text-slate-400 md:px-12 xl:px-6">
    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
            <img
                src="/images/IMG_20250204_202615.jpg"
                alt="image"
                width={400}
                height={300}
            />
        </div>
        <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-emerald-400 font-bold md:text-4xl">
               Hi, I'm Piyush Pal!
            </h2>
            <p className="mt-6 text-slate-400">
            I'm a passionate Full-Stack Web Developer with experience in building scalable and high-performance applications. 
            I specialize in React, Next.js, Node.js, GraphQL, Prisma, and PostgreSQL, 
            creating seamless user experiences with robust backend architectures.
            </p>
            <p className="mt-4 text-slate-400">
            I love transforming ideas into reality through clean, efficient code and enjoy tackling complex problems in frontend and backend development. 
            Whether it's crafting responsive UI/UX or optimizing databases, I focus on delivering impactful digital solutions.
            </p>
            <p className="mt-4 text-slate-400">
            Beyond coding, I'm always exploring the latest web technologies, 
            contributing to open-source projects, and continuously improving my skills.
            </p>
        </div>
    </div>
</div>
</div>
    );
}


