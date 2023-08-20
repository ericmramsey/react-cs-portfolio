import React from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';;

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
                Imaged PC's to required company formats and Encrypted data using BitLocker, 
                as well as managing the transfer of employee data to requested/approved PC Upgrades.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Experience using Active Directory, CommandLine and utilized other IT Remote Tools 
                to successfully handle the responsibilities of a level one IT Technician.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Remotely installed Engineering software applications on client devices while managing 
                company license distribution accurately.
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
                Responsible for IT Helpdesk inbound calls and solving technical issues over the phone and 
                in person in a fast paced environment.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Managed PC issues and software issues on productions pc's effectively and in a timely manner 
                to ensure production schedules stayed accurate.
            </li>
            
        </ul>
    </motion.div>
  )
}

export default BorgWarner;
