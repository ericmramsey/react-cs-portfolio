import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';
import Image from 'next/image';

const Project2Sum = () => {
  return (
    <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            <div className=" lg1:w-full lg1:py-32 flex flex-col gap-8 text-base">
                <div>
                    <ul>
                        <li className="flex gap-2 text-textLight mb-6 px-2 mt-0">
                            <span className="text-textTeal mt-1">
                                <AiFillThunderbolt />
                            </span>
                            <h2 className="flex flex-col font-medium text-lg gap-4">
                                Project Overview
                            </h2>
                            <span className="hidden md:inline-flex md:w-60 lg1:w-2/5 h-[.7px] bg-gray-700 ml-6 mt-3">
                            </span>
                        </li>
                        <div className="w-11/12 text-md font-bodyFont text-textDark text-left px-8 font-medium gap-4 mb-10">
                            <p>
                                The goal of this project was to create a dynamic computer science portfolio to showcase software Engineering,
                                data science, and machine learning projects I've completed. Instead of using online site builders, I wanted to 
                                develop my own using 
                                <span className="text-textTeal"> React</span>,
                                <span className="text-textTeal"> Next.js</span>, 
                                <span className="text-textTeal"> JavaScript</span>,
                                <span className="text-textTeal"> Tailwind CSS</span>, 
                                <span className="text-textTeal"> HTML</span>, 
                                <span className="text-textTeal"> Git</span>, and 
                                <span className="text-textTeal"> Vercel</span> for hosting the completed site. Prior to starting this project, 
                                I had very little experience with of web development so this was definitely the more challenging option to attempt. 
                            </p>  
                        </div>
                        <div className="w-11/12 text-md font-bodyFont text-textDark text-left px-8 font-medium gap-4 mb-10">
                            <p>
                                Having the knowledge and ability to apply the skillset I learned from developing my website using these tools, would 
                                allow me to apply the skillset I gained and create my own applications. This would also allow me to utilize other 
                                projects and programs I've built by integrating them into hostable React applications.

                            </p>  
                        </div>
                    </ul>
                </div>
            </div>
    </motion.div>
  )
}

export default Project2Sum;
