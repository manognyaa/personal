import Lottie  from 'lottie-react';
import React from 'react';
import angry from '../../public/angry_bear.json'; 
import animationData from '../../public/animal.json';

const FeatureSection = () => {
    return (
        <div className="flex items-center bg-pink-100 p-12">
            <div className="flex-1">
                <Lottie animationData={animationData} style={{ maxWidth: '500px', margin: '0 auto' }} />
            </div>
            <div className="flex-1">
                <div className="border-t-4 border-orange-500 w-16"></div> 
                <div className="flex justify-center items-center flex-wrap">
                    <h2 className="text-lg uppercase tracking-widest text-gray-600 mt-2">Built out of frustration</h2>
                    <div className="w-15 h-15"> 
                        <Lottie  animationData={angry} style={{ width: '15%', height: 'auto' }} />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-800 my-4">Meet the ahead app</h1>
                <p className="text-gray-700">
                    A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
                </p>
                <p className="text-gray-600 mt-4">
                    Think of it as a pocket cheerleader towards a better, more fulfilling.
                </p>
            </div>
        </div>
    );
};

export default FeatureSection;