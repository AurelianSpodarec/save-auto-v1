import { useState, useEffect } from 'react';
import TextLoadingDots from "atoms/TextLoadingDots";

function LoadingTextualProgress({ data }:LoadingTextualProgressProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepsToShow, setStepsToShow] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prevStep) => (prevStep + 1) % data.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [data.length]);

    useEffect(() => {
        const addStep = setTimeout(() => {
            const remainingSteps = data.filter((_, index) => index !== currentStep);
            const randomIndex = Math.floor(Math.random() * remainingSteps.length);
            const randomStep = remainingSteps[randomIndex];
            setStepsToShow((prevSteps:any) => [...prevSteps, randomStep]);
        }, 100);

        return () => clearTimeout(addStep);
    }, [currentStep, data]);

    return (
        <div className="flex flex-col space-y-2">
            {stepsToShow.map((step:any, index:number) => {
                return <TextLoadingDots key={index} isActive={currentStep  === index} text={step} />
            })}
        </div>
    )
}

export default LoadingTextualProgress;

interface LoadingTextualProgressProps {
    data: string[];
}
