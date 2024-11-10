import React from "react";

const Work = () => {
    return (
        <section className="py-8 lg:py-14 pt-80 lg:pt-3" id="work">
            <div className="container mx-auto">
                <div>
                    <div className="text-center">
                        <h1 className="py-2 text-2xl font-semibold font-primary mb-2">
                            MY PROJECTS
                        </h1>
                    </div>
                </div>

                <div className="p-3 flex flex-wrap lg:flex-row justify-evenly lg:gap-y-12 gap-y-10 gap-x-18">
                    {/* Taskify */}
                    <div
                        className="min-h-[350px] max-w-[340px] overflow-hidden  p-3 bg-slate-100 rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3"
                    >
                        <div
                            className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
                        >
                            <img
                                src="https://karuppuchamy.sirv.com/Images/Taskify.png"
                                className="w-[330px] h-[190px]"
                            ></img>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold text-xl ">Taskify</h1>

                            <p className="font-semibold text-sm">
                                A platform for students to share data and file.
                                Also can create a serperate room seperate data.
                            </p>

                            <div className="flex bottom-2 fixed w-[310px]">
                                <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                    <div
                                        className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             "
                                    >
                                        <a href="https://github.com/Guhansamy/Taskify">
                                            <img
                                                src="https://karuppuchamy.sirv.com/Images/github.png"
                                                className=""
                                            ></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="bg-blue-600 rounded-xl  text-white font-medium hover:shadow-black py-1 px-1
                                                    hover:shadow-lg border border-black "
                                    >
                                        MERN Stack
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Atn */}
                    <div
                        className="min-h-[350px] max-w-[340px] overflow-hidden  p-3 bg-slate-100 rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3"
                    >
                        <div
                            className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
                        >
                            <img
                                src="https://karuppuchamy.sirv.com/Images/ATN.png"
                                className="w-[330px] h-[190px]"
                            ></img>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold text-xl ">
                                Any Time Network
                            </h1>

                            <p className="font-semibold text-sm">
                                A platform to display the request from the
                                users. Also dispaly the particular location and
                                dashboard of the data.{" "}
                            </p>

                            <div className="flex bottom-2 fixed w-[310px]">
                                <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                    <div
                                        className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             "
                                    >
                                        <a href="https://github.com/Guhansamy/ATN-frontend/tree/master">
                                            <img
                                                src="https://karuppuchamy.sirv.com/Images/github.png"
                                                className=""
                                            ></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="bg-blue-600 rounded-xl  text-white font-medium hover:shadow-black py-1 px-1
                                                    hover:shadow-lg border border-black "
                                    >
                                        MERN Stack
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hidden Harbour */}
                    <div
                        className="min-h-[350px] max-w-[340px] overflow-hidden  p-3 bg-slate-100 rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3"
                    >
                        <div
                            className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
                        >
                            <img
                                src="https://karuppuchamy.sirv.com/Images/hidden-harbour.png"
                                className="w-[330px] h-[190px]"
                            ></img>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold text-xl ">
                                Hidden Harbour
                            </h1>

                            <p className="font-semibold text-sm">
                                An app for users to share questions and receive
                                answers anonymously, with Perspective API.{" "}
                            </p>

                            <div className="flex bottom-2 fixed w-[310px]">
                                <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                    <div
                                        className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             "
                                    >
                                        <a href="https://github.com/Guhansamy/Hidden-Harbour/tree/master/Hidden-Harbour-Final-main/frontend">
                                            <img
                                                src="https://karuppuchamy.sirv.com/Images/github.png"
                                                className=""
                                            ></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="bg-blue-600 rounded-xl  text-white font-medium hover:shadow-black py-1 px-1
                                                    hover:shadow-lg border border-black "
                                    >
                                        React Native
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* java sprint week */}
                    <div
                        className="min-h-[350px] max-w-[340px] overflow-hidden  p-3 bg-slate-100 rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3"
                    >
                        <div
                            className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
                        >
                            <img
                                src="https://karuppuchamy.sirv.com/Images/Online-Mechanic-Finder.png"
                                className="w-[330px] h-[190px]"
                            ></img>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold text-xl ">Taskify</h1>

                            <p className="font-semibold text-sm">
                                A platform for students to share data and file.{" "}
                            </p>

                            <div className="flex bottom-2 fixed w-[310px]">
                                <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                    <div
                                        className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             "
                                    >
                                        <a href="#">
                                            <img
                                                src="https://karuppuchamy.sirv.com/Images/github.png"
                                                className=""
                                            ></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="bg-blue-600 rounded-xl  text-white font-medium hover:shadow-black py-1 px-1
                                                    hover:shadow-lg border border-black "
                                    >
                                        MERN Stack
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="min-h-[350px] max-w-[340px] overflow-hidden  p-3 bg-slate-100 rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3"
                    >
                        <div
                            className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
                        >
                            <img
                                src="https://karuppuchamy.sirv.com/Images/Online-Mechanic-Finder.png"
                                className="w-[330px] h-[190px]"
                            ></img>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold text-xl ">Taskify</h1>

                            <p className="font-semibold text-sm">
                                A platform for students to share data and file.{" "}
                            </p>

                            <div className="flex bottom-2 fixed w-[310px]">
                                <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                    <div
                                        className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             "
                                    >
                                        <a href="#">
                                            <img
                                                src="https://karuppuchamy.sirv.com/Images/github.png"
                                                className=""
                                            ></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="bg-blue-600 rounded-xl  text-white font-medium hover:shadow-black py-1 px-1
                                                    hover:shadow-lg border border-black "
                                    >
                                        MERN Stack
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* end */}
                </div>
            </div>
        </section>
    );
};

export default Work;
