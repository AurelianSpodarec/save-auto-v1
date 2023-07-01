import react, { useState, useEffect, createContext } from "react";

import useWebSocketGuide from "services/apis/autosite/websocket/useWebSocketGuide";
import { createBlogSite } from "services/apis/autosite/requests/blog";

import { configGuideMenu } from "./_menu/configGuideMenu";

export const GuideContext = createContext<any>({});

function GuideProvider({ children }: { children: React.ReactNode }) {
    const [blogID, setBlogID] = useState();
    const [siteKeywords, setSiteKeywords] = useState({
        description: "Woman that loves taking care od dogs",
        keywords: "dog taking care",
        money_keywords: "dog",
        domain: null,
    })
    const [activeStepID, setActiveStepID] = useState({ id: "keywords" })
    const [menuList, setMenuList] = useState(configGuideMenu);

    const { startTask, socketResponse } = useWebSocketGuide(blogID);

    // Need to store the steps data somewhere in an array or something
    // Ran in background
    // ===================================================================================
    function mapSocketResponseToSteps() {
        socketResponse && socketResponse.forEach((response) => {

            const stepIndex = stepsList.findIndex((step) => step.id === response.task);

            if (stepIndex !== -1 && response.status === "completed") {
                stepsList[stepIndex].data.extra = response.extra;
                stepsList[stepIndex].data.isAvailable = true;
            } else if (stepIndex === -1 && response.status === "completed") {
                const newStep = {
                    id: response.task,
                    extra: response.extra,
                };

                stepsList.push(newStep);
            }
        });

        setStepsList([...stepsList]);
    }


    // ===================================================================================
    // Functions
    // ===================================================================================

    async function nextStep() {
        setBlogID(3)
    }

   
    // ===================================================================================
    // Use Effects
    // ===================================================================================

    // useEffect(() => {
    //     if (blogID !== null) {
    //         startTask("persona");
    //     }
    // }, [blogID])

    const contextValues ={
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
