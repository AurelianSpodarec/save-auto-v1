import { ReactNode } from 'react';

import Card from "atoms/Card";
import { AuthHeader } from ".";
import AuthLogo from './AuthLogo';

function AuthContent({ children, title }:AuthContentProps) {
    return (
        <div className="px-4">
        <AuthLogo />
        <div className="sm:mx-auto w-full">
            <Card className="py-10 lg:py-16 px-5 md:px-8 lg:px-16 shadow-xl">
                <AuthHeader title={title} />
                {children}
            </Card>
        </div>
        </div>
    )
}

export default AuthContent;

interface AuthContentProps {
    children: ReactNode;
    title: string;
}
