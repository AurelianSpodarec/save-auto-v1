import React, { useState, useEffect } from 'react';

function useTypewriterEffect(text: string, speed = 20, shouldStart = true): [string, boolean] {
    const [animatedText, setAnimatedText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [finished, setFinished] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (text && text.length > 0 && shouldStart) {
            interval = setInterval(() => {
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, speed);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [text, speed, shouldStart]);

    useEffect(() => {
        if (text && text.length > 0) {
            if (currentIndex === text.length) {
                setFinished(true);
            }
            setAnimatedText(text.substring(0, currentIndex));
        } else {
            setAnimatedText('');
        }
    }, [text, currentIndex]);

    return [animatedText, finished];
}

export default useTypewriterEffect;
