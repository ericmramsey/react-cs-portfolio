import React from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';

const CorningInc = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full">

        <h3 className="flex gap-1 font-medium text-2lg font-titleFont">
            Audio-Visual Technician II 
            <span className="text-textTeal tracking-wide">
            Corning Incorporated
            </span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            September 2018 - August 2021
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Preformed audio-visual technology installations and integrated 
                Crestron software with SIMPL+ programming, Biamp, AMX and ClearOne hardware.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Worked alongside a high performance team which required excellent communication 
                skills, the ability to prioritize tasks, multitask and remain efficient during high-pressure 
                situations Required knowledge of computer operating systems, audio-visual systems, various 
                software, hardware and having the ability to troubleshoot and repair systems when malfunctions occurred.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Supported clients and users with technological issues over the phone and in person. Often issues would
                involve executive support during high priority business meetings where issues would need to be resolved
                immediately.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textTeal mt-1">
                    <AiFillThunderbolt />
                </span>
                Managed and implemented preventative maintenance scheduling for all technology our team was responisble for 
                supporting. Decreased overall issues throughout facility by regularly testing the technology and hardware,
                identifying and resolving any imediate issue or possible issue that invloved faulty equipment.
            </li>
        </ul>
    </motion.div>
  )
}

export default CorningInc;
