import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
    return (
        <section className="h-screen py-24" id="contact">
            <div className="container mx-auto  mix-blend-lighten">
                <div className="flex lg:flex-row flex-col gap-x-14 pb-10">
                    <motion.div
                        animate={{
                            opacity: [0, 1, 0], // Fade in and fade out (repeats)
                            scale: [0.8, 1.1, 1], // Pop-in effect (small -> large -> normal)
                            rotate: [0, 360, 0], // Rotate 360 degrees, then back to 0
                        }}
                        transition={{
                            duration: 3, // Duration for one full cycle
                            ease: "easeInOut", // Smooth transition
                            repeat: Infinity, // Repeat the animation forever
                            repeatType: "loop", // Continuous loop
                            repeatDelay: 1, // Delay between the animation cycles (optional)
                        }}
                        className="flex justify-center items-center elements"
                    >
                        <img
                            src="https://karuppuchamy.sirv.com/Images/contacting.png"
                            className=" lg:w-[500px] w-[250px]"
                        ></img>
                    </motion.div>
                    <div className="flex flex-col gap-y-4 justify-center items-center">
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.4 }}
                            className="text-center py-5 px-0"
                        >
                            <h1 className="lg:text-4xl text-2xl font-bold tracking-wide  font-primary">
                                Connect With Me
                            </h1>
                        </motion.div>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col gap-y-8  items-start mb-8 ml-8 justify-center lg:w-[400px] w-[300px]">
                                <motion.div
                                    variants={fadeIn("left", 0.1)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 1 }}
                                    className="flex flex-row gap-x-6 items-center cursor-pointer"
                                >
                                    <a
                                        href="https://www.linkedin.com/in/guhan-k-75b658257/"
                                        target="_blank"
                                    >
                                        <img
                                            src="https://karuppuchamy.sirv.com/Images/icons8-linkedin-480.png"
                                            className="max-w-[40px] cursor-pointer"
                                        ></img>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/guhan-k-75b658257/"
                                        target="_blank"
                                    >
                                        <h1 className="font-semibold text-xl">
                                            Guhan K
                                        </h1>
                                    </a>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn("left", 0.4)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 1 }}
                                    className="flex flex-row gap-x-6 items-center cursor-pointer"
                                >
                                    <a
                                        href="https://github.com/Guhansamy"
                                        target="_blank"
                                    >
                                        <img
                                            src="https://karuppuchamy.sirv.com/Images/github%20(2).png"
                                            className="max-w-[50px] "
                                        ></img>
                                    </a>
                                    <a
                                        href="https://github.com/Guhansamy"
                                        target="_blank"
                                    >
                                        <h1 className="font-semibold text-xl">
                                            Guhansamy
                                        </h1>
                                    </a>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn("left", 0.6)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 1 }}
                                    className="flex flex-row gap-x-6 items-center cursor-pointer"
                                >
                                    <a
                                        href="mailto:guhan5936@gmail.com"
                                        target="_blank"
                                    >
                                        <img
                                            src="https://karuppuchamy.sirv.com/Images/Gmail_Logo_512px.png"
                                            className="max-w-[40px] "
                                        ></img>
                                    </a>
                                    <a
                                        href="mailto:guhan5936@gmail.com"
                                        target="_blank"
                                    >
                                        {" "}
                                        <h1 className="font-semibold text-xl">
                                            Guhan K
                                        </h1>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
