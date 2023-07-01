import Button from "atoms/Button/Button";
import { useEffect } from "react";

function StepDomainRegister({ stepCanShow }:any) {

    return (
        <div>
            {!stepCanShow && (
                <div>
                    Registering your domain name...
                </div>
            )}

            {stepCanShow && (
                <div>
                    Your domain has successfully been registered
                </div>
            )}
        </div>
    )
}

export default StepDomainRegister;
