import { useLocation, } from 'react-router-dom';
import NavItem from "./NavItem";
import { configPages } from 'config/configPages';

function NavList({ data, className, menuOpen, menuExpanded, bottom = false }:NavListProps) {
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

                // return <NavItem menuExpanded={menuExpanded} menuOpen={menuOpen} key={item.url} item={item} isActive={isActive}/>
                return (
                    <li>
                        <a href="https://flowbite-admin-dashboard.vercel.app/" className="cursor-default flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                            {/* <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                            <div className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                {item.icon}
                            </div>
                            <span className="ml-3" sidebar-toggle-item="">{item.name}</span>
                        </a>
                    </li>
                )
            }))}
    
            {/* <li>
                <a href="https://flowbite-admin-dashboard.vercel.app/" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                    <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span className="ml-3" sidebar-toggle-item="">Dashboard</span>
                </a>
            </li>
            <li>
                <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-layouts" data-collapse-toggle="dropdown-layouts" aria-expanded="false">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Layouts</span>
                    <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-layouts" className="py-2 space-y-2 hidden">
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/layouts/stacked/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Stacked</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/layouts/sidebar/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sidebar</a>
                </li>
                </ul>
            </li> */}
        </ul>
        </div>
    // </div>
    
    // </div>
        // <nav className={`flex flex-1 flex-col ${className}`}>
        // <ul role="list" className={`flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 ${bottom ? "justify-end" : ""}`}>
    
        //     {data && data.map(((item:any) => {
        //         const isDashboardItem = item.id === "dashboard";
        //         const isDashboardActive = isDashboardItem && pathname === "/app";
        //         const isSubmenuItemActive = !isDashboardItem && pathname.startsWith(`${configPages.DASHBOARD.path}/${item.id}`);
        //         const existsInData = data.map((item:any) => item.url === pathname)[0]
        //         const isActive = isDashboardActive || isSubmenuItemActive || existsInData;

        //         return <NavItem menuExpanded={menuExpanded} menuOpen={menuOpen} key={item.url} item={item} isActive={isActive}/>
        //     }))}
    
        // </ul>
        // </nav>
    )
}

export default NavList;

interface NavListProps {
    data: any;
    className?: string;
    bottom?: boolean;
    menuExpanded?: boolean;
    menuOpen?: boolean;
}
