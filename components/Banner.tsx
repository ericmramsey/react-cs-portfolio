import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import SectionTitle from './SectionTitle';

const Banner = () => {
  return (
    <section 
        id="home" 
        className="max-w-contentContainer mx-auto py-36 md1:py-10 flex flex-col
        gap-4 lg1:gap-8 md1:px-10 x1:px-4 mb-44 mt-0 justify-center items-center"
    >
    <motion.h3 
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 0 }}
        transition={{ duration:0.5, delay: 0.6 }}
        className="-mt-14 top-0 mb-14 text-lg font-titleFont tracking-wide text-textTeal">
            <SectionTitle title="Home" titleNum="0." />
    </motion.h3>
    <motion.h3 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration:0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textTeal mt-20">

        Hello, my name is
    </motion.h3>
    <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl lg1:text-6xl font-titleFont font-semibold flex flex-col justify-center items-center">
        Eric Ramsey.{" "}
        <span className="md:text-2xl text-textDark mt-2 lg1:mt-6 gap-10 sm:text-sm">
            Software Engineering | Data 
        </span> 
    </motion.h1>
    <motion.p className="text-base md:max-w-[710px] text-textDark font-medium flex flex-col"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        >
        <a href="#about">
            <span className="text-textTeal inline-flex relative cursor-pointer h-7
            overflow-x-hidden group">
                Learn More
                <span className="absolute w-full h-[1px] bg-textTeal left-0 bottom-1
                -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">
                </span>
            </span>
        </a>
    </motion.p>
    <motion.button
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont rounded-md text-textTeal tracking-wide hover:bg-hoverColor duration-300 mt-1">
    </motion.button>
    </section>
  )
}

export default Banner;
