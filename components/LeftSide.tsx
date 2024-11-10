import React, { useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiMusicbrainz } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineClose } from "react-icons/md";


const LeftSide = () => {
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4
    text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ericmramsey" target="_blank" rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-bodyColor border-solid border-2 border-textLight rounded-full inline-flex
            items-center justify-center hover:text-textTeal hover:border-textTeal cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
        >
            <SiGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/ericramsey/" target="_blank" rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-bodyColor border-solid border-2 border-textLight rounded-full inline-flex
            items-center justify-center hover:text-textTeal hover:border-textTeal cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
        >
            <FaLinkedinIn />
          </span>
        </a>
        <a href="https://leetcode.com/ericramsey/" target="_blank" rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-bodyColor border-solid border-2 border-textLight rounded-full inline-flex
            items-center justify-center hover:text-textTeal hover:border-textTeal cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
        >
            <SiLeetcode />
          </span>
        </a>
        <a href="mailto:eric.m.ramsey@outlook.com">
          <span className="w-10 h-10 text-x1 bg-bodyColor border-solid border-2 border-textLight rounded-full inline-flex
            items-center justify-center hover:text-textTeal hover:border-textTeal cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
          >
            <SiMinutemailer />
          </span>
        </a>
        <a href="https://music.apple.com/us/playlist/code/pl.u-V9D7modIkX6DX" 
          target="_blank" 
          rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-bodyColor border-solid border-2 border-textLight rounded-full inline-flex
            items-center justify-center hover:text-textTeal hover:border-textTeal cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
          >
            <SiMusicbrainz />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide;
