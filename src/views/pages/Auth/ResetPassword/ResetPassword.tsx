import { NavLink, useNavigate } from "react-router-dom";

import { AuthCard, AuthFooter, AuthForm, AuthSection } from "./../_components";

import Input from "atoms/Input/Input";
import Button from "atoms/Button/Button";
import { configPages } from "config/configPages";

function ResetPassword() {
    const navigate = useNavigate();

    function handlerNavigateToResetPassword() {
        navigate("/app");
    }

    return (
       <>
            <AuthCard title="Welcome <span class='text-[#08A593]'>Back</span>" >
            <AuthForm>

                <AuthSection>
                    <div className="space-y-6">
                        <div>
                            <Input placeholder="Your email" id="email" name="email" type="email" autoComplete="email" required />
                        </div>
                        <div>
                            <Input placeholder="Your password" id="password" name="password" type="password" autoComplete="password" required />
                        </div>
                    </div>
                </AuthSection>

                <Button type="submit" onClick={() => handlerNavigateToResetPassword()} size="lg" className="block w-full bg-[#020100]">Log In</Button>
                
            </AuthForm>
            </AuthCard>


            <AuthFooter>
                Don't have an account yet?{' '}
                <NavLink to={configPages.DASHBOARD.path + configPages.AUTH.path + configPages.REGISTER.path} className="font-semibold leading-6 text-[#08A593]">
                    Sign Up
                </NavLink>
            </AuthFooter>
        </>
    )
}

export default ResetPassword;

