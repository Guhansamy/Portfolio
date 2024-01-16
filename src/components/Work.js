import React from "react";
//motion
import {motion} from 'framer-motion';
//variant
import { fadeIn } from "../variants";
//images
import pro from "../assets/mechanicf.png";
import pro2 from "../assets/pro2.png";
import { Link } from "react-scroll";
import {FaGithub, FaYoutube, FaDribbble} from "react-icons/fa";

const Work = () => {
    return (
        <section className="section h-[950px]" id="work">
            <div className="container mx-auto">
                <div className="flex lg:text-left text-justify leading-[2] font-semibold justify-center items-center lg:mb-20 mb-1"> 
                <h2 className="h2 text-accent font-bold leading-[1]">
                    Projects
                </h2>
                </div>

                {/* start of each row da */}

                <div className="flex flex-col overflow-hidden">

                
                <div className="flex lg:flex-row flex-col lg:justify-between items-center "> 
                
                {/* start da */}
                    <div className="lg:w-[350px] w-[250px]  overflow-hidden border-2 border-red-500 rounded-xl 
                    flex justify-center items-center bg-emerald-50 lg:leading-7 leading-5 mb-5">
                        {/* image */}
                        <div className=" flex-col lg:w-[530px] w-[250px] lg:h-[36   0px] overflow-hidden border-3
                        border-white/50 rounded-xl text-center font-secondary">
                            
                            {/* img */}
                            <div className=" flex lg:w-[350px] w-[250px] lg:h-[250px] h-[200px] justify-center items-center text-center rounded-2xl">
                                <div className=" h-[230px] w-[320px] overflow-hidden rounded-xl">
                                <img src={pro} alt="Mechanic-finder" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex ml-5 text-gray-900 font-semibold font-tertiary float-left"> Online Mechanic Finder🧑🏽‍🔧</div> 
                                <div className="flex ml-8 text-gray-800 font-tertiary text-sm font-semibold float-left"> Used to Find the nearby Mechanic</div>
                            </div>
                                                       
                            <div className="flex flex-row mt-5 justify-between mb-2">
                                <div className="mr-3 ml-3 w-10 ">
                                    <FaGithub className="text-black text-[30px]"/>
                                </div>
                                
                                <div className="float-right">
                                    <Link to = "#">
                                    <button className="btn-tg float-left mr-5"> Web</button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>





                     <div className="lg:w-[350px] w-[250px]  overflow-hidden border-2 border-red-500 rounded-xl 
                    flex justify-center items-center bg-emerald-50 lg:leading-7 leading-5 mb-5">
                        {/* image */}
                        <div className=" flex-col lg:w-[530px] w-[250px] lg:h-[36   0px] overflow-hidden border-3
                        border-white/50 rounded-xl text-center font-secondary">
                            
                            {/* img */}
                            <div className=" flex lg:w-[350px] w-[250px] lg:h-[250px] h-[200px] justify-center items-center text-center rounded-2xl">
                                <div className=" h-[230px] w-[320px] overflow-hidden rounded-xl">
                                <img src={pro} alt="Foody" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex ml-5 text-gray-900 font-semibold font-tertiary float-left"> Foody😋</div> 
                                <div className="flex ml-8 text-gray-800 font-tertiary text-sm font-semibold float-left"> Allow user to order food through online</div>
                            </div>
                                                       
                            <div className="flex flex-row mt-5 justify-between mb-2">
                                <div className="mr-3 ml-3 w-10 ">
                                    <FaGithub className="text-black text-[30px]"/>
                                </div>
                                
                                <div className="float-right">
                                    <Link to = "#">
                                    <button className="btn-tg float-left mr-5"> Web</button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    

                     <div className="lg:w-[350px] w-[250px]  overflow-hidden border-2 border-red-500 rounded-xl 
                    flex justify-center items-center bg-emerald-50 lg:leading-7 leading-5 mb-5">
                        {/* image */}
                        <div className=" flex-col lg:w-[530px] w-[250px] lg:h-[36   0px] overflow-hidden border-3
                        border-white/50 rounded-xl text-center font-secondary">
                            
                            {/* img */}
                            <div className=" flex lg:w-[350px] w-[250px] lg:h-[250px] h-[200px] justify-center items-center text-center rounded-2xl">
                                <div className=" h-[230px] w-[320px] overflow-hidden rounded-xl">
                                <img src={pro} alt="Ecommerce" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex ml-5 text-gray-900 font-semibold font-tertiary float-left"> Shoppy🛒</div> 
                                <div className="flex ml-8 text-gray-800 font-tertiary text-sm font-semibold float-left"> Online Shopping Website</div>
                            </div>
                                                       
                            <div className="flex flex-row mt-5 justify-between mb-2">
                                <div className="mr-3 ml-3 w-10 ">
                                    <FaGithub className="text-black text-[30px]"/>
                                </div>
                                
                                <div className="float-right">
                                    <Link to = "#">
                                    <button className="btn-tg float-left mr-5"> Web</button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                {/* Next set  */}

                <div className="flex lg:flex-row flex-col lg:justify-around items-center "> 

                <div className="lg:w-[350px] w-[250px]  overflow-hidden border-2 border-red-500 rounded-xl 
                    flex justify-center items-center bg-emerald-50 lg:leading-7 leading-5 mb-5">
                        {/* image */}
                        <div className=" flex-col lg:w-[530px] w-[250px] lg:h-[36   0px] overflow-hidden border-3
                        border-white/50 rounded-xl text-center font-secondary">
                            
                            {/* img */}
                            <div className=" flex lg:w-[350px] w-[250px] lg:h-[250px] h-[200px] justify-center items-center text-center rounded-2xl">
                                <div className=" h-[230px] w-[320px] overflow-hidden rounded-xl">
                                <img src={pro} alt="Hidden-Harbour" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex ml-5 text-gray-900 font-semibold font-tertiary float-left"> Hidden-Harbour🤔</div> 
                                <div className="flex ml-8 text-gray-800 font-tertiary text-sm font-semibold float-left"> Anonymous Question can be asked</div>
                            </div>
                                                       
                            <div className="flex flex-row mt-5 justify-between mb-2">
                                <div className="mr-3 ml-3 w-10 ">
                                    <FaGithub className="text-black text-[30px]"/>
                                </div>
                                
                                <div className="float-right">
                                    <Link to = "#">
                                    <button className="btn-tg float-left mr-5"> Web</button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[350px] w-[250px]  overflow-hidden border-2 border-red-500 rounded-xl 
                    flex justify-center items-center bg-emerald-50 lg:leading-7 leading-5 mb-5">
                        {/* image */}
                        <div className=" flex-col lg:w-[530px] w-[250px] lg:h-[36   0px] overflow-hidden border-3
                        border-white/50 rounded-xl text-center font-secondary">
                            
                            {/* img */}
                            <div className=" flex lg:w-[350px] w-[250px] lg:h-[250px] h-[200px] justify-center items-center text-center rounded-2xl">
                                <div className=" h-[230px] w-[320px] overflow-hidden rounded-xl">
                                <img src={pro} alt="Mechanic-finder" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex ml-5 text-gray-900 font-semibold font-tertiary float-left"> Task-Management🏢</div> 
                                <div className="flex ml-8 text-gray-800 font-tertiary text-sm font-semibold float-left"> A desktop application using JavaFx</div>
                            </div>
                                                       
                            <div className="flex flex-row mt-5 justify-between mb-2">
                                <div className="mr-3 ml-3 w-10 ">
                                    <FaGithub className="text-black text-[30px]"/>
                                </div>
                                
                                <div className="float-right">
                                    <Link to = "#">
                                    <button className="btn-tg float-left mr-5"> Web</button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>

                </div>
                {/* <div>  </div> */}
            </div>
        </section>
    )
}

export default Work;