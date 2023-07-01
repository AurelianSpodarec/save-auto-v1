import { useEffect } from 'react';
import Skeleton from "atoms/Skeleton";

import useGuide from "../../_logic/useGuide";
import { configApp } from "config/configApp";

function StepProfilePicture() {
    // const { stepExtra, stepCanShow, setStepHasFinished } = useGuide();
    
    // useEffect(() => {
    //     if(stepCanShow) {
    //         setStepHasFinished(true)
    //     }
    // }, [stepCanShow])

    return (
        <div className="h-full w-full flex items-center -mt-10">
            {/* <div className="h-[20rem] w-[20rem] mx-auto">
                {!stepCanShow && <Skeleton type="image" height="h-full" width="w-full" />}
                {stepCanShow && stepExtra?.image_url &&
                    <img src={`${configApp.http}${configApp.url}${stepExtra && stepExtra.image_url}`} className="w-full h-full" />
                }
            </div> */}
        </div>
    )
}

export default StepProfilePicture;
