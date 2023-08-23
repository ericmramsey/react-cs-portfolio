import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';
import GetDataFile from './ProjectDemoFiles/GetDataFile';
import ParseDataFile from './ProjectDemoFiles/ParseDataFile';
import PredictDataFile from './ProjectDemoFiles/PredictDataFile';

const ProjectDemo = () => {
    const [getDataFile, setGetDataFile] = useState(true);
    const [parseDataFile, setParseDataFile] = useState(false);
    const [predictDataFile, setPredictDataFile] = useState(false);

    const handleGetDataFile = () => {
        setGetDataFile(true);
        setParseDataFile(false);
        setPredictDataFile(false);
    }
    const handleParseDataFile = () => {
        setGetDataFile(false);
        setParseDataFile(true);
        setPredictDataFile(false);
    }
    const handlePredictataFile = () => {
        setGetDataFile(false);
        setParseDataFile(false);
        setPredictDataFile(true);
    }

    return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        >
            <div className="inline-block md:flex-row px-2 gap-2 mt-0 mb-16">
                <ul className="md:w-36 flex mb-2">
                    <li 
                    onClick={ handleGetDataFile }
                    className={`${getDataFile ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                        border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        get_data.ipynb
                    </li>
                    <li
                    onClick={ handleParseDataFile } 
                    className={`${parseDataFile ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                        border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        parse_data.ipynb
                    </li>
                    <li 
                    onClick={ handlePredictataFile }
                    className={`${predictDataFile ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                        border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        predict.ipynb
                    </li>
                </ul>
                {getDataFile && <GetDataFile />}
                {parseDataFile && <ParseDataFile />}
                {predictDataFile && <PredictDataFile />}
            </div>
    </motion.div>
  )
}

export default ProjectDemo;