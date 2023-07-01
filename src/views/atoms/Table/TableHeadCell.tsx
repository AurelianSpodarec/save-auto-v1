import React, { HTMLAttributes } from 'react';

function TableHeadCell({ children, className, scope, ...props }: TableHeadCellProps): JSX.Element {
    return (
        <th scope={scope} className={`${className} text-left py-3.5 pl-6 pr-3 text-gray-900`} {...props}>
            {children}
        </th>
    );
}

export default TableHeadCell;

interface TableHeadCellProps extends HTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    className?: string;
    scope?: string;
}
