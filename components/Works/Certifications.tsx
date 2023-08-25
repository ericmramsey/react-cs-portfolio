import React from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const Certifications = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">

        <h3 className="flex gap-1 font-medium text-2lg font-titleFont">
            Professional
            <span className="text-textTeal tracking-wide">
            Certifications
            </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            Here of some professional certifications that I've obtained since starting this career change.
        </p>
        <ul className="mt-8 flex flex-col gap-8 sm:gap-7">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                <a href="https://courses.edx.org/certificates/85092d1e99f44491b3f330a56ddbadef"
                    target="_blank"
                    rel='opener noreferrer'
                    className=""
                >
                    <span className=" hover:text-textTeal cursor-pointer duration-300 nav-link">
                        Software Development Fundamentals
                    </span>
                </a>
                <span className="text-textTeal"> University of Pennsylvania</span>
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                <a className="">
                    <span className="hover:text-textTeal cursor-pointer duration-300 nav-link">
                        SQL Database Design & Development
                    </span>
                </a>
                <span className="text-textTeal"> Miles Technologies</span>
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                <a className="">
                    <span className="hover:text-textTeal cursor-pointer duration-300 nav-link">
                        Software Application & Web Development
                    </span>
                </a>
                <span className="text-textTeal "> Miles Technologies</span>
            </li>
        </ul>
    </motion.div>
  )
}

export default Certifications
