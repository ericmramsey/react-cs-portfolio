import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const ParseDataFile = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full mb-6 mt-0"
      >
        <div className="md1:w-screen md1:-mx-0 flex flex-col overflow-hidden sm:w-3/4 mx-auto">
          <div className="max-w-contentContainer ">
            <iframe
              className="w-full font-extrabold"
              src="https://ericmramsey.github.io/parse_data.html"
              height={"480"}
              
            // width={"1200"}
            ></iframe>
          </div>
        </div>
          {/* parse_data.html embed code
          <h2 className="flex gap-1 font-medium text-2lg font-titleFont mb-0">
              <span className="text-sm font-medium text-textDark">
              </span>
          </h2>
          <p className="bg-slate-500 p-2 h-fit w-fit font-extrabold">
            <iframe src="https://ericmramsey.github.io/parse_data.html"
                      className=""
                      height={"530"}
                      width={"1200"}
            ></iframe>
          </p>  */}
    </motion.div>
  )
}

export default ParseDataFile;
