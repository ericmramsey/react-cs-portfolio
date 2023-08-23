import React from 'react';
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { useState } from 'react';
import Project2Sum from './Project2Nav/Project2Sum';
import Project2Improve from './Project2Nav/Project2Improve';

const Project2Modal = ({visible, onClose} : {visible:any, onClose:any}) => {
    const handleOnClose = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
    };
    if(!visible) return null;
    const [project2Sum, setProject2Sum] = useState(true);
    const [project2Improve, setProject2Improve] = useState(false);

    const handleProject2Sum = () => {
        
        setProject2Sum(true);
        setProject2Improve(false);

    };
    const handleProject2Improve = () => {

        setProject2Sum(false);
        setProject2Improve(true);

    }
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 p-4 z-20 
            bg-opacity-30 backdrop-blur-lg flex justify-center items-center"
    >
        <div className="bg-bodyColor fixed max-w-container h-5/6 bottom-9 rounded-lg max-w-screen-md
            overflow-x-hidden overflow-y-scroll border border-textDark scrollbar scrollbar-track-textDark/20 
            scrollbar-thumb-textDark/50"
        >
            <button 
                onClick={onClose}
                className="text-2xl text-textLight cursor-pointer hover:text-textTeal m-2"
            >
                <MdOutlineClose />
            </button>
            <h3 className="w-full shadow-lg bg-bodyColor flex flex-col text-right mx-auto">
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
    </motion.div>
  )
}

export default Project2Modal
