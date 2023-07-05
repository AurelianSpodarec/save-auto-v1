import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useWebSocketBlog from "services/apis/autosite/websocket/useWebSocketBlog";
import { createBlogSite } from "services/apis/autosite/requests/blog";

import { configGuideMenu } from "./configGudeMenu";
import { configGuideSteps } from "./configGuideSteps";

import { IStep, IStepID } from "./IStep";
import { IGuideMenuItem } from "./IGuideMenu";

export const GuideContext = createContext<any>({});

function DEPRICATED_GuideProvider({ children }: any) {
    const [blogID, setBlogID] = useState<number | null>(null);
    const { startTask, socketResponse } = useWebSocketBlog(blogID);
    const navigate = useNavigate();
    console.log({configGuideMenu})
    
    const [menuList, setMenuList] = useState(configGuideMenu);
    const [activeMenuItem, setActiveMenuItem] = useState<IGuideMenuItem | undefined>({ id: "keywords" });

    const isMenuFirstItem = activeMenuItem && activeMenuItem.id === "keywords";
    
    const [stepsList, setStepsList] = useState<IStep[]>(configGuideSteps)
    const [activeStepID, setActiveStepID] = useState<IStepID | string>("keywords");
    const [activeStepItem, setActiveStepItem] = useState<IStep | string>("");
    const [stepExtra, setStepExtra] = useState()
    const [stepCanShow, setStepCanShow] = useState(false)
    const [stepCanGoNext, setStepCanGoNext] = useState(false);
    const [stepHasFinished, setStepHasFinished] = useState(false)
    const [siteKeywords, setSiteKeywords] = useState({
        description: "",
        keywords: "",
        money_keywords: "",
        domain: "",
    })

    // ===================================================================================
    // Menu Config
    // ===================================================================================
    
    function getIndexOfMenuItem() {
        if (!activeMenuItem) return;
        return menuList.findIndex((menuItem: IGuideMenuItem) => menuItem.id === activeMenuItem.id);
    }

    function menuGoTo(menuID:string) {
        const menuItemObject = menuList.find((menuItem:any) => menuItem.id === menuID);
        setActiveMenuItem(menuItemObject)
    }

    function menuNext() {
        const currentIndex = getIndexOfMenuItem();
        if(currentIndex === undefined) return

        if (currentIndex < menuList.length - 1) {
            const nextMenuItem = menuList[currentIndex + 1];
            setActiveMenuItem(nextMenuItem);
        }
    }

    // ===================================================================================
    // Navigation 
    // ===================================================================================

    function navSetAllItemsBeforeActiveIndexToComplete() {
        const activeIndex = getIndexOfMenuItem();
        if (activeIndex === undefined) return;
        
        const updatedMenuList:any = menuList.map((menuItem, index) => {
            if (index < activeIndex) {
                return { ...menuItem, status: "complete" };
            } else if (index === activeIndex) {
                return { ...menuItem, status: "active" };
            } else {
                return { ...menuItem, status: "upcoming" };
            }
        });
      
        setMenuList(updatedMenuList);
    }
      
    function setActiveNavItem() {
        setActiveMenuItem(activeMenuItem);
        navSetAllItemsBeforeActiveIndexToComplete();
    }
   
    useEffect(() => {
        setActiveNavItem()
    }, [activeMenuItem])

    // ===================================================================================
    // Steps Config
    // ===================================================================================

    function stepGoTo(stepID:IStepID) {
        // Use effect all stuff goes
        if(!stepID) return;
        setActiveStepID(stepID)
        setStepCanShow(false)
    }

    function getActiveStep() {
        if(!activeStepID) return;
        const activeStep = stepsList.find((step:IStep) => step.id === activeStepID)
        return activeStep;
    }

    // ===================================================================================
    // Ran in background
    // ===================================================================================

    // Maps the socket response data to the corresponding steps state in the front-end.
    // -----------------------------------------------------------------------------------
   function mapSocketResponseToSteps() {
        socketResponse && socketResponse.forEach((response) => {
            const stepIndex = stepsList.findIndex((step) => step.id === response.task);

            if (stepIndex !== -1 && response.status === "completed") {
                stepsList[stepIndex].data.extra = response.extra;
                stepsList[stepIndex].data.isAvailable = true;
            } else if (stepIndex === -1 && response.status === "completed") {
                const newStep = {
                    id: response.task,
                    data: {
                        extra: response.extra,
                        isAvailable: true
                    }
                };

                stepsList.push(newStep);
            }
        });

        setStepsList([...stepsList]);
    }

    // Enter timing 
    function timeElapsed() {
            const activeStep = getActiveStep(); 

            const timeoutID = setTimeout(() => {
                setStepsList(prevStepsList => {
                    const updatedStepsList = prevStepsList.map(step => {
                        if (step.id === activeStepID) {
                            return {
                                ...step,
                                options: {
                                    ...step.options,
                                    enter: {
                                        ...step.options.enter,
                                        elapsed: true,
                                    },
                                },
                            };
                        }
                        return step;
                    });
            
                    return updatedStepsList;
                });
            
            
            }, activeStep?.options.enter.minDuration || 0);
    
            return () => clearTimeout(timeoutID);
    }

    function exitTimeElapsed() {
        if(activeStepID === "keywords") return

        const activeStep = getActiveStep(); 
        if(activeStep?.options.enter.elapsed) return;

            const timeoutID = setTimeout(() => {
                setStepsList(prevStepsList => {
                    const updatedStepsList = prevStepsList.map(step => {
                        
                        if (step.id === activeStepID) {
                            return {
                                ...step,
                                options: {
                                    ...step.options,
                                    exit: {
                                        ...step.options.exit,
                                        elapsed: true,
                                    },
                                },
                            };
                        }

                        return step;
                    });

                    return updatedStepsList;
                });
            }, activeStep?.options.exit.minDuration || 0);
    
        return () => clearTimeout(timeoutID);
    }

    function canStepShow() {
        if(activeStepID === "keywords") {
            return (
                siteKeywords.description !== "" &&
                siteKeywords.keywords !== "" &&
                siteKeywords.money_keywords !== ""
            );
        } else {
            const activeStep = getActiveStep(); 
            if (!activeStep) return false;
        
            const dataExist = activeStep?.data?.isAvailable;
            const hasTimeElapsed = activeStep?.options?.enter.elapsed;
            return dataExist && hasTimeElapsed;
        }
    }

    function canStepGoNext() {
        if(activeStepID === "keywords") return
            
        const activeStep = getActiveStep(); 
        if (!activeStep) return false;
    
        const dataExist = activeStep?.data?.isAvailable;
        const hasTimeElapsed = activeStep?.options?.exit.elapsed;

        return dataExist && hasTimeElapsed;    
    }

    // ===================================================================================
    // Use Effects
    // ===================================================================================

    useEffect(() => {
         if (socketResponse.length > 0) {
            timeElapsed()
            console.log({activeStepID, socketResponse})
         }
    
    }, [activeStepID, socketResponse])
    
    useEffect(() => {
        exitTimeElapsed()
    }, [stepHasFinished]);

    useEffect(() => {
        const next = canStepGoNext()
        if(next) {
            setStepHasFinished(false)
            nextStep()
        }
    }, [stepsList])

    useEffect(() => {
        setStepHasFinished(false)
    }, [activeStepID])


    useEffect(() => {
        mapSocketResponseToSteps()
    }, [socketResponse])

    useEffect(() => {
        const stepShow = canStepShow();
        setStepCanShow(stepShow)

        const activeStep = getActiveStep(); 
        setActiveStepItem(activeStep)
        setStepExtra(activeStep?.data.extra)
    }, [stepsList])

    useEffect(() => {
        const stepShow = canStepShow();
        setStepCanShow(stepShow)
    }, [siteKeywords, activeStepID])

    useEffect(() => {
        setStepCanShow(false)
    }, [activeStepID])

    // // ===================================================================================
    // // Phases
    // // ===================================================================================

    useEffect(() => {
        if (blogID !== null) {
            startTask("persona");
        }
    }, [blogID])

    async function nextStep() {
        switch (activeStepID) {
            case "keywords":
                menuNext();
                stepGoTo("persona");

                if(import.meta.env.VITE_ENVIRONMENT === "live") {
                    const res = await createBlogSite(siteKeywords) 
                    console.log("res", res)
                    if(res) {
                        setBlogID(res.id)
                    }
                } else {
                    setBlogID(3)
                }

                break;
    
            case "persona":
                startTask("profile_picture");
                startTask("logo");
                startTask("writing_list");
                startTask("find_domain");

                menuNext();
                stepGoTo("profile_picture");
                break;
    
            case "profile_picture":
                menuNext();
                stepGoTo("logo");
                break;
    
            case "logo":
                menuNext();
                stepGoTo("find_domain");
                break;
    
            case "find_domain":
                startTask("register_domain");
                stepGoTo("register_domain");
                break;
    
            case "register_domain":
                startTask("setup_wordpress");
                
                menuNext();
                stepGoTo("setup_wordpress");
                break;
    
            case "setup_wordpress":
                stepGoTo("keywords");
                // setActiveMenu({ id: "keywords"})
                navigate(`app/sites/${blogID}`);
                break;
        }
    }

    // ===================================================================================
    //  Other
    // ===================================================================================

    function onInitialLoad() {
        menuGoTo("keywords")
        setStepCanShow(true)
    }

    useEffect(() => {
        onInitialLoad()
    }, [])

    const contextValues: any = {
        blogID,
        setBlogID,
        socketResponse,
        
        menuList,
        activeMenuItem,
        isMenuFirstItem,
        menuGoTo,
        menuNext,
        
        activeStepID,
        activeStepItem,
        stepGoTo,
        stepCanShow,
        nextStep,
        setSiteKeywords,
        setStepHasFinished,
        // itemCanShow,
        
        // stepData,
        stepExtra,
        // stepOptions,
        // stepCanShow
    };

    return (
        <GuideContext.Provider value={contextValues}>
        {children}
        </GuideContext.Provider>
    );
}

export default DEPRICATED_GuideProvider;
