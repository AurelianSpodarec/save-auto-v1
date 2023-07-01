import { NavLink, } from "react-router-dom";

import { AuthCard, AuthFooter, AuthForm, AuthSection } from "./_components";

import Input from "atoms/Input/Input";
import Button from "atoms/Button/Button";

import { configPages } from "config/configPages";

function ForgottenPassword() {

    return (
        <AuthCard  title="Reset your password">

            <p>Enter the email address associated with your account, and we'll send you a link to reset your password.</p>
            
            <AuthForm>
                <AuthSection>
                    <Input label="Email address" placeholder="Your email" id="email" name="email" type="email" autoComplete="email" required />
                </AuthSection>

                <Button type="submit" className="block w-full bg-[#020100]">Log In</Button>
            </AuthForm>

            <AuthFooter>
                <NavLink to={configPages.DASHBOARD.path + configPages.AUTH.path + configPages.LOGIN.path} className="font-semibold leading-6 text-[#08A593]">
                    Return to sign in
                </NavLink>
            </AuthFooter>

        </AuthCard>
    )
}

export default ForgottenPassword;
