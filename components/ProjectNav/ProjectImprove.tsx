import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const ProjectImprove = () => {
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
                            <p className="mb-5">
                                There a several improvements and feature updates I will implement to this model for increased
                                efficiency and improved navigation of the models projection. With the model tested and established
                                at an increased accuracy score, implementation of data visualization or UI navigation will help increase
                                the functionality of the application. 
                            </p>
                            <li className="text-base flex gap-2 text-textDark mt-8 mb-5 px-5">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <span className="font-medium text-textLight/95">
                                    Data Visualization Dashboard:</span>
                                    <i>
                                        This feature will be a project that would assist in searching through data and integrating 
                                        a UI for searchable outcomes and custom prediction requests.
                                    </i>
                            </li>
                            <li className="text-base flex gap-2 text-textDark mt-8 mb-5 px-5">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <span className="font-medium text-textLight/95">
                                    Data & Test Parameters:</span>
                                    <i className="mx-14 text-left w-full">
                                        additional data and test parameters will be required to improve the models accuracy. 
                                        Strengthening the knowledgebase of the model with information such as, if a key player is 
                                        injured or a player that is in game for "x" amount of minutes is considered a factor, will 
                                        increase the probability of an accurate prediction.
                                    </i>
                            </li>
                            <li className="text-base flex gap-2 text-textDark mt-8 mb-5 px-5">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <span className="font-medium text-textLight/95">
                                    Apply Additional Sports:</span>
                                    <i className="mx-14 text-left w-full">
                                        with a some modifications to the model, web scrapping, and data cleaning programs, additional sports
                                        could be analyzed for predictions and projected outcomes.
                                    </i>
                            </li> 
                        </div>
                    </ul>
                </div>
            </div>
    </motion.div>
  )
}

export default ProjectImprove
