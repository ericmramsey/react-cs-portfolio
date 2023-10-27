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
            Information Technology Co-Op 
            <span className="text-textTeal tracking-wide">
            BorgWarner Inc.
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
                Responsible for assisting database management and migration project of 
                employee information to the new service the organization needed implemented. 
                Utilized Python and SQL knowledged to efficiently contribute to the team and project success.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Provided technical support, hardware and software integration solutions to meet the requirements 
                of the departments being supported.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Utilized knowledge of Python, Command-Line, Data Structures, and Object Oriented Programming to 
                provide efficient solutions for tasks such as transferring data to production machine upgrades.
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
                Remotely installed engineering software applications to client machines and communicated with 
                required departments regarding the management and distribution of software licenses to authorized users.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Completed the configuration of new hire user profiles, company devices, and allocated required access to 
                necessary department directories using Azure and Active Directory.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Assisted in SQL Server RU Scorecard management to ensure machines and devices operating on the organizations 
                network were compliant with security protocols and requirements.
            </li>
        </ul>
    </motion.div>
  )
}

export default BorgWarner;
