
import React from 'react';

export default function EQIQSection() {
    return (
        <div className="bg-white p-8 m-8 rounded-[1em] ">
            <div className="flex ">
                <div className="w-1/4"> 
                    <h2 className="text-[3em] md:text-[3em] font-roboto mb-4">EQ beats IQ</h2>
                </div>

                <div className="w-3/4 flex">
                    <div className="w-1/2 pr-4"> 
                        <p className="text-lg">People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
                    </div>

                    <div className="w-1/2 pl-4"> 
                        <p className="text-lg">They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
