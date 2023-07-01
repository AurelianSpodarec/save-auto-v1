import { ReactNode } from "react";
import Button from "atoms/Button/Button";

function PageItem({ label, children, activePage, pathName, onClick, onLink }: PageItemProps) {
const isActive = activePage === children;

return (
        <Button
            onClick={onClick}
            className={isActive ? "border-2 border-yellow-500/20" : ""}
        >
            {children ? children : label}
        </Button>
    );
}

export default PageItem;

interface PageItemProps {
    label?: string;
    children?: ReactNode;
    href?: string;
    activePage?: number;
    pathName?: string;
    onClick?: () => void;
    onLink?: string;
}
