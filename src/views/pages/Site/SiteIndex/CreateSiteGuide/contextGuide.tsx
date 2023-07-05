import react, { useState, useEffect, useMemo, createContext } from "react";

import useWebSocketBlog from "services/apis/autosite/websocket/useWebSocketBlog";
import { createBlogSite } from "services/apis/autosite/requests/blog";

import { configGuideMenu } from "./configGuideMenu";


export const GuideContext = createContext<any>({});

function GuideProvider({ children }: { children: React.ReactNode }) {
    const [blogID, setBlogID] = useState();

    const [websocketData, setWebsocketData] = useState()
    const { startTask, socketResponse } = useWebSocketBlog(blogID);

    const [siteKeywords, setSiteKeywords] = useState({
        description: "Woman that loves taking care od dogs",
        keywords: "dog taking care",
        money_keywords: "dog",
        domain: null,
    })

    const [menuList, setMenuList] = useState(configGuideMenu);
    const [activeMenu, setActiveMenu] = useState(menuList[0]);

    // ===================================================================================
    // Menu Config
    // ===================================================================================
    
    function menuNext() {
        const activeMenuItem = menuList.findIndex((item) => item === activeMenu);
        const currentItem = menuList[activeMenuItem + 1];
      
        if (currentItem && activeMenuItem < menuList.length - 1) {
            setActiveMenu(currentItem);
        }
    }


    // Need to store the steps data somewhere in an array or something
    // Ran in background
    // ===================================================================================
    // function mapSocketResponseToSteps() {
    //     socketResponse && socketResponse.forEach((response) => {
    //         const stepIndex = websocketData.findIndex((step) => step.id === response.task);
    //         const newStep = {
    //             id: response.task,
    //             extra: response.extra,
    //         };
    //         websocketData.push(newStep);
    //     });
    //     setWebsocketData([...websocketData]);
    // }

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
        menuNext,
        activeMenu,
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
