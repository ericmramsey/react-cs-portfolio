import React from 'react';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai';
import { AiFillGithub } from "react-icons/ai";
import { SiPandas, SiPython } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiVercel } from 'react-icons/si'
import { SiVisualstudiocode } from 'react-icons/si';
import { SiJupyter } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiAnaconda } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import Image from 'next/image';
import { profileImg } from '@/public/assets';

const About = () => {
  return (
    <section 
        id="about"
        className="max-w-containerSmall mx-auto py-10 lg1:py-36 flex flex-col gap-8"
        >
        <SectionTitle title="About Me" titleNum="1." />
        <div className="flex flex-col lg1:flex-row gap-16">
            <div className="w-full lg1:w-2/3 text-base text-textDark font-medium flex
                    flex-col gap-4"
            >
                <p>
                    Before choosing to pursue this career path, I worked in the various audio-visual 
                    industries utilizing technology in professions like music recording engineering,
                    media and live television broadcasting, and supporting corporations science and 
                    technology facilities. When supporting the scientists and engineers at these facilities,
                    I was introduced to <span className="text-textTeal">Artificial Intelligence</span>, 
                    <span className="text-textTeal"> Data Science</span>, and 
                    <span className="text-textTeal"> Software Engineering</span>. This immidietly 
                    sparked my intrest in the field, and I quickly started to learn more about programming 
                    fundamentals in Python by researching and using online resources.
                </p>
                <p>
                    I'm currently studying <span className="text-textTeal">Computer Science </span> at 
                    <span className="text-textTeal"> Louisiana State University - Alexandrea</span>,
                    and will be graduating Spring 2024. While completing my CS degree, I've continued to 
                    gain professional experience and look for opportunities to improve my skillset or learn 
                    something new. I did this by seeking Co-Op and internship opportunities in the industry.
                </p>
                <p>
                    Here are some of the technologies that I've worked with or have experience using:
                </p>
            </div>
            <div className="w-full lg1:w-1/3 sm:w-full h-88 relative group sm:mb-16">
                <div className="absolute w-full h-88 -left-6 -top-6 rounded-lg">
                    <div className="w-full h-full relative z-20 flex pl-6 lg1:pl-0">
                        <Image 
                            className="rounded-lg h-full object-cover"
                            src={profileImg}
                            alt="profileImg"
                        />
                            <div className="lg1:inline-block absolute w-full h-full bg-textDark/20
                            rounded-md top-0 left-0 group-hover:backdrop-grayscale duration-300">
                            </div>
                    </div>
                </div>
                <div className="hidden lg1:inline-flex w-full h-full border-2 border-textTeal 
                    rounded-md top-0 left-0 group-hover:-translate-x-3 group-hover:-translate-y-6 
                    transition-transform duration-300">
                </div>
            </div>
        </div>
        {/* skills grid */}
        <div className="grid grid-cols-4 mt-0">
            {/* programming languages col */}
            <ul className="max-w-[450px] text-lg font-bodyFont mt-2">
                <h2 className="font-titleFont mb-5">
                    Languages
                </h2>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiPython />
                    </span>
                    Python
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <FaJava />
                    </span>
                    Java
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiJavascript />
                    </span>
                    JavaScript
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiTypescript />
                    </span>
                    TypeScript
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiHtml5 />
                    </span>
                    HTML/CSS
                </li>
            </ul>
            {/* frameworks */}
            <ul className="max-w-[450px] text-lg font-bodyFont mt-2 -mx-20">
                <h2 className="font-titleFont mb-5">
                    Frameworks
                </h2>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <FaReact />
                    </span>
                    React
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <TbBrandNextjs />
                    </span>
                    Next.js
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <FaNodeJs />
                    </span>
                    Node.js
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiTailwindcss />
                    </span>
                    Tailwind CSS
                </li>
            </ul>
            {/* data */}
            <ul className="max-w-[450px] text-lg font-bodyFont mt-2 -mx-36">
                <h2 className="font-titleFont mb-5">
                    Data
                </h2>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiPandas />
                    </span>
                    Pandas
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <GrMysql />
                    </span>
                    MySQL
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiPostgresql />
                    </span>
                    PostgreSQL
                </li>
            </ul>
            {/* Other */}
            <ul className="max-w-[450px] text-lg font-bodyFont mt-2 -mx-60">
                <h2 className="font-titleFont mb-5">
                    Other
                </h2>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiVisualstudiocode />
                    </span>
                    VS Code
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiJupyter />
                    </span>
                    JupyterLab
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiAnaconda />
                    </span>
                    Anaconda
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <BsGit />
                    </span>
                    Git
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <AiFillGithub />
                    </span>
                    Github
                </li>
                <li className="flex items-center gap-2 text-sm font-bodyFont py-2">
                    <span className="text-textTeal">
                        <SiVercel />
                    </span>
                    Vercel
                </li>
            </ul>
        </div>
    </section>
  );
};

export default About;
