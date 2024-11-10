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
                Developed and maintained legacy applications, while also designing and implementing new software solutions using Python. 
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
                Designed and developed Python simulations that assisted in analyzing performance of 
                firmware upgrade builds to mitigate potential issues or degradation prior to deploying to live test systems.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Performed data analysis and visualization using Python to assist in ensuring accurate performance of products 
                deployed at customer power grid locations.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Developed and executed test plans and regression testing determining if firmware upgrade release builds were 
                performing successfully, and if they impacted any other system components negatively.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Maintained responsibilities and remained efficient in a fast-paced startup environment using scrum methodology, 
                while staying current with new technologies, and programming practices.
            </li>
        </ul>
    </motion.div>
  )
}

export default Micatu;
