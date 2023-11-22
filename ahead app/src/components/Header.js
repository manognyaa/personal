// Header.js
import React from 'react';
import Lottie from 'lottie-react';
import Link from 'next/link';
import animationData from '../../public/fox.json'; // Your path to the Lottie file

const Header = () => {
    return (
        <header className="bg-[#fff] flex justify-between items-center px-6 py-4">
            {/* Logo/Image on the left */}
            <div className="w-20 h-15">
                <Lottie animationData={animationData} loop={true} />
            </div>

            {/* Centered Navbar */}
            <nav className="flex justify-center items-center flex-grow">
                <Link href="#emotions">
                    <span className="text-black px-4 py-2 hover:bg-[#EDE4FF] rounded cursor-pointer">Emotions</span>
                </Link>
                <Link href="#manifesto">
                    <span className="text-black px-4 py-2 hover:bg-[#EDE4FF] rounded cursor-pointer">Manifesto</span>
                </Link>
                <Link href="#self-awareness-test">
                    <span className="text-black px-4 py-2 hover:bg-[#EDE4FF] rounded cursor-pointer">Self-awareness test</span>
                </Link>
                <Link href="#work-with-us">
                    <span className="text-black px-4 py-2 hover:bg-[#EDE4FF] rounded cursor-pointer">Work With Us</span>
                </Link>
            </nav>

            {/* Right-aligned button */}
            <button className="bg-black rounded-[10px] hover:bg-[#DFD3C3] text-white hover:text-black font-bold py-2 px-4 rounded">
                Download app
            </button>
        </header>
    );
};

export default Header;
