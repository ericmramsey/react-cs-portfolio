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
import ProjectDemo from './ProjectNav/ProjectDemo';
import ProjectSum from './ProjectNav/ProjectSum';
import ProjectImprove from './ProjectNav/ProjectImprove';
import Project2Sum from './Project2Nav/Project2Sum';
import Project2Improve from './Project2Nav/Project2Improve';

const Projects = () => {

    const [showProject, setShowProject] = useState(false);
    const [projectDemo, setProjectDemo] = useState(false);
    const [projectSum, setProjectSum] = useState(true);
    const [projectImprove, setProjectImprove] = useState(false);

    const [showProject2, setShowProject2] = useState(false);
    const [project2Sum, setProject2Sum] = useState(true);
    const [project2Improve, setProject2Improve] = useState(false);

    const handleProjectDemo = () => {

        setProjectDemo(true);
        setProjectSum(false);
        setProjectImprove(false);

    };
    const handleProjectSum = () => {

        setProjectDemo(false);
        setProjectSum(true);
        setProjectImprove(false);

    };
    const handleProjectImprove = () => {

        setProjectDemo(false);
        setProjectSum(false);
        setProjectImprove(true);

    };
    const handleProject2Sum = () => {
        
        setProject2Sum(true);
        setProject2Improve(false);

    };
    const handleProject2Improve = () => {

        setProject2Sum(false);
        setProject2Improve(true);

    }


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
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lg1:justify-between items-end text-right xl:-ml-16 z-10">
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
                                and test my model's accuracy. This is the first version of this model. I'll also be implimenting a UI and 
                                additional professional sports to project final outcomes.
                            </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 
                        justify-between text-textDark ">
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">Python</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">JupyterLab</li>
                            <li className="hover:text-textTeal cursor-pointer duration-300 ">TypeScript</li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                            <a 
                                className="hover:text-textTeal duration-300"
                                href="https://github.com/ericmramsey/predictive-analytics"
                                target="_blank"
                                >
                                <AiFillGithub />
                            </a>
                            <a onClick={() => setShowProject(true)} className="hover:text-textTeal duration-300">
                                <Button />
                            </a>
                        </div>
                        {/* Show Project 1 Modal */}
                        {showProject && (
                                <div className="fixed inset-0 justify-center items-center w-screen h-screen bg-black/50 
                                    flex flex-col font-titleFont"
                                >
                                    <div className="w-11/12 max-w-screen-md h-screen bg-bodyColor
                                                    overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/50
                                                    flex flex-col mt-32 items-end"
                                    >
                                        <h3 className="w-full shadow-navbarShadow bg-bodyColor flex flex-col mx-auto">
                                            <span onClick={() => setShowProject(false)} 
                                                  className="text-2xl text-textTeal cursor-pointer hover:text-black m-2">
                                                   <MdOutlineClose />
                                            </span>
                                            <span className="text-2xl font-bold mx-8">
                                                NBA Outcome Predicitons
                                            </span><span className="text-textTeal text-2xl mx-8 mb-3"> 
                                                Machine Learning 
                                            </span>
                                        </h3>
                                        <div className="w-full flex flex-col md:flex-row gap-8 shadow-md">
                                            <ul className="md:w-36 mt-32 mx-12 flex flex-col">
                                                <li 
                                                onClick={ handleProjectSum }
                                                className={`${projectSum ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                                                    border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                                                    Overview
                                                </li>
                                                <li 
                                                onClick={ handleProjectDemo }
                                                className={`${projectDemo ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                                                    border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                                                    Project Files
                                                </li>
                                                <li 
                                                onClick={ handleProjectImprove }
                                                className={`${projectImprove ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                                                    border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                                                    Improvements
                                                </li>
                                            </ul>
                                            {projectSum && <ProjectSum />}
                                            {projectDemo && <ProjectDemo />}
                                            {projectImprove && <ProjectImprove />}
                                        </div>
                                    </div>
                                </div>
                              )
                            }
                    </div>
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
                        <p className="bg-bodyColor text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                        I created this website using
                        <span className="text-textTeal"> React </span>,
                        <span className="text-textTeal"> Next.js </span>, 
                        <span className="text-textTeal"> JavaScript </span>,
                        <span className="text-textTeal"> Tailwind CSS </span>, 
                        <span className="text-textTeal"> HTML </span>, and
                        <span className="text-textTeal"> Vercel</span>. I created this website to host projects focused in 
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
                        <div className="text-2xl flex gap-4">
                            <div className="text-2xl flex gap-4">
                                <a 
                                    className="hover:text-textTeal duration-300"
                                    href="https://github.com/ericmramsey/predictive-analytics"
                                    target="_blank"
                                    >
                                    <AiFillGithub />
                                </a>
                                <a onClick={() => setShowProject2(true)} className="hover:text-textTeal duration-300">
                                    <Button />
                                </a>
                            </div>
                            {/* Show Project 2 Modal */}
                            {showProject2 && (
                                        <div className="fixed inset-0 justify-center items-center w-screen h-screen bg-black/50 
                                            flex flex-col font-titleFont"
                                        >
                                            <div className="w-11/12 max-w-screen-md h-screen bg-bodyColor
                                                            overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/50
                                                            flex flex-col mt-32 items-end"
                                            >
                                                <h3 className="w-full shadow-navbarShadow bg-bodyColor flex flex-col mx-auto">
                                                    <span onClick={() => setShowProject2(false)} 
                                                            className="text-2xl text-textTeal cursor-pointer hover:text-black m-2">
                                                            <MdOutlineClose />
                                                    </span>
                                                    <span className="text-2xl font-bold mx-8">
                                                        CS Portfolio Website
                                                    </span><span className="text-textTeal text-2xl mx-8 mb-3"> 
                                                        React Application
                                                    </span>
                                                </h3>
                                                <div className="w-full flex flex-col md:flex-row gap-8 shadow-md">
                                                    <ul className="md:w-36 mt-32 mx-12 flex flex-col">
                                                        <li 
                                                        onClick={ handleProject2Sum }
                                                        className={`${project2Sum ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                                                            border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                                                            Overview
                                                        </li>
                                                        <li 
                                                        onClick={ handleProject2Improve }
                                                        className={`${project2Improve ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                                                            border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                                                            Improvements
                                                        </li>
                                                    </ul>
                                                    {project2Sum && <Project2Sum />}
                                                    {project2Improve && <Project2Improve />}
                                                </div>
                                            </div>
                                        </div>
                                  )
                                }
                        </div>
                    </div>
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
            </div>*/}
        </div>
    </section>
  )
}

export default Projects;
