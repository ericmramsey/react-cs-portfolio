import React from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const Micatu = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">
        
        <h3 className="flex gap-1 font-medium text-2lg font-titleFont">
            SOFTWARE ENGINEER - 
            <span className="text-textTeal tracking-wide">
            MICATU INC.
            </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            April 2024 - Present
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Developed and maintained production applications in Python; contributed to the design and implementations of new software solutions.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Designed and developed simulations to evaluate firmware upgrade builds to prevent performance regressions.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Analyzed and visualized data from customer power grid sites to assess the deployed products performance and system accuracy with high voltage measurements.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Assisted in the design, development and testing of embedded firmware using C, and C++.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Executed test plans and regression testing to validate firmware performance, new feature implementations, and algorithm changes.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Worked with cross-functional teams in an Agile Scrum environment, quickly adapting to new technologies to meet evolving project needs.
            </li>
        </ul>
    </motion.div>
  )
}

export default Micatu;
