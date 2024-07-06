import React from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const Education = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">
        {/* Louisiana State University */}
        <h3 className="flex gap-1 font-medium text-2lg font-titleFont">
            COMPUTER SCIENCE B.S. 
            <span className="text-textTeal tracking-wide">
            LOUISIANA STATE UNIVERSITY
            </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            2023 - 2024
        </p>
        <p className="text-md mt-3 font-medium text-textTeal">
            Relevant Coursework<span className="text-sm mt-3 font-medium text-textDark">:</span>
        </p>
        <ul className="mt-3 mx-5 grid grid-cols-2 gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Computer Programming
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Cybersecurity
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Computer Organization & Design
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Database Systems
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Data Structures & Algorithms
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Discrete Mathematics
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Operating Systems
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Software Development
            </li>
        </ul>
        {/* Finger Lakes Community College */}
        <h3 className="mt-10 flex gap-1 font-medium text-2lg font-titleFont">
            COMPUTER SCIENCE A.S. 
            <span className="text-textTeal tracking-wide">
            FINGER LAKES COMMUNITY COLLEGE
            </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            2020 - 2022
        </p>
        <p className="text-md mt-3 font-medium text-textTeal">
            Relevant Coursework<span className="text-sm mt-3 font-medium text-textDark">:</span>
        </p>
        <ul className="mt-3 mx-5 grid grid-cols-2 gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Computer Architecture
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Computer Science Portal
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Data Structures
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Introduction To Programming
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Object Oriented Software Development
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Principles of Information Security
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Networking Technologies
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Technical Ethics
            </li>
        </ul>
    </motion.div>
  )
}

export default Education;
