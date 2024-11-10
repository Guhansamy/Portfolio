import React from "react";
//countup

// intersection observer hook

import { useInView } from "react-intersection-observer";

import { BsCalendar } from "react-icons/bs";

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    return (
        <section className="section lg:pt-32" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col  lg:flex-row lg:items-center lg:gap-x-20  h-screen">
                    <div className="lg:w-[500px] pl-5">
                        <div className="pb-3 font-primary font-bold text-3xl text-accent">
                            Experience
                        </div>
                        <div className="flex flex-col pb-2">
                            <div className=" flex flex-row gap-4 align-top text-red-300 font-tertiary">
                                <BsCalendar />
                                Apr 24 - Sept 24 Growbinar
                            </div>
                            <div className="flex flex-row font-secondary pl-7">
                                Developed a comprehensive session booking
                                backend using Django, PostgreSQL, and integrated
                                with Zoom for seamless meeting scheduling and
                                management.
                            </div>
                        </div>

                        <div className="flex flex-col pb-2">
                            <div className=" flex flex-row gap-4 align-top text-red-300 font-tertiary">
                                <BsCalendar />
                                04/2024 - 09/2024 Growbinar
                            </div>
                            <div className="flex flex-row font-secondary pl-7">
                                Developed a comprehensive session booking
                                backend using Django, PostgreSQL, and integrated
                                with Zoom.
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className=" flex flex-row gap-4 align-top text-red-300 font-tertiary">
                                <BsCalendar />
                                04/2024 - 09/2024 Growbinar
                            </div>
                            <div className="flex flex-row font-secondary pl-7">
                                Developed a comprehensive session booking
                                backend using Django, PostgreSQL, and integrated
                                with Zoom for seamless meeting scheduling and
                                management.
                            </div>
                        </div>
                    </div>

                    {/* end it */}

                    <div className="p-6 flex-1">
                        <div className="">
                            <h1 className="text-3xl h2 font-bold text-accent">
                                About
                            </h1>
                            <p className="text-xl font-medium font-secondary">
                                I am passionate about developing dynamic,
                                user-friendly websites and have foundational
                                experience in React Native. I am also driven by
                                tackling challenging problems, which enables me
                                to improve and refine my skills.
                            </p>
                        </div>

                        {/* let start 💀 */}

                        <div className="lg:py-12 p-10 leading-[2] text-left lg:px-10">
                            <div className=" font-tertiary text-yellow-400 text-2xl h2">
                                Skills
                            </div>
                            <div className="">
                                <div className="font-tertiary text-[40px] text-gradient mb-2">
                                    <div className="flex flex-row gap-4 lg:gap-6">
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                                        />
                                    </div>

                                    {/* new  */}

                                    <div className="flex flex-row gap-4 lg:gap-8">
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://karuppuchamy.sirv.com/Images/Django.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                                        />
                                    </div>

                                    {/* next new */}

                                    <div className="flex flex-row gap-4 lg:gap-7">
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                                        />
                                        <img
                                            // width={"50px"}
                                            className="mb-3 w-[40px] lg:w-[50px]"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* let end it 🤩 */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
