import React from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const CFCU = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">
        
        <h3 className="flex gap-1 font-medium text-2lg font-titleFont">
            ROBOTIC PROCESS AUTOMATION INTERN
            <span className="text-textTeal tracking-wide">
            CFCU COMMUNITY CREDIT UNION
            </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            December 2023 - April 2024
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Primary project during this internship was uChoose API application used to calculate and set member bonus reward points based on established requirements set by the credit union board members.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Designed automated solutions to improve efficiency and data management across departments.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Utilized Python, PowerShell, UML Diagrams, data analysis, testing, and Object-Oriented Programming concepts to provide accurate technical solutions.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Maintained data security of member information, met strict delivery timelines, and coordinated with stakeholders effectively.
            </li>
        </ul>
    </motion.div>
  )
}

export default CFCU;
