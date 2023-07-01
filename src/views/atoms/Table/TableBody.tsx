import React, { HTMLAttributes } from 'react';


function TableBody({ children, className, ...props }: TableBodyProps): JSX.Element {
    return (
        <tbody className={`${className} divide-y divide-gray-200 bg-white`} {...props}>
        {children}
        </tbody>
    );
}

export default TableBody;

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}