import { Link, NavLink } from "react-router-dom";

import { AuthCard, AuthFooter } from "../_components";
import Button from "atoms/Button/Button";

function RegisterConfirm() {
    return (
       <>
            <AuthCard title="Verify your email">
                <p>
                    We created an account for you. Please confirm your e-mail address and start enjoying AutoSite!
                </p>

                <Button disabled type="submit" className="block w-full bg-[#020100]">Log In</Button>

                <AuthFooter align="text-left">
                    Questions? Email us at{' '}
                    <Link to="email:hello@autositeai.com" className="font-semibold leading-6 text-[#08A593]">
                        hello@autositeai.com
                    </Link>
                </AuthFooter>
            </AuthCard> 
        </>
    )
}

export default RegisterConfirm;

