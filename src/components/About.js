import React from "react";
//countip
import CountUp from 'react-countup';
//intersection observer
import {useInView} from  'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variant
import { fadeIn } from "../variants";

import {FaGithub, FaYoutube, FaDribbble} from "react-icons/fa";

import connection2 from "../assets/aboutme.png"

const About = () => {

    const [ref , inView] = useInView({
        threshold : 0.5,
    });

    return <section className="section" id="about" ref={ref}>
        <div className="container mx-auto">
            <div className="flex lg:item-between">
            {/* image */}
            <motion.div
            variants = {fadeIn('right',0.4)}
            initial = "hidden" 
            whileInView={'show'} 
            viewport={{once : false,amount : 0.7}}
            className="flex-1  bg-contain bg-no-repeat h-[640px] w-800
            mix-blend-lighten bg-top ">
                <img src={connection2}
                 className="h-[540px] w-[500px] bg-no-repeat"/>
            </motion.div>

            {/* text */}
            <div className="lg:text-left text-justify leading-[2] font-semibold w-[600px]">
                <h2 className="h2  text-accent font-bold leading-[1]"> About Me</h2>
                
                <h3 className="text-[20px] leading-[26px] mb-4 ">I'm a Frontent-Developer and also a competetive Programmer
                    with an experience of 1 year.
                </h3>
               {/* status */}
               <div className="flex-col gap-x-6 lg:gap-x-20 mb-12 ">
                <div>
                    <div className="font-primary text-sm tracking-[2px] ">
                    LeetCode <br/>
                    Count </div>

                    <div className="text-[40px] font-tertiary text-gradient
                    mb-2 ">
                        {inView ?
                        <CountUp start={0} end={200} duration={5}/> : null }
                    </div>
                </div>

                <div>
                    <div className="font-primary text-sm tracking-[2px] ">
                        Contest <br/>
                        Rating</div>
                    <div className="text-[40px] font-tertiary text-gradient
                    mb-2 ">
                        {inView ?
                        <CountUp start={0} end={1350} duration={5}/> : null }
                    </div>
                   
                </div>

                <div>
                <div className="font-primary text-sm tracking-[2px] ">
                        Years of <br/>
                    Experience </div>
                    <div className="text-[40px] font-tertiary text-gradient
                    mb-2 ">
                        {inView ?
                        <CountUp start={0} end={2} duration={5}/> : null }
                    </div>
                    
                </div>
               </div>
               {/* <div className="lg:flex hidden gap-x-8 item-center ">
                <button className="btn btn-lg">Contact me</button>
                <div className="flex items-center">
               <a href="#" className="text-gradient btn-link "> My Portfolio</a>
               </div>
               </div> */}
            </div>
            </div>






        </div>
    </section>
}

export default About;