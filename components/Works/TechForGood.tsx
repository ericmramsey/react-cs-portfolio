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
            SOFTWARE ENGINEER INTERN - 
            <span className="text-textTeal tracking-wide">
            TECH FOR GOOD INC.
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
                Main Project for this internship was Mission UpLink. The goal of this project was to assist in providing internet access to underdeveloped 
                areas in countries that would benefit from this service. My team was tasked with developing an interactive map interface that would assist in 
                identifying deploy UpLink hardware devices for the organization and reference for potential investors.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Required knowledge of Python, Pandas, GeoPy for the task of creating an interactive virtual map representing deployed Mission UpLink Devices 
                on a global scale.  For implementing application to the company open-source website, required efficiency in tools such as React, JavaScript, HTML 
                and CSS to accomplish tasks set by the team lead for testing and deployment versions.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Experienced the software application development and engineering lifecycle of the project, from planning phase, architecture definition, detailed design, 
                scoping, implementation, testing, and maintenance stages. Engineering responsibilities also included the integration, deployment testing, and presentation 
                of the application to be featured on the company open-source website.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Contributed to project development documentation, flowcharts, layouts, diagrams and contributed clean commented code. Utilized Git and GitHub for remote 
                repository contributions and approvals of team lead requirements.
            </li>
        </ul>
    </motion.div>
  )
}

export default TechForGood;
