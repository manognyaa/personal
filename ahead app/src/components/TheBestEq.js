import React from 'react';

export default function TheBestEq() {
    return (
        <div className="bg-white p-8 m-8 rounded-[1em]">
            <div className="flex justify-between items-center flex-wrap">
                <div className="w-full md:w-1/4">
                    <h2 className="text-[3em] font-roboto mb-4 text-left">Be the best you with EQ</h2>
                </div>

                <div className="w-full md:w-3/4 flex justify-center items-start flex-wrap">
                    <div className="w-full md:w-1/2 px-4"> 
                        <p className="text-[20px]  w-[80%] text-center md:text-left">Not having your own emotions under control might be holding you back.Emotions are like wild horses. It's up to you to harness their power and use them wisely, or let them run wild and potentially derail your journey</p>
                    </div>

                    <div className="w-full md:w-1/2 px-4"> 
                        <p className="text-[20px]  w-[80%] text-center md:text-left">Additionally, not understanding those of others stops you from being the parent, friend you can be. Empathy is the key to building meaningful connections with people in your life.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
