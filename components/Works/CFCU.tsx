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
            Robotic Process Automation Engineer Intern
            <span className="text-textTeal tracking-wide">
            CFCU Community Credit Union
            </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            December 2023 - Present
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Primary project during this internship was the enterprise application uChoose, secondary was the automated 
                teller system. This application was initiated shortly after my start date with the goal of developing and 
                engineering an automation software and platform for credit union member reward points based on an established 
                points system.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Responsible for strategizing, planning, documenting and developing automated solutions to increase the efficiency of business operation and user tasks.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Required advanced efficiency in Object Oriented Programming (OOP), Python, PowerShell scripting, data analysis, UML Diagram for process representation, 
                use case testing, attention to detail, troubleshooting, debugging, and the ability to communicate effectively with other department leads.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Required the ability to meet strict deadlines, effectively migrate confidential data without loss or negative impact on user information, understanding 
                of automation processes and software, and the ability to plan, develop, and execute projects throughout the development life cycle.
            </li>
        </ul>
    </motion.div>
  )
}

export default CFCU;
