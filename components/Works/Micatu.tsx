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
                Developed and Engineered software and data solutions  using Python, C, C++, 
                for multi-threaded firmware systems and associated software or embedded firmware architecture. 
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Ability to implement analytical and mathematical functions into efficient software engineering 
                solutions capable of sampling, data acquisition, and ability to process high voltage or current readings.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Required skills necessary for testing and troubleshooting software, applications, and firmware implementations. 
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Developed new company applications that increased the efficiency of company departments while also updating, 
                refactoring, and maintaining legacy applications while preserving the products functionality when deployed.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Implemented high quality code by using comprehensive software/firmware verification testing in an Agile environment. 
                This required adaptability, creativity, critical thinking, and problem-solving skills to meet strict deadlines.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Code review with peer developers providing constructive feedback to ensure consistency and quality of code.
            </li>
        </ul>
    </motion.div>
  )
}

export default Micatu;
