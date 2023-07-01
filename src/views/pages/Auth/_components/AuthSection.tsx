import { ReactNode } from 'react';

function AuthSection({ children, className }:AuthSectionProps) {
    return (
        <div className={`${className} mb-10`}>
            {children}
        </div>
    )
}

export default AuthSection;

interface AuthSectionProps {
    children: ReactNode;
    className?: string;
}
