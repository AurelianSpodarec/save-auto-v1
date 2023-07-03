import react, { useState, useEffect, createContext } from "react";

import useWebSocketGuide from "services/apis/autosite/websocket/useWebSocketGuide";
import { createBlogSite } from "services/apis/autosite/requests/blog";

import { configGuideMenu } from "./configGuideMenu";


export const GuideContext = createContext<any>({});

function GuideProvider({ children }: { children: React.ReactNode }) {
    const [blogID, setBlogID] = useState();
    const [siteKeywords, setSiteKeywords] = useState({
        description: "Woman that loves taking care od dogs",
        keywords: "dog taking care",
        money_keywords: "dog",
        domain: null,
    })
    const [activeStepID, setActiveStepID] = useState("keywords");
    const [activeMenuID, setActiveMenuID] = useState("keywords");

    const [menuList, setMenuList] = useState(configGuideMenu);

    const [websocketData, setWebsocketData] = useState()
    const { startTask, socketResponse } = useWebSocketGuide(blogID);


    // Need to store the steps data somewhere in an array or something
    // Ran in background
    // ===================================================================================
    function mapSocketResponseToSteps() {
        socketResponse && socketResponse.forEach((response) => {
            const stepIndex = websocketData.findIndex((step) => step.id === response.task);
            const newStep = {
                id: response.task,
                extra: response.extra,
            };
            websocketData.push(newStep);
        }); // <-- Missing comma here
        setWebsocketData([...websocketData]);
    }


    // ===================================================================================
    // Functions
    // ===================================================================================

    function nextStep() {
        setBlogID(3)
    }

   
    // ===================================================================================
    // Use Effects
    // ===================================================================================

    // useEffect(() => {
    //     mapSocketResponseToSteps()
    // }, [socketResponse])

    useEffect(() => {
        if (blogID !== undefined) {
            console.log(blogID)
            startTask("persona");
            startTask("profile_picture");
            startTask("logo")
        }
    }, [blogID])


    const contextValues = {
        menuList,
        setSiteKeywords,
        nextStep
    }

    return (
        <GuideContext.Provider value={contextValues}>
            {children}
        </GuideContext.Provider>
    );
}

export default GuideProvider;
