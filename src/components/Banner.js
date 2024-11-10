import React from "react";

import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

//motion

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
    return (
        <section
            className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
            id="home"
        >
            <div className="container mx-auto">
                <div className="lg:flex gap-x-6 ">
                    {/* text */}
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-[55px] font-bold leading-[0.8] lg:text-[80px] my-4"
                        >
                            Guhan <span>K</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-6 text-[36px] lg:text-[60px]
                                        font-secondary font-semibold uppercase leading-[1]"
                        >
                            <span className="mr-4 text-white">I am a </span>
                            <TypeAnimation
                                sequence={[
                                    "Developer",
                                    2000,
                                    "Problem Solver",
                                    2000,
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-8 max-w-lg mx-auto lg:mx-1"
                        >
                            I'm a CSE Student 🧑‍🎓 and like building websites .
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
                        >
                            <a
                                href="https://drive.google.com/file/d/1lQcdfbyF8j-gchOkc3Ti2GjVekdcYzoS/view?usp=drive_link"
                                target="_blank"
                            >
                                <button className="btn btn-sm">
                                    Resume Link
                                </button>
                            </a>

                            <span className="text-gradient btn-link">
                                <a
                                    href="https://drive.google.com/file/d/1lQcdfbyF8j-gchOkc3Ti2GjVekdcYzoS/view?usp=drive_link"
                                    target="_blank"
                                >
                                    My Portfolio
                                </a>
                            </span>
                        </motion.div>
                        {/*socials*/}
                        <motion.div
                            variants={fadeIn("up", 0.9)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="hidden lg:flex text-[20px] gap-x-6 max-w-max mx-auto
                            lg:mx-0 "
                        >
                            <a
                                href="https://github.com/Guhansamy"
                                target="_blank"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/guhan-k-75b658257/"
                                target="_blank"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:guhan5936@gmail.com"
                                target="_blank"
                            >
                                <FaMailBulk />
                            </a>
                        </motion.div>
                    </div>
                    {/* image */}
                    <motion.div
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex-1 lg:flex pl-8 lg:pl-1 justify-center items-center max-w-[380px] banner-element"
                    >
                        <div className="w-80 h-80 pt-3 lg:pt-0  rounded-full overflow-hidden shadow-white">
                            <img
                                src="https://karuppuchamy.sirv.com/Images/Guhan.png"
                                alt=""
                                className="w-full h-full mix-blend-lighten "
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
