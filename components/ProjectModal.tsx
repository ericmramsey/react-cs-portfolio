import React from 'react';
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { useState } from 'react';
import ProjectDemo from './ProjectNav/ProjectDemo';
import ProjectSum from './ProjectNav/ProjectSum';
import ProjectImprove from './ProjectNav/ProjectImprove';

const ProjectModal = ({visible, onClose} : {visible:any, onClose:any}) => {
    /*
    const handleOnClose = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
    };
    */
    const [projectSum, setProjectSum] = useState(true);
    const [projectDemo, setProjectDemo] = useState(false);
    const [projectImprove, setProjectImprove] = useState(false);
    
    const handleProjectSum = () => {
        setProjectSum(true);
        setProjectDemo(false);
        setProjectImprove(false);

    };
    const handleProjectDemo = () => {
        setProjectSum(false);
        setProjectDemo(true);
        setProjectImprove(false);

    };

    const handleProjectImprove = () => {
        setProjectSum(false);
        setProjectDemo(false);
        setProjectImprove(true);

    };
    if(!visible) { 
        return null; 
    };

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        id="container"
        // onClick={handleOnClose}
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
    </motion.div>
  )
}

export default ProjectModal
