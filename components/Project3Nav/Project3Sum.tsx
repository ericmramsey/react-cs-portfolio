import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';
import Image from 'next/image';

const Project3Sum = () => {
  return (
    <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            <div className=" lg1:w-full lg1:py-14 flex flex-col gap-8 text-base">
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
                            <div className="md1:w-screen md1:-mx-0 flex flex-col overflow-hidden sm:w-3/4 mx-auto">
                                <div className="max-w-contentContainer ">
                                    <iframe
                                    className="w-11/12 font-extrabold"
                                    src="https://ericmramsey.github.io/er_awards_project.html"
                                    height={"550"}
                                    loading="eager"
                                    // width={"1200"}
                                    ></iframe>
                                </div>
                            </div> 
                        </div>
                    </ul>
                </div>
            </div>
    </motion.div>
  )
}

export default Project3Sum;
