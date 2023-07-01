import { useEffect } from 'react';

function StepDomainFind({ stepCanShow }:any) {

    return (
        <div>
            {!stepCanShow && (
                <div>
                    Finding Domain
                </div>
            )}

            {stepCanShow && (
                <div>
                    Your Domain Has been found!
                </div>
            )}
        </div>
    )
}

export default StepDomainFind;
