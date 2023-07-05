import { Link } from "react-router-dom";
import helperNavigation from "utils/helperNavigation";

function NavItem({ item, menu, menuExpanded, menuOpen }:Props) {
    const isActive = helperNavigation.isActiveURL(item, menu);
    return (
        <Link 
            to={item.url} 
            className={`
                cursor-default flex items-center p-2 text-base text-gray-900 rounded-lg group dark:text-gray-200 dark:hover:bg-gray-700
                ${isActive ? "bg-[#2b2b2b] text-gray-200" : ""}
            `}>
            <div className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                {item.icon}
            </div>
            <span className="ml-3" sidebar-toggle-item="">{item.name}</span>
        </Link>
    )
}

export default NavItem;

interface Props {
    item: any;
    menu: any;
    isActive: boolean;
    menuExpanded?: boolean;
    menuOpen?: boolean;
}
