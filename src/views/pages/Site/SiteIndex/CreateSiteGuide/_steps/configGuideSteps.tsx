
// Steps Order 
//  - Keywords (not API)
//  - Persona
//  - Profile Picture
//  - Logo
//  - Find Domain
//  - Register Domain
//  - WordPress
//  - Launch (not API)
//



export const configGuideSteps = [
    {
        id: "keywords",
    },
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
        id: "launch",
    }
]
