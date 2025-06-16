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
                Developed Mission UpLink application that was used to visualize deployed internet access hardware on a global map for potential investors and company strategic operations.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Used Python, Pandas, GeoPy, Pandas, React, JavaScript, HTML, and Tailwind CSS for full-stack development.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Participated in the entire SDLC from planning to testing, and open-source deployment.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Engineering responsibilities also included the integration, deployment testing, and presentation of the application to be featured on the company’s open-source website.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Contributed to project development documentation, flowcharts, layouts, diagrams and contributed clean commented code.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Utilized Git and GitHub for remote repository contributions and approvals of team lead requirements.
            </li>
        </ul>
    </motion.div>
  )
}

export default TechForGood;
