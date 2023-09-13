import React from 'react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section 
        id="contact"
        className="max-w-contentContainer mx-auto py-10 x1:py-32 flex flex-col gap-8 mb-44"
    >
    <SectionTitle title="Contact" titleNum="4."/>
        <div className="max-w-contentContainer mx-auto py-32 md1:py-10 flex flex-col
        gap-4 lg1:gap-8 md1:px-10 x1:px-4 mb-44 mt-16 justify-center items-center">
            <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
            <p className="max-w-[600px] text-center text-textDark">
                I'm currently seeking internship, Co-Op, or entry-level opportunities and I'm available 
                for full time employment. I'm interested in onsite, hybrid, or remote positions and have
                professional experience in multiple CS industries.
            </p>
            <a href="mailto:eric.m.ramsey@outlook.com">
                {" "}
                <button className="w-40 h-14 border border-textTeal mt-6 font-titleFont text-sm
                text-textTeal tracking-wider rounded-md hover:bg-hoverColor duration-300">
                    Contact Me
                </button>
            </a>
        </div>
    </section>
  )
}

export default Contact;
