import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="hidden md1:inline-flex x1:hidden items-center justify-center w-full py-6 gap-4">
       <a href="https://github.com/ericmramsey" target="_blank" rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textTeal cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <AiFillGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/ericramsey/" target="_blank" rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textTeal cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <FaLinkedinIn />
          </span>
        </a>
        <a href="https://leetcode.com/ericramsey/" target="_blank" rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-Green cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
        >
            <SiLeetcode />
          </span>
        </a>
        <a href="mailto:eric.m.ramsey@outlook.com" rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textTeal cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <SiMinutemailer />
          </span>
        </a>
    </div>
  )
}

export default Footer;
