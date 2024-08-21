import React, { useState } from "react";
import SectionTitle from './SectionTitle';
import Micatu from "./Works/Micatu";
import CFCU from "./Works/CFCU";
import BorgWarner from './Works/BorgWarner';
import TechForGood from './Works/TechForGood';
import CorningInc from './Works/CorningInc';
import Education from "./Works/Education";
import Certifications from "./Works/Certifications";
import Link from "next/link";

const Experience = () => {
    const [workMicatu, setWorkMicatu] = useState(true);
    const [workCFCU, setWorkCFCU] = useState(false);
    const [workBorgWarner, setWorkBorgWarner] = useState(false);
    const [workTeachForGood, setWorkTechForGood] = useState(false);
    const [workCorningInc, setWorkCorningInc] = useState(false);
    const [workEducation, setWorkEducation] = useState(false);
    const [workCertifications, setWorkCertifications] = useState(false);
    
    const handleMicatu = () => {
      setWorkMicatu(true);
      setWorkCFCU(false);
      setWorkBorgWarner(false);
      setWorkTechForGood(false);
      setWorkCorningInc(false);
      setWorkEducation(false);
      setWorkCertifications(false);
    };
    const handleCFCU = () => {
      setWorkMicatu(false);
      setWorkCFCU(true);
      setWorkBorgWarner(false);
      setWorkTechForGood(false);
      setWorkCorningInc(false);
      setWorkEducation(false);
      setWorkCertifications(false);
    };
    const handleBorgWarner = () => {
      setWorkMicatu(false);
      setWorkCFCU(false);
      setWorkBorgWarner(true);
      setWorkTechForGood(false);
      setWorkCorningInc(false);
      setWorkEducation(false);
      setWorkCertifications(false);
    };
    const handleTechForGood = () => {
      setWorkMicatu(false);
      setWorkCFCU(false);
      setWorkBorgWarner(false);
      setWorkTechForGood(true);
      setWorkCorningInc(false);
      setWorkEducation(false);
      setWorkCertifications(false);
    };
    const handleCorningInc = () => {
      setWorkMicatu(false);
      setWorkCFCU(false);
      setWorkBorgWarner(false);
      setWorkTechForGood(false);
      setWorkCorningInc(true);
      setWorkEducation(false);
      setWorkCertifications(false);
    };
    const handleEducation = () => {
      setWorkMicatu(false);
      setWorkCFCU(false);
      setWorkBorgWarner(false);
      setWorkTechForGood(false);
      setWorkCorningInc(false);
      setWorkEducation(true);
      setWorkCertifications(false);
    };
    const handleCertifications = () => {
      setWorkMicatu(false);
      setWorkCFCU(false);
      setWorkBorgWarner(false);
      setWorkTechForGood(false);
      setWorkCorningInc(false);
      setWorkEducation(false);
      setWorkCertifications(true);
    };

  return (
    <section 
      id="experience"
      className="max-w-containerxs mx-auto py-44 lg1:py-36 px-4 mt-20 mb-60"
    >
      <SectionTitle title="Experience" titleNum="2." />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16 mb-20 sm:mb-0">
        <ul className="md:w-36 flex flex-col">
            <li 
              onClick={ handleMicatu }
              className={`${workMicatu ? "border-l-textTeal text-textTeal" : "border-l-gray-700 text-textDark"} 
                border-l-2 hover:bg-textTeal hover:text-textDark py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                MICATU INC.
            </li>
            <li 
              onClick={ handleCFCU }
              className={`${workCFCU ? "border-l-textTeal text-textTeal" : "border-l-gray-700 text-textDark"} 
                border-l-2 hover:bg-textTeal hover:text-textDark py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                CFCU
            </li>
            <li 
              onClick={ handleBorgWarner }
              className={`${workBorgWarner ? "border-l-textTeal text-textTeal" : "border-l-gray-700 text-textDark"} 
                border-l-2 hover:bg-textTeal hover:text-textDark py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                BORGWARNER INC.
            </li>
            <li
              onClick={ handleTechForGood } 
              className={`${workTeachForGood ? "border-l-textTeal text-textTeal" : "border-l-gray-700 text-textDark"} 
                border-l-2 hover:bg-textTeal hover:text-textDark py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                TECH FOR GOOD INC.
            </li>
            <li 
              onClick={ handleCorningInc }
              className={`${workCorningInc ? "border-l-textTeal text-textTeal" : "border-l-gray-700 text-textDark"} 
                border-l-2 hover:bg-textTeal hover:text-textDark py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                CORNING INCORPORATED
            </li>
            <li 
              onClick={ handleEducation }
              className={`${workEducation ? "border-l-textTeal text-textTeal" : "border-l-gray-700 text-textDark"} 
                border-l-2 hover:bg-textTeal hover:text-textDark py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                EDUCATION
            </li>
            <li 
              onClick={ handleCertifications }
              className={`${workCertifications ? "border-l-textTeal text-textTeal" : "border-l-gray-700 text-textDark"} 
                border-l-2 hover:bg-hoverColor hover:text-textDark py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                CERTIFICATIONS
            </li>
        </ul>
        {workMicatu && <Micatu />}
        {workCFCU && <CFCU />}
        {workBorgWarner && <BorgWarner />}
        {workTeachForGood && <TechForGood />}
        {workCorningInc && <CorningInc />}
        {workEducation && <Education />}
        {workCertifications && <Certifications />}
      </div>
    </section>
  )
};

export default Experience;
