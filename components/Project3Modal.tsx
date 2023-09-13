import React from 'react';
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { useState } from 'react';
import Project3Sum from './Project3Nav/Project3Sum';
import Project3Improve from './Project3Nav/Project3Improve';

const Project3Modal = ({visible, onClose} : {visible:any, onClose:any}) => {
    /*
    const handleOnClose = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
    };
    */
    const [project3Sum, setProject3Sum] = useState(true);
    const [project3Improve, setProject3Improve] = useState(false);

    const handleProject3Sum = () => {
        
        setProject3Sum(true);
        setProject3Improve(false);

    };
    const handleProject3Improve = () => {

        setProject3Sum(false);
        setProject3Improve(true);

    };
    if(!visible) { 
        return null;
    };

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        id="container2"
        //onClick={handleOnClose}
        className="fixed inset-0 p-4 z-20 
            bg-opacity-30 backdrop-blur-lg flex justify-center items-center"
    >
        <div className="bg-bodyColor fixed max-w-container h-5/6 bottom-9 rounded-lg max-w-screen-md
            overflow-x-hidden overflow-y-scroll border border-textDark scrollbar scrollbar-track-textDark/20 
            scrollbar-thumb-textDark/50"
        >
            <h3 className="sticky top-0 z-20 w-full shadow-lg bg-bodyColor flex flex-col text-right mx-auto">
                <button 
                    onClick={onClose}
                    className="text-2xl text-textLight cursor-pointer hover:text-textTeal m-2"
                >
                    <MdOutlineClose />
                </button>
                <span className="text-2xl font-bold mx-8">
                    NBA OKC Project
                </span><span className="text-textTeal text-2xl mx-8 mb-3"> 
                    Machine Learning 
                </span>
            </h3>
            <div className="w-full flex flex-col md:flex-row gap-8 shadow-md">
                <ul className="md:w-36 mt-32 mx-12 flex flex-col">
                    <li 
                    onClick={ handleProject3Sum }
                    className={`${project3Sum ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                        border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Overview
                    </li>
                    {/* 
                    <li 
                    onClick={ handleProject3Improve }
                    className={`${project3Improve ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                        border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Improvements
                    </li> 
                    */}
                </ul>
                {project3Sum && <Project3Sum />}
                {/*{project3Improve && <Project3Improve />} */}
            </div>
        </div>
    </motion.div>
  )
}

export default Project3Modal;
