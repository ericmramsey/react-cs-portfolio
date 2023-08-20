import React from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const TechForGood = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">

        <h3 className="flex gap-1 font-medium text-2lg font-titleFont">
            Software Engineer Intern 
            <span className="text-textTeal tracking-wide">
            Tech For Good Inc.
            </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            June 2021 - August 2021
        </p>
        <ul className="mt-6 flex flex-col gap-3 mb-20">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Designed, developed and installed software solutions
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Followed and learned more about the software development life- cycle, 
                from concept, detailed design, scoping, planning, implementation, 
                testing to documentation, and delivery.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Documented and demonstrated solutions by developing documentation, 
                flowcharts, layouts, diagrams, charts, and clear, commented code.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Completed the authorization and setup of company phones both for new hires and current 
                employees which required use and knowledge of company portal and protocols for data transfer.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Development Tools Used: Python, SQL, JavaScript, React, HTML, CSS.
            </li>
        </ul>
    </motion.div>
  )
}

export default TechForGood;
