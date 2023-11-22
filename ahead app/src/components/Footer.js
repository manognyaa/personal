import Image from "next/image";
import React from "react";
import Lottie from 'lottie-react';
import animationData from '../../public/fox.json'; // If 

const Footer = () => {
    return (
        <footer className="mt-4 border-gray-300  py-12 px-12 border-t">
            <p className="text-xl font-bold text-violet-700 flex justify-center">
                <div className="w-20 h-15 flex justify-center items-center"> 
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        style={{ width: '100%', height: '100%' }} 
                    />
                </div>
            </p>
            <p className="text-xl font-bold text-violet-700 text-center">ahead</p>
            <div className="flex gap-8 items-center justify-center mt-5 font-semibold">
                <div className="">AugustraBe 26, 10117 Berlin</div>
                <div className="">hi@ahead-app.com</div>
            </div>
            <div className="flex justify-center">
                <Image
                    src="/apple.svg"
                    alt="download applestore"
                    width={150}
                    height={150}
                />
            </div>
            <div className="text-center text-sm text-gray-500">
                &copy; Ahead App. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
