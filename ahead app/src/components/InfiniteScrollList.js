import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/InfiniteScrollList.module.css';
import Lottie from 'lottie-react';
import animationData from '../../public/ghost/ghost1.json'; 
const InfiniteScrollList = () => {
    const [items, setItems] = useState([]);
    const [highlightedIndex, setHighlightedIndex] = useState(0); 
    const itemListRef = useRef(null);

    useEffect(() => {
        fetch('https://mocki.io/v1/8ed4d7b7-addf-454c-ac5c-7d873a083920')
            .then(response => response.json())
            .then(data => {
                setItems(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = itemListRef.current;
        const eachItemHeight = 100; 
        const tolerance = 10; 

        let currentHighlight = Math.floor(scrollTop / eachItemHeight);

        if (scrollHeight - (scrollTop + clientHeight) <= tolerance) {
            currentHighlight = items.length - 1;
        }

        setHighlightedIndex(currentHighlight);
    };
    useEffect(() => {
        const itemListElement = itemListRef.current;
        itemListElement.addEventListener('scroll', handleScroll);

        return () => itemListElement.removeEventListener('scroll', handleScroll);
    }, [items.length]); 

    return (
        <div className={styles.scrollContainer}>
            <header className={styles.header}>
                <div className="flex justify-center items-center flex-wrap">
                    <h1 className="text-5xl text-center my-12 ml-4">Self-improvement. Ugh.</h1>
                    <div className="w-32 h-32"> 
                        <Lottie animationData={animationData} />
                    </div>
                </div>
                <p>Wrong with self-improvement & how we're fixing it.</p>
            </header>
            <div ref={itemListRef} className={styles.itemList}>
                {items.map((item, index) => (
                    <div key={index}
                        className={`${styles.item} ${highlightedIndex === index ? styles.highlighted : ''}`}>
                        <div className={styles.itemIndicator}></div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default InfiniteScrollList;
