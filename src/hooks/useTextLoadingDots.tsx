import { useState, useEffect } from 'react';

const useTextLoadingDots = () => {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots === '...') {
                    return '.';
                } else if (prevDots === '..') {
                    return '...';
                } else {
                    return '..';
                }
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return { 
        dots
    };
};

export default useTextLoadingDots
