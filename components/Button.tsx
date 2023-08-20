import React from 'react';
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { RxOpenInNewWindow } from "react-icons/rx";

const Button = ({}) => {
  return (
    <>
      <button 
        //onClick={handleClick}
        className="text-2xl flex gap-4"><RxOpenInNewWindow />
      </button>
    </>
  )
}

export default Button
