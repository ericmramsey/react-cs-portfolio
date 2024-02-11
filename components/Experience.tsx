import React, { useState } from "react";
import SectionTitle from './SectionTitle';
import CFCU from "./Works/CFCU";
import BorgWarner from './Works/BorgWarner';
import TechForGood from './Works/TechForGood';
import CorningInc from './Works/CorningInc';
import Certifications from "./Works/Certifications";
import Link from "next/link";

const Experience = () => {
    const [workCFCU, setWorkCFCU] = useState(true);
    const [workBorgWarner, setWorkBorgWarner] = useState(false);
    const [workTeachForGood, setWorkTechForGood] = useState(false);
    const [workCorningInc, setWorkCorningInc] = useState(false);
    const [workCertifications, setWorkCertifications] = useState(false);
    
    const handleCFCU = () => {
      setWorkCFCU(true);
      setWorkBorgWarner(false);
      setWorkTechForGood(false);
      setWorkCorningInc(false);
      setWorkCertifications(false);
    };
    const handleBorgWarner = () => {
      setWorkCFCU(false);
      setWorkBorgWarner(true);
      setWorkTechForGood(false);
      setWorkCorningInc(false);
      setWorkCertifications(false);
    };
    const handleTechForGood = () => {
      setWorkCFCU(false);
      setWorkBorgWarner(false);
      setWorkTechForGood(true);
      setWorkCorningInc(false);
      setWorkCertifications(false);
    };
    const handleCorningInc = () => {
      setWorkCFCU(false);
      setWorkBorgWarner(false);
      setWorkTechForGood(false);
      setWorkCorningInc(true);
      setWorkCertifications(false);
    };
    const handleCertifications = () => {
      setWorkCFCU(false);
      setWorkBorgWarner(false);
      setWorkTechForGood(false);
      setWorkCorningInc(false);
      setWorkCertifications(true);
    }

  return (
    <section 
      id="experience"
      className="max-w-containerxs mx-auto py-44 lg1:py-36 px-4 mb-60"
    >
      <SectionTitle title="Experience" titleNum="2." />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16 mb-20 sm:mb-0">
        <ul className="md:w-36 flex flex-col">
            <li 
              onClick={ handleCFCU }
              className={`${workCFCU ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                CFCU
            </li>
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
            <li 
              onClick={ handleCertifications }
              className={`${workCertifications ? "border-l-textTeal text-textTeal" : "border-l-hoverColor text-textDark"} 
                border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                Certifications
            </li>
        </ul>
        {workCFCU && <CFCU />}
        {workBorgWarner && <BorgWarner />}
        {workTeachForGood && <TechForGood />}
        {workCorningInc && <CorningInc />}
        {workCertifications && <Certifications />}
      </div>
    </section>
  )
};

export default Experience;
