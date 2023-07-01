export interface IGuideMenuItem {
    id: string;
    name: string;
    description: string;
    icon: any;
    status: "active" | "upcoming" | "complete";
    component: JSX.Element;
}