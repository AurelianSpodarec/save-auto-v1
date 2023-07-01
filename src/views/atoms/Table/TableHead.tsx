import React, { HTMLAttributes } from 'react';


function TableHead({ children, className, ...props }: TableHeadProps): JSX.Element {
    return (
        <thead className={`${className} bg-gray-50`} {...props}>
            {children}
        </thead>
    );
}

export default TableHead;

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}
