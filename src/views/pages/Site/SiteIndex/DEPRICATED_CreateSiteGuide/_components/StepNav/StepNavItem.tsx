import React from 'react';

interface IStep {
    name: string;
    status: 'complete' | 'active' | 'upcomping';
    href: string;
}

interface StepItemProps {
    step: IStep;
    firstStep: () => void;
}

function StepNavItem({ item, menuGoTo }:StepItemProps) {
    const step = item;
    
    const stepName = step.name
    const isComplete = step.status === 'complete';
    const isCurrent = step.status === 'active';

    return (
        <li key={step.name} onClick={() => menuGoTo(step.id)}>
            {isComplete ? (
                <button type="button" className="group" >
                <span className="flex items-start">
                    <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                    <svg className="h-full w-full text-blue-600 group-hover:text-blue-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"></path>
                    </svg>
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-400 group-hover:text-gray-300">
                    {stepName}
                    </span>
                </span>
                </button>
            ) : isCurrent ? (
                <button type="button" className="flex items-start" aria-current="step">
                <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                    <span className="animate-ping absolute h-4 w-4 rounded-full bg-blue-200" />
                    <span className="relative block h-2 w-2 rounded-full bg-blue-600" />
                </span>
                <span className="ml-3 text-sm font-medium text-blue-500">{stepName}</span>
                </button>
            ) : (
                <button type="button" className="group">
                <div className="flex items-start">
                    <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                    <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                    </div>
                    <p className="ml-3 text-sm font-medium text-gray-400 group-hover:text-gray-300">{stepName}</p>
                </div>
                </button>
            )}
        </li>
    );
};

export default StepNavItem;

interface StepItemProps {
    item?: any;
    menuGoTo: (step: number) => void;
};
