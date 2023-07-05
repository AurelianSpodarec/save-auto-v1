import react, { useState, useEffect, createContext } from "react";

import useWebSocketBlog from "services/apis/autosite/websocket/useWebSocketBlog";
import { createBlogSite } from "services/apis/autosite/requests/blog";

import { configGuideMenu } from "./configGudeMenu";

export const GuideContext = createContext<any>({});

function GuideProvider({ children }: { children: React.ReactNode }) {
    const [blogID, setBlogID] = useState();
    const [siteKeywords, setSiteKeywords] = useState({
        description: "",
        keywords: "",
        money_keywords: "",
        domain: "",
    })
    const [activeStepID, setActiveStepID] = useState({ id: "keywords" })
    const [menuList, setMenuList] = useState(configGuideMenu);

    const { startTask, socketResponse } = useWebSocketBlog(blogID);

    // ===================================================================================
    // Functions
    // ===================================================================================

    async function nextStep() {
        switch (activeStepID) {
        case "keywords":
        
    
            if (import.meta.env.VITE_ENVIRONMENT === "live") {
                const res = await createBlogSite(siteKeywords);
                console.log({ res });
                setBlogID(res.id);
            } else {
                setBlogID(3);
            }
            break;
        }
    }
      

    // Ran in background
    // ===================================================================================


    // ===================================================================================
    // Use Effects
    // ===================================================================================

    useEffect(() => {
        if (blogID !== null) {
            startTask("persona");
        }
    }, [blogID])

    useEffect(() => {
        console.log({menuList, configGuideMenu})
    }, [])

    const contextValues ={
        menuList,
        setSiteKeywords
    }

    return (
        <GuideContext.Provider value={contextValues}>
            {children}
        </GuideContext.Provider>
    );
}

export default GuideProvider;
