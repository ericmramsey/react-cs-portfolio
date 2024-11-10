import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillThunderbolt } from 'react-icons/ai';
import Image from 'next/image';
import backTest from '@/public/assets/images/backtest.png';
import test1 from '@/public/assets/images/test_01.png';
import test2 from '@/public/assets/images/test_02.png';

const ProjectSum = () => {
  return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            <div className="lg1:w-full lg1:py-32 flex flex-col gap-8 text-base">
                <div>
                    <ul>
                        <li className="flex gap-2 text-textLight mb-6 px-2 mt-0">
                            <span className="text-textTeal mt-1">
                                <AiFillThunderbolt />
                            </span>
                            <h2 className="flex flex-col font-medium text-lg gap-4">
                                Project Overview
                            </h2>
                            <span className="hidden md:inline-flex md:w-60 lg1:w-2/5 h-[.7px] bg-gray-700 ml-6 mt-3">
                            </span>
                        </li>
                        <div className="w-11/12 text-md font-bodyFont text-textDark text-left px-8 font-medium gap-4 mb-10">
                            <p>
                                One of my goals since I began studying <span className="text-textTeal">Computer Science</span> has been to implement a machine learning model with access to a large dataset to project the outcome of professional sports teams. The goal of this project was to use my knowledge of  
                                <span className="text-textTeal"> Python</span>, 
                                <span className="text-textTeal"> JupyterLab</span>, 
                                <span className="text-textTeal"> TypeScript</span>, 
                                <span className="text-textTeal"> Web Scrapping</span>, <span className="text-textTeal"> Machine Learning</span>, and 
                                <span className="text-textTeal"> Data Structures </span> to provide a accurate predictions of the final outcomes of professional 
                                sports, starting with the NBA. To accomplish this, I'd need to obtain statistical data of the last seven NBA seasons. 
                                After scrapping the required data from a legal domain, my next step would be to clean the data obtained and format numerically 
                                for machine learning implementation. This is due to requirements of a machine learning model's processing input and prediction 
                                outputs being numerical values. After the data was formatted to accepted ML formatting, the next step of the process would be to 
                                begin implement a machine learning model with the new dataframe and test parameters. The accuracy goal for the first version of 
                                this machine learning model was above 60% accuracy for predicted outcomes of historical NBA dataframe the last seven seasons.
                            </p>  
                        </div>
                        <li className="flex gap-2 text-textLight mb-7 px-2">
                            <span className="text-textTeal mt-1">
                                <AiFillThunderbolt />
                            </span>
                            <h2 className="flex flex-col font-medium text-lg gap-4">
                                Data Collection & Formatting
                            </h2>
                            <span className="hidden md:inline-flex md:w-60 lg1:w-2/5 h-[.7px] bg-gray-700 ml-6 mt-3">
                            </span>
                        </li>
                        <div className="w-11/12 text-md font-bodyFont text-textDark text-left px-8 font-medium gap-4 mb-8">
                            <p className="mb-5">
                                The process of obtaining large amounts of data from external domains would require a development and testing environment 
                                that could function efficiently while compiling the required files and programs. I decided to use JupyterLab to complete 
                                the requirements of the steps for providing a solution with this project. This project consists of 3 file programs with 
                                individual tasks to complete:
                            </p>
                            {/* get_data  */}
                            <li className="text-base flex gap-2 text-textDark mb-5 px-5">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <span className="font-medium text-textLight/95">
                                    get_data.ipynb:</span>
                                    <i>
                                        used to successfully execute web scrapping process for obtaining box scores and team standings for 2016-2022 NBA seasons. 
                                        Player statistics are also part of the collected data which can be used for adding test parameters and predictions for additional 
                                        projections (ex: player stat projections for upcoming game.)
                                    </i>
                            </li>
                            {/* parse_data  */}
                            <li className="text-base flex gap-2 text-textDark mb-5 px-5">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <span className="font-medium text-textLight/95">
                                    parse_data.ipynb:</span>
                                    <i>
                                        used to clean data and format numerically for machine learning implimentation. After results of training, adjust the model and dataframe 
                                        to improve accuracy.
                                    </i>
                            </li>
                            {/* predict  */}
                            <li className="text-base flex gap-2 text-textDark mb-16 px-5">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <span className="font-medium text-textLight/95">
                                    predict.ipynb:</span>
                                    <i>
                                        used to implement machine learning model and test the accuracy of the model's projections to determine areas of improvements or flaws in 
                                        the design logic.
                                    </i>
                            </li>
                        </div>
                        <li className="flex gap-2 text-textLight mb-8 px-2">
                            <span className="text-textTeal mt-1">
                                <AiFillThunderbolt />
                            </span>
                            <h2 className="flex flex-col font-medium text-lg gap-4">
                                Machine Learning Model
                            </h2>
                            <span className="hidden md:inline-flex md:w-60 lg1:w-2/5 h-[.7px] bg-gray-700 ml-6 mt-3">
                            </span>
                        </li>
                        <div className="w-11/12 text-md font-bodyFont text-textDark text-left px-8 font-medium gap-4 mb-10">
                            <p>
                                To implement and test the first version of this model, I used <span className="text-textTeal">Python</span> functions and 
                                libraries such as <span className="text-textTeal"> Pandas</span> for basic data visualization to verify correct data modifications, 
                                and <span className="text-textTeal">Scikit-Learn</span> for machine learning implementation, as well as testing the model's accuracy. 
                                This model is in very early stages, but can be considered a supervised machine learning model because of how the data and training processes 
                                are implemented. This model is given a known dataset, functions that determine important elements to be considered in decision making, and 
                                its prediction accuracy is based on known outcomes.
                            </p>  
                        </div>
                        <li className="flex gap-2 text-textLight mb-8 px-2">
                            <span className="text-textTeal mt-1">
                                <AiFillThunderbolt />
                            </span>
                            <h2 className="flex flex-col font-medium text-lg gap-4">
                                Training
                            </h2>
                            <span className="hidden md:inline-flex md:w-60 lg1:w-2/5 h-[.7px] bg-gray-700 ml-6 mt-3">
                            </span>
                        </li>
                        <div className="w-11/12 text-md font-bodyFont text-textDark text-left px-8 font-medium gap-4 mb-5">
                            <p className="">
                                To begin the initial test, the machine learning model was given access to the 2016-2017 NBA season data, statistics and boxscores. In addition 
                                to the season statistical data and standings, the model was given smaller sets of the data to reference and improve prediction accuracy. Using the 
                                function below I was able to start the first test of my models prediction accuracy of the final results for NBA games in the 2018 season.
                                
                            </p>
                            <Image
                                className="w-fit h-fit mx-auto mt-5 mb-20 object-contain border-2 border-textDark"
                                src={backTest}
                                alt="backtest"
                            />
                            {/* test_01 */}
                            <li className="flex gap-2 text-textLight mb-8">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <h2 className="flex font-medium text-lg gap-2">
                                    test_01
                                </h2>
                                <span className="hidden md:inline-flex md:w-60 lg1:w-2/5 h-[.7px] bg-gray-700 ml-6 mt-3">
                                </span>
                            </li>
                            <div className="flex grid-cols-2 w-fit font-bodyFont mb-24">
                                <p className="mt-5 mb-5 px-5">
                                        The terminal image to the right displays the game number <i>(sorted by season)</i>, the actual outcome or final result of the 
                                        game <i>(0=loss 1=win 2=(null) due to team not playing that week)</i>. I noticed that the model was predicting outcomes for 
                                        the null values, making the accuracy score inaccurate. After removing the null values from the dataframe, the next step was 
                                        to give more information to the model to increase accuracy. Considering real world factors like teams with lower odds winning, 
                                        or unexpected outcomes. Giving the model a smaller data set of a teams averages in last 10 games played would increase the 
                                        accuracy of the model meeting the target.
                                        <li className="flex items-center gap-2 font-medium mt-8 text-textLight">
                                            <span className="text-textTeal mt-1">
                                                <AiFillThunderbolt />
                                            </span>
                                                Accuracy Score:
                                            <p className="flex items-center text-textDark font-medium px-8">
                                                54.9%
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-2 font-medium mt-5 text-textLight">
                                            <span className="text-textTeal mt-1">
                                                <AiFillThunderbolt />
                                            </span>
                                                Errors:
                                            <p className="flex items-center text-textDark font-medium px-8">
                                                remove null values 
                                            </p>
                                        </li>
                                </p>
                                <Image
                                    className="w-3/6 h-fit top-10 items-center object-contain border-2 border-textDark"
                                    src={test1}
                                    alt="test_01"
                                />
                            </div>
                            {/* test_02 */}
                            <li className="text-base flex gap-2 text-textLight mb-6">
                                <span className="text-textTeal mt-1">
                                    <AiFillThunderbolt /> 
                                </span>
                                <h2 className="flex flex-col font-medium text-lg gap-4">
                                    test_02
                                </h2>
                                <span className="hidden md:inline-flex md:w-60 lg1:w-2/5 h-[.7px] bg-gray-700 ml-6 mt-3">
                                </span>
                            </li>
                            <div className="flex grid-cols-2 font-bodyFont mt-10">
                                <p className="mt-5 mb-5 tracking-wide px-5">
                                    The second test for the model required all null values to be removed, verified by the table output showing 11,071 
                                    rows of data (previously 12,496 rows). The model was also given smaller dataframe, which contained the 
                                    averages of each team's previous 10 games (past 10 games for each game being predicted). Combining the smaller dataframe 
                                    containing rolling averages with the original data frame did cause some issues during the second test. The test kept 
                                    outputting <i>1.0</i>, indicating that the model was 100% accurate. As great as this seems, I felt it was highly doubtful that
                                    accuracy score was a valid representation of the new implementations. I did some troubleshooting and found that the error 
                                    was caused by the merge process of the dataframe, which caused the ML model to have access to the information it was trying to predict.
                                    After resolving the errors in this process, I was able to get a valid accuracy score of 63.4%. To achieve the next accuracy
                                    goal of this model, additional information and statistics will be implemented to increase the knowledgebase of the model. I'll also be
                                    implementing additional test parameters and a data visualization dashboard that will be needed in future versions.
                                    <li className="flex items-center gap-2 font-medium mt-8 text-textLight">
                                        <span className="text-textTeal mt-1">
                                            <AiFillThunderbolt />
                                        </span>
                                            Accuracy Score:
                                        <p className="flex items-center text-textDark font-medium px-8">
                                            63.4%
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-2 font-medium mt-5 text-textLight">
                                        <span className="text-textTeal mt-1">
                                            <AiFillThunderbolt />
                                        </span>
                                            Next Accuracy Goal:
                                        <p className="flex items-center text-textDark font-medium px-8">
                                            80.0% 
                                        </p>
                                    </li>
                                </p>
                                <Image
                                    className="w-3/6 h-fit top-10 items-center object-contain border-2 border-textDark"
                                    src={test2}
                                    alt="test_02"
                                />   
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
    </motion.div>
  )
}

export default ProjectSum;
