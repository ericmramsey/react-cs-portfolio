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
            ROBOTIC PROCESS AUTOMATION ENGINEER INTERN
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
                Primary project during this internship was uChoose API application used to calculate and set member bonus 
                reward points based on established requirements set by the credit union board members.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Secondary responsibilities included strategizing, planning, documenting and developing automated technical 
                solutions or tasks to increase the efficiency of business operations and overall functionality of departments.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Required advanced efficiency in Object Oriented Programming (OOP), Python, PowerShell scripting, data analysis, 
                UML Diagram for process representation, algorithm implementation, use case testing, attention to detail, troubleshooting, 
                debugging, and the ability to communicate effectively with department leads.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Required the ability to meet strict deadlines, effectively manage confidential member data without loss or negative impact 
                on user experience, understanding of automation processes and software functionality. 
            </li>
        </ul>
    </motion.div>
  )
}

export default CFCU;
