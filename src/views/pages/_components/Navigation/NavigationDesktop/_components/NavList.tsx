import { useLocation, } from 'react-router-dom';
import NavItem from "./NavItem";
import { configPages } from 'config/configPages';

function NavList({ data, menuOpen, menuExpanded }:Props) {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="px-3  bg-gray-800 dark:divide-gray-700">
        <ul className="pb-2 space-y-2">
            
            {data && data.map(((item:any) => {
                const isDashboardItem = item.id === "dashboard";
                const isDashboardActive = isDashboardItem && pathname === "/app";
                const isSubmenuItemActive = !isDashboardItem && pathname.startsWith(`${configPages.DASHBOARD.path}/${item.id}`);
                const existsInData = data.map((item:any) => item.url === pathname)[0]
                const isActive = isDashboardActive || isSubmenuItemActive || existsInData;

                return <NavItem menuExpanded={menuExpanded} menuOpen={menuOpen} key={item.url} item={item} isActive={isActive}/>
            }))}

        </ul>
        </div>
    )
}

export default NavList;

interface Props {
    data: any;
    menuExpanded?: boolean;
    menuOpen?: boolean;
}
