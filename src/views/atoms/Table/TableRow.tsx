import React, { HTMLAttributes } from 'react';

function TableRow({ children, className, ...props }: TableRowProps): JSX.Element {
    return (
        <tr className={className} {...props}>
            {children}
        </tr>
    );
}

export default TableRow;

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
    className?: string;
}
