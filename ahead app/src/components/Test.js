import React from "react";
import { motion } from "framer-motion";
import img from "../../public/sign2.png";
import Image from 'next/image';

const Test = () => {
    return (
        <section className="mt-20 flex flex-col gap-3 text-center p-8">
            <p className="text-center">We take Privacy seriously</p>
            <p className="font-bold text-3xl">Before you get started</p>
            <p className="text-xl font-normal">
                &quot;We Wont share your answers with anyone.
                <br /> (and wont tell you which friends said what about you).&quot;
            </p>
            <div className="flex flex-row  items-center justify-center">
                <p className="left-100">Made with Love...</p>
                <Image
                    src={img}
                    alt="Signature"
                    width={250} 
                    height={150} 
                />
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { y: "10%" },
                    visible: {
                        y: 0,
                        transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
                    },
                }}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { scale: 0.5, opacity: 0 },
                        visible: {
                            opacity: 1,
                            scale: [0, 0.25, 0.5, 0.8, 1.01, 1],
                            transition: { ease: "easeInOut", duration: 1 },
                        },
                    }}
                    style={{
                        width: "100%",
                        overflow: "hidden", 
                    }}
                    className="pt-3"
                >
                    <a href="https://selfawareness.ahead-app.com/" target="_blank" rel="noopener noreferrer">
                        <button className="rounded-3xl p-4 px-6 text-white bg-black">
                            Start Test
                        </button>
                    </a>

                </motion.div>
                <div className="text-sm mt-4">Take only 5 minutes</div>
            </motion.div>
        </section>
    );
};

export default Test;
