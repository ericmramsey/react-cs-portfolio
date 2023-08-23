import React from 'react';
import { useState } from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import { projectImg1, projectImg2, projectImg3 } from '@/public/assets';
import { AiFillGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import Button from './Button';
import { motion } from "framer-motion";
import ProjectModal from './ProjectModal';
import Project2Modal from './Project2Modal';

const Projects = () => {

    const [showProjectModal, setShowProjectModal] = useState(false);
    const [showProject2Modal, setShowProject2Modal] = useState(false);

    const handleOnClose = () => setShowProjectModal(false);

   return (
    <section id="projects" 
             className="max-w-container mx-auto lg1:px-20 lg1:py-32 py-10 top-0 gap-8 mt-20"
    >
        <SectionTitle title="Projects" titleNum="3." />
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
            {/* Project 1 */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a className="w-full xl:w-1/2 h-auto relative group">
                        <div>
                            <Image 
                                //onClick={handleClick}
                                className="w-full h-full object-contain border-2 border-textDark"
                                src={projectImg1}
                                alt="project1"
                            />
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lg1:justify-between items-end text-left xl:-ml-5 z-10">
                        <p className="font-titleFont text-textTeal text-sm tracking-wide">
                            Project #1
                        </p>
                        <h3 className="flex flex-col text-2xl font-bold">Predictive Analytics - NBA Outcomes<span className="text-textTeal text-xl"> Machine Learning</span></h3>
                            <p className="bg-bodyColor font-bold text-sm md:text-base p-2 md:p-6 rounded-md">
                                To create this machine learning model I utilized my knowledge of 
                                <span className="text-textTeal"> Python</span>, 
                                <span className="text-textTeal"> JupyterLab</span>, 
                                <span className="text-textTeal"> TypeScript</span>, 
                                <span className="text-textTeal"> Web Scrapping</span>, <span className="text-textTeal"> Machine Learning</span>, and 
                                <span className="text-textTeal"> Data Structures </span> to successfully obtain creidble data, clean the obtained data, 
                                and test my model's accuracy. This is the first version of this model. I'll also be implimenting a UI, improve the model's 
                                prediction accuracy and add other professional sports to predict final outcomes for.
                            </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 
                        justify-between text-textDark ">
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">Python</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">JupyterLab</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">TypeScript</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-8 font-bodyFont md:text-base p-2 md:p-6 rounded-md -my-10 xl:-mr-16">
                    <a 
                        className="hover:text-textTeal duration-300 text-2xl"
                        href="https://github.com/ericmramsey/predictive-analytics"
                        target="_blank"
                        rel='opener noreferrer'
                        >
                        <AiFillGithub />
                    </a>
                    <a onClick={() => setShowProjectModal(true)} className="hover:text-textTeal duration-300 text-2xl">
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            {/* Project 2 */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-48">
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <a 
                        className="w-full xl:w-1/2 h-auto relative group"
                        href=""
                        target="_blank">
                        <div>
                            <Image className="w-full h-full object-contain border-2 border-textDark"
                            src={projectImg2}
                            alt="project2"/>
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lg1:justify-between items-end text-right xl:-ml-16 z-10">
                        <div className="font-titleFont text-textTeal text-sm tracking-wide">
                            Project #2
                        </div>
                        <h3 className="flex flex-col text-2xl font-bold">CS Portfolio Website</h3>
                        <p className="bg-bodyColor text-sm md:text-base p-2 xl:-mr-5 md:p-6 rounded-md">
                        I created this website using
                        <span className="text-textTeal"> React</span>,
                        <span className="text-textTeal"> Next.js</span>, 
                        <span className="text-textTeal"> JavaScript</span>,
                        <span className="text-textTeal"> Tailwind CSS</span>, 
                        <span className="text-textTeal"> HTML</span>, and
                        <span className="text-textTeal"> Vercel</span>. 
                        I created this website to host projects focused in 
                        Machine Learning, Data, and Software Engineering. In addition to having a platform to host my work and 
                        skillset on, I wanted to gain knowledge and experience using these tools to have the ability to create 
                        applications integrated with my other work.
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 
                        justify-between text-textDark ">
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">React</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">Tailwind CSS</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">Next.js</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">Vercel</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">JavaScript</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">CSS</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">HTML</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-8 font-bodyFont md:text-base p-2 md:p-6 rounded-md -my-10 xl:-mr-16">
                    <a 
                        className="hover:text-textTeal duration-300 text-2xl"
                        href="https://github.com/ericmramsey/react-cs-portfolio"
                        target="_blank"
                        rel='opener noreferrer'
                        >
                        <AiFillGithub />
                    </a>
                    <a onClick={() => setShowProject2Modal(true)} className="hover:text-textTeal duration-300 text-2xl">
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            {/* Project 3 
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-52 mb-20">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a 
                        className="w-full xl:w-1/2 h-auto relative group"
                        href=""
                        target="_blank">
                        <div>
                            <Image className="w-full h-full object-contain border-2 border-textDark"
                            src={projectImg3}
                            alt="project3"/>
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lg1:justify-between items-end text-right xl:-ml-16 z-10">
                        <p className="font-titleFont text-textTeal text-sm tracking-wide">
                            Project #3
                        </p>
                        <h3 className="text-2xl font-bold">React Admin Dashboard</h3>
                        <p className="bg-bodyColor text-sm md:text-base p-2 md:p-6 rounded-md">
                        React Admin Dashboard application that I created to mangage this portfolio, which I also created. I created 
                        this Admin Dashboard application using <span className="text-textTeal">React</span>, 
                        <span className="text-textTeal"> Material UI</span>, 
                        <span className="text-textTeal"> Nivo Charts</span>, <span className="text-textTeal">Formik</span>, 
                        <span className="text-textTeal"> Yup</span>, <span className="text-textTeal">FullCalendar</span>, and 
                        <span className="text-textTeal"> Data Grid</span>. This application consists of Light and Dark Mode, 4 different 
                        Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 
                        justify-between text-textDark ">
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">React</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">Next.js</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">JavaScript</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">CSS</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">HTML</li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                            <a 
                                className="hover:text-textTeal duration-300"
                                href="https://github.com/ericmramsey"
                                target="_blank"
                                rel='opener noreferrer'
                                >
                                <AiFillGithub />
                            </a>
                            <a 
                                className="hover:text-textTeal duration-300"
                                href=""
                                target="_blank"
                                >
                                <RxOpenInNewWindow />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </div>
        <ProjectModal onClose={handleOnClose} visible={showProjectModal} />
        <Project2Modal onClose={handleOnClose} visible={showProject2Modal}  />
    </section>
  )
}

export default Projects;
