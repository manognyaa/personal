
import React, { useEffect, useRef } from 'react';
import ScrollCard from './ScrollCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCardSection() {
    const cards = [
        {
            title: "It's not as easy as 1-2-3.",
            description: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
        },
        {
            title: "Old habits are hard to break.",
            description: "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use."
        },
        {
            title: "You and your motivation don't have a long-term relationship.",
            description: "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals."
        },
        {
            title: "Books just don't offer practical solutions.",
            description: "Remember when you learned to ride a bike just by reading? Yeah, we don't either."
        },
    ];
    const cardRefs = useRef(cards.map(() => React.createRef()));

    useEffect(() => {
        cardRefs.current.forEach((ref, index) => {
            ScrollTrigger.create({
                trigger: ref.current,
                start: "top center",
                end: "bottom center",
                toggleClass: { targets: ref.current, className: "active" },
                onEnter: () => setActiveCard(index),
                onLeaveBack: () => setActiveCard(index - 1),
                // markers: true // Remove this line for production
            });
        });
        ScrollTrigger.refresh();
    }, []);

    const setActiveCard = (index) => {
        cardRefs.current.forEach((ref, i) => {
            if (ref.current) {
                gsap.to(ref.current, {
                    className: i === index ? 'active' : '',
                    duration: 0.3
                });
            }
        });
    };

    return (
        <div className="my-12">
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                <div className="ml-16">
                    {cards.map((card, index) => (
                        <div ref={cardRefs.current[index]} key={index}>
                            <ScrollCard
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
