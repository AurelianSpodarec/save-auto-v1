import StepFindDomain from "../_steps/StepFindDomain/StepFindDomain";
import StepRegisterDomain from "../_steps/StepRegisterDomain/StepRegisterDomain";

function MenuDomain() {
    return (
        <>
            {/* Show and complete this step */}
            <StepFindDomain />

            {/* Show and compete this step then */}
            <StepRegisterDomain />
        </>
    )
}

export default MenuDomain;
