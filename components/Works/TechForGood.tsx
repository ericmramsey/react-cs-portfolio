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
                Main project for this internship was Mission UpLink. This primary goal of this project was to assist in providing 
                internet access to underdeveloped areas in countries that would benefit from this service. My team was tasked with 
                developing an interactive map display that would assist in identifying deployed devices for team and potential investors.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Required knowledge of Python, Pandas, GeoPy for the task of creating an interactive virtual map representing deployed Mission UpLink 
                devices on a global scale. For implementing the application to the company open source website, utilizing JavaScript, HTML, and CSS was used 
                to accomplish tasks set by the team lead for testing and deployment versions.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Experienced the development and engineering lifecycle of the project and application, from conception, architecture definition, detailed design, 
                scoping, planning, implementation, and testing. Also the integration and deployment testing of the application to be featured on the Tech For Good 
                open source website.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Contributed to project development documentation, flowcharts, layouts, diagrams and clean, commented code. Utilized Git and Github for remote repository 
                contributions and approvals of team lead requirements.
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
