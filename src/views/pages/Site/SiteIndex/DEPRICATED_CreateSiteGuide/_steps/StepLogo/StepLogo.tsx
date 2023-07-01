import Skeleton from "atoms/Skeleton";

import useGuide from "../../_logic/useGuide";
import { configApp } from "config/configApp";
import { useEffect } from "react";

function StepLogo() {
    // const { stepExtra, stepCanShow, setStepHasFinished } = useGuide();
    
    return (
        <div className="h-full w-full flex items-center -mt-10">
            {/* <div className="h-[20rem] w-[20rem] mx-auto">
                {!stepCanShow && <Skeleton type="image" height="h-full" width="w-full" />}
                {stepCanShow && stepExtra?.image_url && 
                    <img src={`${configApp.http}${configApp.url}${stepExtra && stepExtra.image_url}`} className="h-full w-full" />
                }
            </div> */}
        </div>
    )
}

export default StepLogo;
