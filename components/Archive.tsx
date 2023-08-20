import React, { useState } from 'react';
import ArchiveCard from './ArchiveCard';
import {motion} from "framer-motion";

const Archive = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-20 mt-20">
        <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-titleFont font-semibold">
                More Projects
            </h2>
            <p className="text-md font-titleFont text-textTeal p-2">
                Archive
            </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 x1:grid=cols-3 gap-6 mt-0 lg1:p-10">
            {/* will be used for the next three project currently being worked on...

            <ArchiveCard 
                title="Project 4"
                descript=""
                listItem={["Python", "SQL", "React"]}
                link=""
            />
            <ArchiveCard 
                title="Project 5"
                descript=""
                listItem={["Python", "SQL", "React"]}
                link=""
            />
            <ArchiveCard 
                title="Project 6"
                descript=""
                listItem={["Python", "SQL", "React"]}
                link=""
            />
            */}
            <div className="absolute max-w-contentContainer inline-grid">
            </div>
            { showMore && (
                <>
                        <h3 className="absolute flex items-center mx-10 font-medium text-textLight">
                            <b>Coming Soon </b>. Earlier projects on Github profile.
                        </h3>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="blur-sm"
                        >
                            <ArchiveCard 
                                title={"Project 4"} 
                                descript={""} 
                                listItem={["Python", "SQL", "React"]}
                                link={""} 
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="blur-sm"
                        >
                            <ArchiveCard 
                                title={"Project 5"} 
                                descript={""} 
                                listItem={["Python", "SQL", "React"]}
                                link={""} 
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="blur-sm"
                        >
                            <ArchiveCard 
                                title={"Project 6"} 
                                descript={""} 
                                listItem={["Python", "SQL", "React"]}
                                link={""} 
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="blur-sm"
                        >
                            <ArchiveCard 
                                title={"Project 7"} 
                                descript={""} 
                                listItem={["Python", "SQL", "React"]}
                                link={""} 
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="blur-sm"
                        >
                            <ArchiveCard 
                                title={"Project 8"} 
                                descript={""} 
                                listItem={["Python", "SQL", "React"]}
                                link={""} 
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="blur-sm"
                        >
                            <ArchiveCard 
                                title={"Project 9"} 
                                descript={""} 
                                listItem={["Python", "SQL", "React"]}
                                link={""} 
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="blur-sm"
                        >
                            <ArchiveCard 
                                title={"Project 10"} 
                                descript={""} 
                                listItem={["Python", "SQL", "React"]}
                                link={""} 
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="blur-sm"
                        >
                            <ArchiveCard 
                                title={"Project 11"} 
                                descript={""} 
                                listItem={["Python", "SQL", "React"]}
                                link={""} 
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="blur-sm"
                        >
                            <ArchiveCard 
                                title={"Project 12"} 
                                descript={""} 
                                listItem={["Python", "SQL", "React"]}
                                link={""} 
                            />
                        </motion.div>
                </>
            )}
        </div>
        <div className="mt-5 flex items-center justify-center mb-48">
            {
                showMore ? <button 
                onClick={() => setShowMore(false)} 
                className="w-36 h-12 rounded-md text-textTeal text-[13px] border border-textTeal
                hover:bg-hoverColor duration-300">
                Show Less
            </button> : <button 
                onClick={() => setShowMore(true)} 
                className="w-36 h-12 rounded-md text-textTeal text-[13px] border border-textTeal
                hover:bg-hoverColor duration-300">
                Show More
            </button>
            }
        </div>
    </div>
  )
}

export default Archive;
