import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const PredictDataFile = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full mb-6 mt-0"
      >
        <div className="md1:w-screen md1:-mx-0 flex flex-col overflow-hidden sm:w-3/4 mx-auto">
          <div className="max-w-contentContainer">
            <iframe
              className="w-full font-extrabold"
              src="https://ericmramsey.github.io/predict.html"
              height={"480"}
              loading="eager"
             // width={"1200"}
            ></iframe>
          </div>
        </div>
        {/* predict.html embed code
        <h2 className="flex gap-1 font-medium text-2lg font-titleFont">
            <span className="text-sm font-medium text-textDark">
            </span>
        </h2>
        <div className="bg-slate-500 p-2 h-full w-full overflow-hidden 
          sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto font-extrabold"
          
          >
           <iframe src="https://ericmramsey.github.io/predict.html"
                    className=""
                    //height={"530"}
                    //width={"1200"}
                    allowFullScreen
           ></iframe>
        </div>
        */}
    </motion.div>
  )
}

export default PredictDataFile;
