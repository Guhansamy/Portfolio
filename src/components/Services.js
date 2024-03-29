import React from "react";
//icon
import {BsArrowUpRight} from 'react-icons/bs';
//motion
import {motion} from  'framer-motion';
//variants
import { fadeIn } from "../variants";

//services data
const services = [
    {
        name:'UI/UX Design',
        description:'It is a super type of css used ever I had seen',
        link: 'Learn more',
    },
    {
        name:'Digital Marketing',
        description:'It gives us fun while making this and also good vibe',
        link: 'Learn more',
    },
    {
        name:'Product Branding',
        description:'Ti gives a lot of problem to solve',
        link: 'Learn more',
    }, 
    {
        name:'Digital Marketing',
        description : 'It gives a lot of experience if we have an good idea in that',
        link : 'Learn more',
    },
]

const Services = () => {
    return (
        <div className="section" id="services" >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* text */}
                    <motion.div
                    variants = {fadeIn('right',0.3)}
                    initial = "hidden" 
                    whileInView={'show'} 
                    viewport={{once : false,amount : 0.7}}
                    className=" lg:bg-services lg:bg-bottom bg-no-repeat
                    mix-blend-lighten mb-12 lg:mb-0 bg-contain">
                        <div className="">
                        <h2 className="h2 text-accent mb-6 ">What I Do.</h2>
                        <h3 className="h3 max-w-[445px] mb-16 ">
                            I'am a Freelance Full-Stack Developer</h3>
                             <button className="btn btn-sm">See my work</button>
                             </div>
                    </motion.div>
                    
                    {/* services */}
                    <div>
                        <motion.div 
                        variants = {fadeIn('left',0.3)}
                        initial = "hidden" 
                        whileInView={'show'} 
                        viewport={{once : false,amount : 0.7}}
                        className="flex-1 ">
                            {/* service list */}
                            <div>
                                {services.map((service, index) => {
                                    
                                    const {name, description, link} = service;

                                    return (
                                    <div className="border-b border-white/20 h-[146px] 
                                    mb-[38px] flex" key={index}>
                                        <div className="max-w-[476px] ">
                                            
                                                <h4 className="text-[20px] tracking-wider font-primary
                                                font-semibold mb-6">{name}</h4>

                                                <p className="font-secondary leading-tight">{description}</p>
                                            
                                        </div>
                                        {/* check this da */}
                                        <div className="flex flex-col flex-1 items-end justify-center"> 
                                            <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                                                <BsArrowUpRight />
                                            </a>
                                            <a href="#" className="text-gradient text-sm"> 
                                            {link} </a>
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services;