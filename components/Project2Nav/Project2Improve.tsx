import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const Project2Improve = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full"
    >
        <div className=" lg1:w-full lg1:py-32 flex flex-col gap-8 text-base">
                <div>
                    <ul>
                        <li className="flex gap-2 text-textLight mb-7 mt-0">
                            <span className="text-textTeal mt-1">
                                <AiFillThunderbolt />
                            </span>
                            <h2 className="flex flex-col font-medium text-lg gap-4">
                                Improvements & Updates
                            </h2>
                            <span className="hidden md:inline-flex md:w-60 lg1:w-2/5 h-[.7px] bg-gray-700 ml-6 mt-3">
                            </span>
                        </li>
                        <div className="w-11/12 text-md font-bodyFont text-textDark text-left px-8 font-medium gap-4 mb-8">
                            <p className="mb-10">
                                This is a project that I'll continuously update with more of my current projects that demonstrate 
                                my knowledge and capabilities in 
                                <span className="text-textTeal"> Software Engineering </span>, 
                                <span className="text-textTeal"> Data Science </span>, and
                                <span className="text-textTeal"> Machine Learning </span>. I'll also update professional experience, 
                                update site functionality and features.
                            </p>
                            <li className="text-base flex gap-2 text-textDark mt-8 mb-5 px-5">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <span className="font-medium text-textLight/95">
                                    Upload Additional Projects:</span>
                                    <i className="mx-1 text-left w-full">
                                        I currently have three additional projects that are close to being ready for deployment. Adding 
                                        additional projects will show a timeline of my progress throughout my career path. I already have 
                                        an archive section on this site that will be updated soon.
                                    </i>
                            </li>
                            <li className="text-base flex gap-2 text-textDark mt-8 mb-5 px-5">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <span className="font-medium text-textLight/95">
                                    Feature Updates:</span>
                                    <i className="mx-20 text-left w-full">
                                        Although this portfolio website project is deployed, I consider it a project with no end date. I plan on 
                                        using what I learn updating and maintaining this website for my professional website which I'll be making 
                                        once I've gained more professional work experience.
                                    </i>
                            </li>
                            <li className="text-base flex gap-2 text-textDark mt-8 mb-5 px-5">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <span className="font-medium text-textLight/95">
                                    Current Issues To Fix:</span>
                                    <i className="mx-14 text-left w-full">
                                        At this moment there are some minor errors in the site functionality and appearence mistakes that need to be fixed. 
                                        These are issues that I'll be fixing now that I'm aware of them post-deployment of this project. The site appearence 
                                        on smaller screens does need some adjustments as well.
                                    </i>
                            </li> 
                        </div>
                    </ul>
                </div>
            </div>
    </motion.div>
  )
}

export default Project2Improve;
