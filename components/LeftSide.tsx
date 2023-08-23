import React, { useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiMusicbrainz } from "react-icons/si";
import { MdOutlineClose } from "react-icons/md";


const LeftSide = () => {

  const [showMusic, setShowMusic] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4
    text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ericmramsey" target="_blank" rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-Green cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
        >
            <AiFillGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/ericramsey/" target="_blank" rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-Green cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
        >
            <FaLinkedinIn />
          </span>
        </a>
        <a href="mailto:eric.m.ramsey@outlook.com">
          <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-Green cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
          >
            <SiMinutemailer />
          </span>
        </a>
        <a href="https://music.apple.com/us/playlist/code/pl.u-V9D7modIkX6DX" 
          target="_blank" 
          rel='opener noreferrer'>
          <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-Green cursor-pointer
            hover:-translate-y-2 transition-all duration-300"
          >
            <SiMusicbrainz />
          </span>
        </a>
        
        {/* Apple Music Playlist Modal */}
        {showMusic && (
            <div>
              {/* Apple Music Playlist Modal
                <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 
                    flex flex-col justify-center items-center font-titleFont">
                    <div className="bg-bodyColor py-3 px-3 mx-auto rounded-lg md:w-7/12 w-10/12 max-w-screen-md 
                        shadow-2xl relative mt-20">
                        <a onClick={() => setShowMusic(false)} className="text-3-xl text-textTeal cursor-pointer hover:text-black 
                            absolute top-4 right-4"
                        >
                          <MdOutlineClose />
                        </a>
                        <h3 className="flex flex-col text-2xl font-bold p-5"> 
                        Code<span className="text-textTeal text-2xl"> Apple Music Playlist </span>
                        </h3>
                        <div className="bg-textTeal w-5/12 h-1 m-0 mb-10"></div>
                        <div className="mx-auto rounded-lg shadow-xl md:w-11/12 md:max-h-fit w-10/12 max-w-screen-md
                              items-center">
                            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                                    height="525" 
                                    width="100%"
                                    loading="lazy"
                                    scrolling="yes"
                                    sandbox="allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                                    src="https://embed.music.apple.com/us/playlist/code/pl.u-V9D7modIkX6DX?theme=dark"
                                    
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                */}
            </div>
          )
        }
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide;
