import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const PredictDataFile = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full"
      >
        <h2 className="flex gap-1 font-medium text-2lg font-titleFont">
            <span className="text-sm font-medium text-textDark">
            </span>
        </h2>
        <p className="bg-slate-500 p-3 h-fit w-fit font-extrabold">
            {/* predict.html embed code */}
           <iframe src="https://ericmramsey.github.io/predict.html"
                    className=""
                    height={"530"}
                    width={"1000"}
           ></iframe>
        </p>
    </motion.div>
  )
}

export default PredictDataFile;
