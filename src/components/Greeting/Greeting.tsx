'use client';

import React, { useEffect, useState } from 'react';

interface TypewriterProps {
    texts: string[];
    speed?: number;
}

const Greeting = ({ texts, speed }: TypewriterProps) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        let interval: NodeJS.Timeout;

        const typeText = () => {
            if (currentIndex < texts[currentTextIndex].length) {
                setDisplayText((prev) => prev + texts[currentTextIndex][currentIndex - 1]);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                    setDisplayText('');
                }, 1000);
            }
        };

        interval = setInterval(typeText, speed);

        return () => clearInterval(interval);
    }, [texts, currentTextIndex, speed]);

    return <span className='whitespace-pre'>{displayText}</span>;
};

export default Greeting;
