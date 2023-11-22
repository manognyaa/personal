// src/components/CardSection.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Lottie from 'lottie-react';
import familiarAnimationData from '../../public/ghost/ghost2.json';
import { motion } from 'framer-motion';
import styles from  '../styles/CardSection..module.css'; // Ensure this CSS file exists and is correctly imported

export default function CardSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cardVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    };

    const cards = [
        {
            id: 'card-0',
            emoji: '🤦‍♂️',
            title: 'A squabble with your partner',
            description: 'You accuse them of doing that thing you hate, instead of staying calm and addressing their concerns.'
        },
        {
            id: 'card-1',
            emoji: '😠',
            title: 'You argue with a colleague',
            description: 'You get angry and defensive, instead of staying open and working towards common ground.'
        },
        {
            id: 'card-2',
            emoji: '😳',
            title: 'You get a promotion at work',
            description: 'You question yourself and wonder when they’ll realize you’re an unqualified imposter.'
        },
        {
            id: 'card-3',
            emoji: '😔',
            title: 'You attend a class reunion',
            description: 'You compare yourself with others, instead of measuring your self-worth independently.'
        },
        {
            id: 'card-4',
            emoji: '🏆',
            title: 'Success in a project',
            description: 'You feel elated but also apprehensive about maintaining success in future projects.'
        },
        {
            id: 'card-5',
            emoji: '🎉',
            title: 'Your birthday celebrations',
            description: 'You feel loved but also reflect on what you’ve achieved in the past year.'
        },
        {
            id: 'card-6',
            emoji: '📚',
            title: 'Learning something new',
            description: 'You dive into a new subject with excitement, embracing the challenge of unfamiliar territory.'
        },
        {
            id: 'card-7',
            emoji: '💼',
            title: 'A busy workday',
            description: 'You manage to stay productive despite a multitude of meetings and interruptions.'
        },
        {
            id: 'card-8',
            emoji: '🌟',
            title: 'Recognition for your hard work',
            description: 'Your efforts are acknowledged in a team meeting, giving you a boost of confidence and pride.'
        },
        {
            id: 'card-9',
            emoji: '💡',
            title: 'A flash of inspiration',
            description: 'An idea strikes you out of the blue, igniting a passion for a new creative endeavor.'
        }
    ];

    const getScrollEffectStyle = (index) => {
        switch (index) {
            case 1:
                return { x: scrollY * 0.3 }
            case 5:
                return { x: scrollY * 0.1 }; // Move left/right
            case 3:
            case 7:
                return { y: scrollY * 0.1 }; // Move down/up
            default:
                return {}; // No scroll effect for other cards
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <Lottie animationData={familiarAnimationData} className={styles.lottieAnimation} />
                <h1 className={styles.heading}>Does this sound familiar...</h1>
                <Lottie animationData={familiarAnimationData} className={styles.lottieAnimation} />
            </div>
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className={`${styles.cardContainer} ${styles[`card-${index}`]}`} // Dynamic class names
                    variants={cardVariants}
                    whileHover='hover'
                >
                    <Card emoji={card.emoji} title={card.title} description={card.description} />
                </motion.div>
            ))}
        </div>
    );
}
