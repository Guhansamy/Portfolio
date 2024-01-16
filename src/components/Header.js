import React from "react";
import logo from '../assets/logo.svg';

const Header = () => {
    return <header className="py-8">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                {/* logo */}
                <a href="#">
                    <img src={logo} alt="logo" className="hidden" />
                </a>
                <button className="text-pink-600 h-12">Work with me </button>
            </div>
        </div>
    </header>
}
export default Header;