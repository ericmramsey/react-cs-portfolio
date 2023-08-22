import React, { useState } from "react";
import { useRef } from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
    const ref = useRef<string | any>("");
    const [showMenu, setShowMenu] = useState(false);
    const handleScroll =(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Enable section scroll when links clicked
        e.preventDefault();
        setShowMenu(false);
        const href = e.currentTarget.href;
        const targetID = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetID)
        elem?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        // Update the class name of the clicked link
        const links = document.querySelectorAll(".nav-link")
        links.forEach((link)=>{
            link.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
    };

    function handleClick(e:any) {
        if (e.target.contains(ref.current)) {
            // Obtain myRef.current && close when when link is clicked
            setShowMenu(false);
        }
    }

    return ( 
        <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
            <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
                <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:1}} 
                    transition={{duration:0.5}}>
                    <Image className="hidden w-16" src={logo} alt="logo" />
                </motion.div>
                <div className="hidden md1:inline-flex items-center gap-7">
                    <ul className="flex text-[15px] gap-7">
                        <Link 
                            className="flex items-center gap-1 font-medium text-textDark 
                            hover:text-textTeal cursor-pointer duration-300 nav-link" 
                            href="#home" passHref
                            onClick={handleScroll}
                        >
                        <motion.li 
                            initial={{ y: -10, opacity:0 }} 
                            animate={{ y: 0, opacity:1 }} 
                            transition={{ duration: 0.2 }}>
                            Home
                        </motion.li>
                        </Link>
                        <Link className="flex items-center gap-1 font-medium text-textDark 
                            hover:text-textTeal cursor-pointer duration-300 nav-link" 
                            href="#about" passHref
                            onClick={handleScroll}
                        >
                        <span className="text-textTeal"></span>
                        <motion.li 
                            initial={{ y: -10, opacity:0 }} 
                            animate={{ y: 0, opacity:1 }} 
                            transition={{ duration: 0.3 }}>
                            About
                        </motion.li>
                        </Link>
                        <Link className="flex items-center gap-1 font-medium text-textDark 
                            hover:text-textTeal cursor-pointer duration-300 nav-link" 
                            href="#experience" passHref
                            onClick={handleScroll}
                        >
                        <span className="text-textTeal"></span>
                        <motion.li 
                            initial={{ y: -10, opacity:0 }} 
                            animate={{ y: 0, opacity:1 }} 
                            transition={{ duration: 0.4 }}>
                            Experience
                        </motion.li>
                        </Link>
                        <Link className="flex items-center gap-1 font-medium text-textDark 
                            hover:text-textTeal cursor-pointer duration-300 nav-link" 
                            href="#projects" passHref
                            onClick={handleScroll}
                        >
                        <span className="text-textTeal"></span>
                        <motion.li 
                            initial={{ y: -10, opacity:0 }} 
                            animate={{ y: 0, opacity:1 }} 
                            transition={{ duration: 0.5 }}>
                            Projects
                        </motion.li>
                        </Link>
                        <Link className="flex items-center gap-1 font-medium text-textDark 
                            hover:text-textTeal cursor-pointer duration-300 nav-link" 
                            href="#contact" passHref
                            onClick={handleScroll}
                        >
                        <span className="text-textTeal"></span>
                        <motion.li 
                            initial={{ y: -10, opacity:0 }} 
                            animate={{ y: 0, opacity:1 }} 
                            transition={{ duration: 0.6 }}>
                            Contact
                        </motion.li>
                        </Link>
                    </ul>
                    <a href="/assets/EricRamsey_Resume.pdf" target="_blank">
                        <span className="text-textTeal"></span>
                        <motion.button
                        initial={{ y: -10, opacity:0 }} 
                        animate={{ y: 0, opacity:1 }} 
                        transition={{ duration: 0.7 }}
                        className="px-4 py-2 rounded-md text-textTeal text-[13px] border border-textTeal
                        hover:bg-hoverColor duration-300">
                        Resume
                        </motion.button>
                    </a>
                </div>
                {/* small menu for screens with lower deminsions */}
                <div 
                    onClick={() => setShowMenu(true)}
                    className="w-6 h-5 flex flex-col justify-between items-center md1:hidden 
                    text-4x1 text-textTeal cursor-pointer overflow-hidden group"
                >
                    <span className="w-full h-[2px] bg-textTeal inline-flex transform
                    group-hover:translate-x-2 transition-a11 ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textTeal inline-flex transform
                    translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textTeal inline-flex transform
                    translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
                </div>
                {showMenu && (
                    <div 
                        ref={(node) => (ref.current = node)}
                        onClick={handleClick}
                        className="absolute md1:hidden top-0 right-0 w-full h-screen bg-black 
                        bg-opacity-50 flex flex-col items-end"
                    >
                        <motion.div 
                            initial={{ x: 20, opacity: 1 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.1 }}
                            className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-bodyColor
                            flex-flex-col items-center px-4 py-10 relative"
                        >
                            <MdOutlineClose 
                                onClick={() => setShowMenu(false)}
                                className="text-3-xl text-textTeal cursor-pointer hover:text-black
                                absolute top-4 right-4"
                            />
                            <div className="flex flex-col items-center gap-7">
                                <ul className="flex flex-col text-base gap-7">
                                    <Link 
                                        className="flex items-center gap-1 font-medium text-textDark 
                                        hover:text-textTeal cursor-pointer duration-300 nav-link" 
                                        href="#home" passHref
                                        onClick={handleScroll}
                                    >
                                    <motion.li 
                                        initial={{ y: 20, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }} 
                                        transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}>
                                        Home
                                    </motion.li>
                                    </Link>
                                    <Link className="flex items-center gap-1 font-medium text-textDark 
                                        hover:text-textTeal cursor-pointer duration-300 nav-link" 
                                        href="#about" passHref
                                        onClick={handleScroll}
                                    >
                                    <span className="text-textTeal"></span>
                                    <motion.li 
                                        initial={{ y: 20, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }} 
                                        transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}>
                                        About
                                    </motion.li>
                                    </Link>
                                    <Link className="flex items-center gap-1 font-medium text-textDark 
                                        hover:text-textTeal cursor-pointer duration-300 nav-link" 
                                        href="#experience" passHref
                                        onClick={handleScroll}
                                    >
                                    <span className="text-textTeal"></span>
                                    <motion.li 
                                        initial={{ y: 20, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }} 
                                        transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}>
                                        Experience
                                    </motion.li>
                                    </Link>
                                    <Link className="flex items-center gap-1 font-medium text-textDark 
                                        hover:text-textTeal cursor-pointer duration-300 nav-link" 
                                        href="#projects" passHref
                                        onClick={handleScroll}
                                    >
                                    <span className="text-textTeal"></span>
                                    <motion.li 
                                        initial={{ y: 20, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }} 
                                        transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}>
                                        Projects
                                    </motion.li>
                                    </Link>
                                    <Link className="flex items-center gap-1 font-medium text-textDark 
                                        hover:text-textTeal cursor-pointer duration-300 nav-link" 
                                        href="#contact" passHref
                                        onClick={handleScroll}
                                    >
                                    <span className="text-textTeal"></span>
                                    <motion.li 
                                        initial={{ y: 20, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }} 
                                        transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}>
                                        Contact
                                    </motion.li>
                                    </Link>
                                </ul>
                                {/* Resume Button */}
                                <a href="/assets/EricRamsey_Resume.pdf" target="_blank" rel='opener noreferrer'>
                                    <span className="text-textTeal"></span>
                                    <motion.button
                                    initial={{ y: -10, opacity: 0 }} 
                                    animate={{ y: 0, opacity: 1 }} 
                                    transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
                                    className="px-4 py-2 rounded-md text-textTeal text-[13px] border border-textTeal
                                    hover:bg-hoverColor duration-300">
                                    Resume
                                    </motion.button>
                                </a>
                                {/* email - teal highlighted display */}
                                <div className="flex gap-4">
                                    <motion.a 
                                        initial={{ y: 20, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }} 
                                        transition={{ delay: 1, ease: "easeIn" }}
                                        href="https://github.com/ericmramsey" target="_blank" rel='opener noreferrer'>
                                        <span className="w-10 h-10 text-x1 bg-hoverColor border-[1px] rounded-full inline-flex
                                                items-center justify-center hover:border-textTeal hover:text-textTeal cursor-pointer
                                                hover:-translate-y-2 transition-all duration-300">
                                                <AiFillGithub />
                                            </span>
                                    </motion.a>
                                    <motion.a 
                                        initial={{ y: 20, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }} 
                                        transition={{ delay: 1, ease: "easeIn" }}
                                        href="https://www.linkedin.com/in/ericramsey/" target="_blank" rel='opener noreferrer'>
                                            <span className="w-10 h-10 text-x1 bg-hoverColor border-[1px] rounded-full inline-flex
                                                    items-center justify-center hover:border-textTeal hover:text-textTeal cursor-pointer
                                                    hover:-translate-y-2 transition-all duration-300">
                                                <FaLinkedinIn />
                                            </span>
                                    </motion.a>
                                    <motion.a 
                                        initial={{ y: 20, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }} 
                                        transition={{ delay: 1, ease: "easeIn" }}
                                        href="mailto:eric.m.ramsey@outlook.com">
                                        <span className="w-10 h-10 text-x1 bg-hoverColor border-[1px] rounded-full inline-flex
                                                items-center justify-center hover:border-textTeal hover:text-textTeal cursor-pointer
                                                hover:-translate-y-2 transition-all duration-300">
                                            <SiMinutemailer />
                                        </span>
                                    </motion.a>
                                </div>
                                <motion.a 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ delay: 1.2, ease: "easeIn" }}
                                    className="text-sm w-72 tracking-widest text-textTeal text-center mt-4"
                                    href="mailto:eric.m.ramsey@outlook.com">
                                    <p>eric.m.ramsey@outlook.com</p>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                  )
                }
            </div>
        </div>
    );
};

export default Navbar;
