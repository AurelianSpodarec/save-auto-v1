import { Link } from "react-router-dom";

function NavItem({ item, isActive, menuExpanded, menuOpen }:NavItemProps) {
    return (
        <li className={`h-full`}>
        <Link 
            to={`${item.url}`} 
            className={`
                ${isActive ? "border-purple-500 bg-[#313334] fill-gray-200 text-gray-200 mr-auto" : "border-transparent"}  
            `}>
            <div className="flex items-center align-middle space-x-2 h-6">
                <div className={`h-5 w-5 text-center mx-3 relative`}>
                    {item.icon}
                </div>
                <span className={`${menuOpen || menuExpanded ? "" : "sr-only"}`}>{item.name}</span> 
            </div>
        </Link>
        </li>
    )
}

export default NavItem;

interface NavItemProps {
    item: any;
    isActive: boolean;
    menuExpanded?: boolean;
    menuOpen?: boolean;
}


{/* <li className={`
cursor-default fill-gray-500 text-gray-500 hover:fill-gray-300 hover:text-gray-400 transition
max-h-[45px]
`}>
<Link 
to={`${item.url}`} 
className={`
flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700
    ${isActive ? "border-purple-500 bg-[#313334] fill-gray-200 text-gray-200 mr-auto" : "border-transparent"}  
`}>
<div className="flex items-center align-middle space-x-2 h-6">
    <div className={`h-5 w-5 text-center mx-3 relative`}>
        {item.icon}
    </div>
    <span className={`${menuOpen || menuExpanded ? "" : "sr-only"}`}>{item.name}</span> 
</div>
</Link>
</li> */}