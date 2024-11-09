import React from "react";
// import logo from "../assets/logo.svg";
// import logo from "../"

const Header = () => {
    return (
        <header className="py-8 " id="">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <a href="#" className="invisible h-2">
                        <img
                            src="https://karuppuchamy.sirv.com/Images/letter-g.png"
                            alt="guhan"
                        />
                    </a>
                    {/* button */}
                    <p className="text-gradient btn-link">Work with me</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
