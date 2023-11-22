// src/components/Card.js
import React from 'react';
import styles from '../styles/CardSection..module.css'; // Assuming you want to use the same CSS module

function Card({ emoji, title, description }) {
    return (
        <div className={styles.card}>
            <div className="text-center">
                <div className="text-3xl">{emoji}</div>
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
}

export default Card;
