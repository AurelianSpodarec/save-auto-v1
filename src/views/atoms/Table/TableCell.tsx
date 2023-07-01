import React, { HTMLAttributes } from 'react';

function TableCell({ children, className, scope, ...props }: TableCellProps): JSX.Element {
    return (
        <td scope={scope} className={`whitespace-nowrap px-3 pl-6 py-3.5 text-gray-900 text-sm ${className}`} {...props}>
            {children}
        </td>
    );
}

export default TableCell;

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    className?: string;
    scope?: string;
}
