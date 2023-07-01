import LoadingTextualProgress from "molecules/LoadingTextualProgress/LoadingTextualProgress";
import useGuide from "../../_logic/useGuide";
import { dataLoadingWordPressPhases } from "./dataLoadingWordPressPhases";

function StepWordPress() {
    // const { stepCanShow, activeStepID } = useGuide();

    return (
        <div>
            {/* {!stepCanShow && activeStepID === "setup_wordpress"  && <LoadingTextualProgress data={dataLoadingWordPressPhases} />}
            {stepCanShow && (
                <div>
                    WordPress Setup FINISHED!
                </div>
            )} */}
        </div>
    )
}

export default StepWordPress;
