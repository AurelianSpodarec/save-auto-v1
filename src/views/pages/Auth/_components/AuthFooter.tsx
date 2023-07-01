import { ReactNode } from 'react';

function AuthFooter({ children, className, align = "text-center" }:AuthFooterProps) {
    return (
        <div className={`${align} ${className ? className : ""} mt-10 text-sm text-gray-500`}>
            {children}
        </div>
    )
}

export default AuthFooter;

interface AuthFooterProps {
    children: ReactNode;
    className?: string;
    align?: "text-center" | "text-left" | "text-right";
}
