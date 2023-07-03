import { useContext } from "react";
import { GuideContext } from "./contextGuide";

export function useGuide() {
    const context = useContext(GuideContext);

    if (!context) {
        throw new Error("useGuide must be used within an useGuide");
    }
   
    const { 
        menuList,
        setSiteKeywords,
        nextStep
    } = context;

    return {
        menuList,
        setSiteKeywords,
        nextStep
    };
}

export default useGuide;
