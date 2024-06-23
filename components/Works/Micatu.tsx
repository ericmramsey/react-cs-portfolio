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
            Software Engineer
            <span className="text-textTeal tracking-wide">
            Micatu Inc.
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
                Developer and Engineering experience using Python, C, C++, to provide solutions for multi-threaded firmware and systems, 
                as well as associated software and embedded firmware architectures. 
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Ability to implement analytical and mathematical functions into efficient and real time optimized code capable of sampling, 
                data acquisition, time domain, frequency and FFT analyses. 
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Required skills necessary for testing and troubleshooting of software and firmware in prototype to production systems and environments. 
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Developed new company applications to increase the efficiency of company departments, while also updating, refactoring, and maintaining 
                legacy applications while preserving the products functionality when deployed.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Ability to comprehend and contribute to complex systems containing combined electronics and photonics components as well as quickly learning innovative technologies. 
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Implement quality code with comprehensive software/firmware verification testing in an Agile environment which required adaptability, creativity, critical thinking, 
                and problem solving while meeting strict deadlines. 
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
