import React, { useState, useEffect } from "react";
// import React, from "react";

import { BiClipboard, BiHomeAlt, BiUser } from "react-icons/bi";
import {
    BsClipboardData,
    BsBriefcase,
    BsChatSquare,
    BsChatSquareText,
} from "react-icons/bs";

// link

import { Link } from "react-scroll";

const Nav = () => {
    const [workOffset, setWorkOffset] = useState(
        window.innerWidth >= 1024 ? 150 : 300
    );

    useEffect(() => {
        const handleResize = () => {
            setWorkOffset(window.innerWidth >= 1024 ? 200 : 300);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="fixed bottom-2 lg:bottom-8  w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div
                    className="w-full bg-black/20 h-[96px] backdrop-blur-2xl
                            rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-3xl
                            text-white/50 items-center"
                >
                    <Link
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={-200}
                        to="home"
                        className="cursor-pointer flex items-center justify-center w-[60px] h-[60px]"
                    >
                        <BiHomeAlt />
                    </Link>
                    <Link
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        to="about"
                        className="cursor-pointer flex items-center justify-center w-[60px] h-[60px]"
                    >
                        <BiUser />
                    </Link>

                    <Link
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={workOffset}
                        to="work"
                        className="cursor-pointer flex items-center justify-center w-[60px] h-[60px]"
                    >
                        <BsBriefcase />
                    </Link>
                    <Link
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        to="contact"
                        className="cursor-pointer flex items-center justify-center w-[60px] h-[60px]"
                    >
                        <BsChatSquareText />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
