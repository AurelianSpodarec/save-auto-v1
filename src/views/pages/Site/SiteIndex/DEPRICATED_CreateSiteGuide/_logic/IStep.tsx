export type IStepID = "keywords" | "launch" |  "persona" | "profile_picture" | "logo" | "find_domain" | "register_domain" | "setup_wordpress";

export interface IStep {
    id: IStepID;
    stepCompleted: boolean;
    canShow: boolean;
    data: {
        isAvailable: boolean;
        extra: any;
    };
    options: {
        enter: {
            elapsed: boolean;
            minDuration: number | null;
            skip: boolean;
            autoplay: boolean;
        };
        exit: {
            elapsed: boolean;
            minDuration: number | null;
            skip: boolean;
            autoplay: boolean;
        };
    }
}
