import { NavLink } from "react-router-dom";
import { configPages } from "config/configPages";

// function SiteNavItem({ id, children, item, isActive, onClick, className }: SiteNavItemProps) {
//     const renderNavItem = () => {
//         if (!item) return children;

//         const navLinkUrl = `${configPages.  DASHBOARD.path}${configPages.SITES.path}/${id}${item.url}`;
//         return (
//             <NavLink to={navLinkUrl}>
//                 <div
//                 className={`
//                 my-1 block rounded bg-[#0c0c0c]  py-1 px-1 text-xs font-medium uppercase leading-tight text-neutral-500 md:mr-4
//                 ${className}
//                 ${
//                     isActive
//                     ? "border-primary-500 text-gray-200 fill-gray-200 bg-black"
//                     : "border-transparent fill-gray-500 text-gray-400 hover:text-gray-700"
//                 }`}
//                 >
//                 <div className="flex justify-center items-center space-x-2">
//                     {item.icon && <span className="h-4 w-4">{item.icon}</span>}
//                     <span>{item.name}</span>
//                 </div>
//                 </div>
//             </NavLink>
//         );
//     };

//     return (
//         <button className={`border border-gray-700 ${className}`} onClick={onClick}>
//             {renderNavItem()}
//         </button>
//     );
// }


function SiteNavItem({ id, children, item, isActive, onClick, className }: SiteNavItemProps) {
    const renderNavItem = () => {
        if (!item) return children;

        const navLinkUrl = `${configPages.DASHBOARD.path}${configPages.SITES.path}/${id}${item.url}`;
        return (
            <NavLink to={navLinkUrl}>
                <div
                className={`
                    py-2 px-1 text-sm font-medium 
                    ${className}
                    ${
                        isActive
                        ? "border-primary-500 text-gray-200 fill-gray-200 bg-black"
                        : "border-transparent fill-gray-500 text-gray-500 hover:text-gray-700"
                    }`}
                >
                <div className="flex justify-center items-center space-x-2">
                    {item.icon && <span className="h-4 w-4">{item.icon}</span>}
                    <span>{item.name}</span>
                </div>
                </div>
            </NavLink>
        );
    };

    return (
        <button className={`border border-gray-700 ${item ? "rounded-lg overflow-hidden" : ""} ${className}`} onClick={onClick}>
            {renderNavItem()}
        </button>
    );
}

export default SiteNavItem;

interface SiteNavItemProps {
    id?: string;
    item?: any;
    isActive?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

