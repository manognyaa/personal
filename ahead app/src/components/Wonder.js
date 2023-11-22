"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Lottie from 'lottie-react';
import think from '../../public/think.json';

const Wonder = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
        <section className="mt-16 mb-32 rounded-3xl bg-blue-100 w-[70%] p-10 mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, scale: 0.5 },
                }}
            >
                <h3 className="text-center text-gray-600 text-lg font-semibold">
                    Let your friends, family, and co-worker (anonymously) rate your social
                    skills
                </h3>
                <div className="flex justify-center items-center flex-wrap">
                    <h1 className="text-[2.4rem] font-bold text-center mt-4">
                        Ever wondered what others think of you?
                    </h1>
                    <div className="w-20 h-20"> 
                        <Lottie animationData={think} />
                    </div>
                </div>

            </motion.div>
            <div className="mt-8 flex justify-center relative">
                <div className="absolute top-[3rem] w-[650px] text-transparent border-t border-yellow-700 h-4 border-dashed">

                </div>
                <div className="flex justify-evenly w-[70rem] z-[10]">
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center">
                            <div className="">
                                <Image width={100} height={50} alt="" src="/1.png" />
                            </div>
                        </div>
                        <div className="text-center">
                            Answer questions on <br />
                            your skill.
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center">
                            <div className="">
                                <Image width={100} height={50} alt="" src="/2.png" />
                            </div>
                        </div>
                        <div className="text-center">
                            Let other anonymously answer <br />
                            question about you.
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center">
                            <div className="">
                                <Image width={100} height={100} alt="" src="/3.png" />
                            </div>
                        </div>
                        <div className="text-center">
                            Find you where others and <br />
                            you find the view same ways.
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center">
                <div className="mt-16 shadow bg-[#fff] rounded-xl w-[50rem] p-5 py-24 relative">
                    <div className="flex justify-between ">
                        <div className="h-4 w-4 rounded-full bg-violet-600 z-10 relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    staggerChildren: 0.2,
                                    delayChildren: 0.3,

                                }}
                                variants={{
                                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                                    hidden: { opacity: 0, scale: 0.5 },
                                }}
                            >
                                <div className="absolute text-white p-3 bg-violet-600 rounded-[8px] top-[-3rem] left-[-3rem]">
                                    You
                                </div>
                            </motion.div>
                        </div>
                        <div className="h-4 w-4 rounded-full bg-blue-400 z-10 relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                                    hidden: { opacity: 0.5, scale: 0.5 },
                                }}
                            >
                                <div className="absolute whitespace-nowrap text-white p-3 bg-blue-400 rounded top-[2rem] left-[50%]">
                                    Anonymous 1
                                </div>
                            </motion.div>
                        </div>
                        <div className="h-4 w-4 rounded-full bg-orange-400 z-10 relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                                    hidden: { opacity: 0.5, scale: 0.5 },
                                }}
                            >
                                <div className="absolute  whitespace-nowrap  text-white p-2 bg-orange-400 rounded top-[-3rem] left-[0.5rem]">
                                    Anonymous 2
                                </div>
                            </motion.div>
                        </div>
                        <div className="h-4 w-4 rounded-full bg-green-400 z-10 relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                                    hidden: { opacity: 0.5, scale: 0.5 },
                                }}
                            >
                                <div className="absolute  whitespace-nowrap   text-white p-3 bg-green-400 rounded  top-[2rem] left-[50%]">
                                    Anonymous 3
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="border-t border-yellow-700 h-1 absolute top-[50%]  w-[745px]"></div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Wonder;
