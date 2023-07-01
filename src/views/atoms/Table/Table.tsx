import React, { HTMLAttributes } from 'react';

function Table({ children, className, ...props }: TableProps): JSX.Element {
    return (
        <div className="overflow-y-hidden overflow-x-auto shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className={`${className} min-w-full`} {...props}>
            {children}
        </table>
        </div>
    );
}

export default Table;

interface TableProps extends HTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
    className?: string;
}
