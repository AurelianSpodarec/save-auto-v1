export interface BlogSite {
    id: number;
    title: string;
    tagline: string;
    domain: string;
    persona: string;
    description: string;
}

export interface BlogSiteCreate {
    description: string;
    keywords: string;
    money_keywords: string;
}