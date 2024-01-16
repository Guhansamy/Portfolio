import React from "react";
import pro from "../assets/mechanicf.png";
import services from "../assets/services.png"
import CountUp from 'react-countup';
import {useInView} from  'react-intersection-observer';
//motion
import {color, motion} from 'framer-motion';
//variant
import { fadeIn } from "../variants";
import { FaLinkedinIn } from "react-icons/fa";
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import twitter from "../assets/twitter.png"
import connection2 from "../assets/contact.png"

const Contact = () => {
    const [ref , inView] = useInView({
        threshold : 0.5,
    });
    return (
        <div 
        className="section h-[1000px]"
        id="contact">
            <div className="container mx-auto">

            <div className="flex lg:item-between">
            {/* here about is the image name given in bgimage */}
            <motion.div
            variants = {fadeIn('right',0.4)}
            initial = "hidden" 
            whileInView={'show'} 
            viewport={{once : false,amount : 0.7}}
            className="flex-1  bg-contain bg-no-repeat h-[540px] w-[300px]
            mix-blend-lighten bg-top "
            style={{ backgroundColor: 'transparent' }}>
                <img src={connection2}
                 className="h-[540px] w-[500px] bg-no-repeat"/>
            </motion.div>

            {/* text */}
            <div className="flex flex-col lg:text-left text-justify leading-[2] font-semibold mr-[240px]">
                <motion.div
                    variants = {fadeIn('down',0.5)}
                    initial = "hidden" 
                    whileInView={'show'} 
                    className="hidden lg:flex max-w-[420px]">
                    <h2 className="h2  text-white font-bold leading-[1] mt-[80px] mb-[90px]"> Connect With Me</h2>
                </motion.div>

                <motion.div
                    variants = {fadeIn('left',0.5)}
                    initial = "hidden" 
                    whileInView={'show'} 
                    className="hidden lg:flex max-w-[420px]">
                    <div className="flex flex-row">
                        <img src={linkedin} className="h-[30px] w-[30px] mt-2 mr-12" />
                        <h3 className="h3 font-light font-tertiary"> guhan-k</h3>
                    </div>
                    {/* <h3 className="h2 font-bold"> Guhan</h3> */}
                </motion.div>

                <motion.div
                    variants = {fadeIn('left',0.5)}
                    initial = "hidden" 
                    whileInView={'show'} 
                    className="hidden lg:flex max-w-[420px]">
                    <div className="flex flex-row">
                        <div className="h-[30px] w-[30px]  mt-1 mr-12 rounded-full bg-slate-300"> <img src={github} className="h-[30px] w-[30px]" /> </div>
                        <h3 className="h3 font-light font-tertiary"> Guhansamy</h3>
                    </div>
                </motion.div>

                <motion.div
                    variants = {fadeIn('left',0.5)}
                    initial = "hidden" 
                    whileInView={'show'} 
                    className="hidden lg:flex max-w-[420px]">
                    <div className="flex flex-row">
                        <img src={twitter} className="h-[30px] w-[30px] mt-1 mr-12" />
                        <h3 className="h3 font-light font-tertiary"> guhan_2004</h3>
                    </div>
                </motion.div>
                
                
                
            </div>
            </div>



            </div>
           
        </div>
    )
}

export default Contact;