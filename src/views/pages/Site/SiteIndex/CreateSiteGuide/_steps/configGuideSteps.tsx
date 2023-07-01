type APIStepID =
    | IStepPersona
    | IStepProfilePicture
    | IStepLogo
    | IStepFindDomain
    | IStepRegisterDomain
    | IStepSetupWordpress
    | IStepWritingList;

interface IStepPersona {
    id: "persona";
    extra: {
        author_name: string;
        persona: string;
        title: string;
    };
}

interface IStepProfilePicture {
    id: "profile_picture";
    extra: {
        image_url: string;
    };
}

interface IStepLogo {
    id: "logo";
    extra: {
        image_url: string;
    };
}

interface IStepFindDomain {
    id: "find_domain";
    extra: [];
}

interface IStepRegisterDomain {
    id: "register_domain";
    extra: {
        image_url: string;
    };
}

interface IStepSetupWordpress {
    id: "setup_wordpress";
    extra: null;
}

interface IStepWritingList {
    id: "writing_list";
    extra: null;
}


const apiSteps = [
    {
        id: "persona",
        extra: {
            author_name: "",
            persona: "",
            title: "",
        }
    },
    {
        id: "profile_picture",
        extra: {
            image_url: ""
        }
    },
    {
        id: "logo",
        extra: {
            image_url: ""
        }
    },
    {
        id: "find_domain",
        extra: []
    },
    {
        id: "register_domain",
        extra: {
            image_url: ""
        }
    },
    {
        id: "setup_wordpress",
        extra: null,
    },
    {
        id: "writing_list",
        extra: null,
    }
]

// / interface APISteps {
    //     id:
    // }
    
    // There will be an extra step: Keywords, and possibly Launch or more
    
    // Custom Stpes: Keywords and Launch
    
    // API Steps - might or might not exist in the response, but one of them will exist
    
    // config guide and api steps are two different things

export const configGuideSteps = [

]
