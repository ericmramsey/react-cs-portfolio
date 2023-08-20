import React, { useState } from "react";
import SectionTitle from './SectionTitle';
import BorgWarner from './Works/BorgWarner';
import TechForGood from './Works/TechForGood';
import CorningInc from './Works/CorningInc';
import Link from "next/link";

const Experience = () => {
    const [workBorgWarner, setWorkBorgWarner] = useState(true);
    const [workTeachForGood, setWorkTechForGood] = useState(false);
    const [workCorningInc, setWorkCorningInc] = useState(false);
    
    const handleBorgWarner = () => {
      setWorkBorgWarner(true);
      setWorkTechForGood(false);
      setWorkCorningInc(false);
    };
    const handleTechForGood = () => {
      setWorkBorgWarner(false);
      setWorkTechForGood(true);
      setWorkCorningInc(false);
    };
    const handleCorningInc = () => {
      setWorkBorgWarner(false);
      setWorkTechForGood(false);
      setWorkCorningInc(true);
    };

  return (
    <section 
      id="experience"
      className="max-w-containerxs mx-auto py-44 lg1:py-32 px-4"
    >
      <SectionTitle title="Experience" titleNum="2." />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16 mb-20 sm:mb-0">
        <ul className="md:w-36 flex flex-col">
            <li 
              onClick={ handleBorgWarner }
              className={`${workBorgWarner ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                BorgWarner Inc.
            </li>
            <li
              onClick={ handleTechForGood } 
              className={`${workTeachForGood ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                Tech For Good Inc.
            </li>
            <li 
              onClick={ handleCorningInc }
              className={`${workCorningInc ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                Corning Incorporated
            </li>
        </ul>
        {workBorgWarner && <BorgWarner />}
        {workTeachForGood && <TechForGood />}
        {workCorningInc && <CorningInc />}
      </div>
    </section>
  )
};

export default Experience;
