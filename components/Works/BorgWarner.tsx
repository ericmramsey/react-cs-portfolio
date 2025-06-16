import React from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const BorgWarner = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">
        
        <h3 className="flex gap-1 font-medium text-2lg font-titleFont">
            INFORMATION TECHNOLOGY CO-OP - 
            <span className="text-textTeal tracking-wide">
            BORGWARNER INC.
            </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            January 2022 - June 2023
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Delivered technical support to automation systems, implementation of software integration and installation on company machines to meet production and department requirements.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Assisted Business Applications department in company database migration project to the replacement service the organization required.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Utilized knowledge in technology-based tools such as Python, Command-Line, SQL, Active Directory, Data Structures, OOP, SQL Server RU Scorecard Management, Azure, Troubleshooting.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Effectively communicated with team and supported clients, Windows operating systems and applications.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Completed the configuration of new employee user profiles, company devices such as phones or PCs.
            </li>
        </ul>
    </motion.div>
  )
}

export default BorgWarner;
