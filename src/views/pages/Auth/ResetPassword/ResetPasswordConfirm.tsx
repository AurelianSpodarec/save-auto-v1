import { NavLink, Navigate, useNavigate } from "react-router-dom";

import { configPages } from "config/configPages";
import useAuth from "context/AuthContext/useAuth";

import { AuthCard, AuthFooter, AuthHeader } from "./../_components";

function ResetPasswordConfirm() {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    function handlerResetPasswordConfirm() {
        setUser({
            name: "Hi",
        })
        navigate("/app");
    }

    return (
       <>
            <AuthHeader title="Welcome <span class='text-[#08A593]'>Back</span>" description="Glad to see you, Again!" />

            <AuthCard>
                Reset password Confirm
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

export default ResetPasswordConfirm;

