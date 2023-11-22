import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Lottie from 'lottie-react';
import phoneAnimation from '../../public/phone.json';
import phoneBackAnimation from '../../public/background/phone_back2.json';
import fullBackgroundAnimation from '../../public/background/bg4.json';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const appStoreRef = useRef(null);
    const playStoreRef = useRef(null);
    const phoneRef = useRef(null);
    const phoneBackRef = useRef(null);

    useEffect(() => {


        gsap.fromTo(titleRef.current, { autoAlpha: 0, scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1, ease: "back.out(1.7)" });
        gsap.fromTo(titleRef.current,
            { y: 50, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top bottom", 
                    end: "bottom top", 
                    toggleActions: "play reverse play reverse",
                }
            }
        );

        gsap.fromTo(subtitleRef.current, { autoAlpha: 0, scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1, ease: "back.out(1.7)", delay: 0.3 });
        gsap.fromTo(subtitleRef.current,
            { y: 100, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: subtitleRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            }
        );

        gsap.fromTo(appStoreRef.current, { autoAlpha: 0, x: -50}, { duration: 1, x: 0, autoAlpha: 1, delay: 0.6 });
        gsap.fromTo(appStoreRef.current,
            { x: 0, autoAlpha: 1 }, 
            {
                duration: 1, 
                x: -50, 
                autoAlpha: 0, 
                ease: "power1.out", 
                scrollTrigger: {
                    trigger: appStoreRef.current, 
                    start: "top bottom",
                    end: "bottom center", 
                    toggleActions: "play none play none", 
                    scrub:true,
                    onEnter: () => console.log("Entering viewport"), 
                    onLeave: () => console.log("Leaving viewport"), 
                }
            }
        );

        gsap.fromTo(playStoreRef.current, { autoAlpha: 0, x:50, y:-10 }, { duration: 1, x: 0, autoAlpha: 1, delay: 0.6 });
        gsap.fromTo(playStoreRef.current,
            { x: 0, autoAlpha: 1 }, 
            {
                duration: 1, 
                x: 50, 
                autoAlpha: 0, 
                ease: "power1.out",
                scrollTrigger: {
                    trigger: playStoreRef.current, 
                    start: "top bottom", 
                    end: "bottom center", 
                    toggleActions: "play none none none",
                    scrub: true,
                    onEnter: () => console.log("Entering viewport"), 
                    onLeave: () => console.log("Leaving viewport"), 
                }
            }
        );
        gsap.fromTo(phoneRef.current, { autoAlpha: 0, scale: 0.5 }, { duration: 1.5, scale: 1, autoAlpha: 1, ease: "elastic.out(1, 0.3)"});

            gsap.fromTo(phoneRef.current,
                { autoAlpha: 0 },
                {
                    autoAlpha: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: phoneRef.current,
                        start: "top bottom", 
                        end: "bottom top", 
                        toggleActions: "play none none none", 
                    }
                }
            );

        gsap.fromTo(phoneBackRef.current, { autoAlpha: 0, scale: 0.5 }, { duration: 1.5, scale: 1, autoAlpha: 1, ease: "elastic.out(1, 0.3)", delay: 1.2 });
        gsap.fromTo(phoneBackRef.current,
            { x: 0, autoAlpha: 1 },
            {
                x: 50, 
                autoAlpha: 0,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: phoneBackRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    }, []);


    return (
        <div className="relative py-12 px-20 overflow-hidden bg-[#E5E0FF] mx-10 my-8 rounded-[2rem]">
            <div className="absolute inset-0 z-0">
                {/* <Lottie animationData={fullBackgroundAnimation} style={{ width: '100%', height: '100%' }} /> */}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="flex-1 mb-6 md:mb-0 p-8">
                    <p ref={subtitleRef} className="text-[2em] font-semibold text-black mb-2">Ahead app</p>
                    <h1 ref={titleRef} className="text-[5em] md:text-[7em] font-extrabold leading-tighter text-black mb-8">
                        Master your life by mastering emotions
                    </h1>
                    <div className="flex">
                        <div id="apple" ref={appStoreRef}>
                            <Image src="/apple.svg" alt="App Store" width={120} height={40} />
                        </div>
                        <div ref={playStoreRef}>
                            <Image src="/google-play-badge.png" alt="Play Store" width={150} height={45} />
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative">
                   <div ref={phoneBackRef} className="absolute inset-0 z-0">
                        <Lottie animationData={phoneBackAnimation} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div ref={phoneRef} className="relative z-10 left-[50px]">
                        <Lottie animationData={phoneAnimation} style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
