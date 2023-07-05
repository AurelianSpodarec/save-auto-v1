import { useContext } from "react";
import { GuideContext } from "./contextGuide";

export function useGuide() {
    const context = useContext(GuideContext);

    if (!context) {
        throw new Error("useGuide must be used within an useGuide");
    }
    
    const { 
        menuList,
        menuNext,
        activeMenu,
        setSiteKeywords,
        nextStep,
    } = context;
    
    return {
        menuList,
        menuNext,
        activeMenu,
        setSiteKeywords,
        nextStep,
    };
}

export default useGuide;
