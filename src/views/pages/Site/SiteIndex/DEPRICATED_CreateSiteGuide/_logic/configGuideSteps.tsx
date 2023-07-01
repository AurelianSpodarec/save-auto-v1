import { IStep } from "./IStep";

export const configGuideSteps: IStep[] = [
    {
        id: "persona",
        stepCompleted: false,
        canShow: false,
        data: {
            isAvailable: false,
            extra: {
                author_name: "",
                persona: "",
                title: "",
            }
        },
        options: {
            enter: {
                elapsed: false,
                minDuration: 4000,
                skip: false,
                autoplay: false
            },
            exit: {
                elapsed: false,
                minDuration: 3000,
                skip: false,
                autoplay: false,
            },
        }
    },
    {
        id: "profile_picture",
        stepCompleted: false,
        canShow: false,
        data: {
            isAvailable: false,
            extra: {
                image_url: ""
            }
        },
        options: {
            enter: {
                elapsed: false,
                minDuration: 3000,
                skip: false,
                autoplay: false
            },
            exit: {
                elapsed: false,
                minDuration: 2000,
                skip: false,
                autoplay: false,
            },
        }
    },
    {
        id: "logo",
        stepCompleted: false,
        canShow: false,
        data: {
            isAvailable: false,
            extra: {
                image_url: ""
            }
        },
        options: {
            enter: {
                elapsed: false,
                minDuration: 6000,
                skip: false,
                autoplay: false
            },
            exit: {
                elapsed: false,
                minDuration: 2000,
                skip: false,
                autoplay: false,
            },
        }
    },
    {
        id: "find_domain",
        stepCompleted: false,
        canShow: false,
        data: {
            isAvailable: false,
            extra: {
                image_url: ""
            }
        },
        options: {
            enter: {
                elapsed: false,
                minDuration: 2000,
                skip: false,
                autoplay: false
            },
            exit: {
                elapsed: false,
                minDuration: 2000,
                skip: false,
                autoplay: false,
            },
        }
    },
    {
        id: "register_domain",
        stepCompleted: false,
        canShow: false,
        data: {
            isAvailable: false,
            extra: {
                image_url: ""
            }
        },
        options: {
            enter: {
                elapsed: false,
                minDuration: 2000,
                skip: false,
                autoplay: false
            },
            exit: {
                elapsed: false,
                minDuration: 2000,
                skip: false,
                autoplay: false,
            },
        }
    },
    {
        id: "setup_wordpress",
        stepCompleted: false,
        canShow: false,
        data: {
            isAvailable: false,
            extra: {
                image_url: ""
            }
        },
        options: {
            enter: {
                elapsed: false,
                minDuration: 5000,
                skip: false,
                autoplay: false
            },
            exit: {
                elapsed: false,
                minDuration: 2000,
                skip: false,
                autoplay: false,
            },
        }
    }
]
