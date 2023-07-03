import { configMenu } from "config/menu/menuConfig";
import useDashboard from "context/DashboardContext/useDashboard";
import { NavLink } from "react-router-dom";

function NavigationMobile() {
    const { handleToggleMobileMenu, mobileOpen } = useDashboard();

    return (
        <div className={`lg:hidden fixed top-[60px] z-30 h-full w-full ${mobileOpen ? "" : "hidden"} `}>
        <div className="relative h-full w-full">

            <div className="flex absolute z-20 w-full top-0 right-0 bottom-0 left-0 pt-18 overflow-hidden bg-gray-900/50 h-full"></div>

            <div className="
                    bg-white h-full w-64
                    z-30
                    relative
                ">
                <div className="relative flex flex-col flex-1 min-h-0 h-full pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">

                    <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                        <ul>
                        {configMenu.primary.map((item) => {
                            return (
                                <NavLink to={item.url} className="flex items-center">
                                    <div className={`h-5 w-5 text-gray-200 text-center mx-3 relative`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-200">
                                        {item.name}
                                    </span>
                                </NavLink>
                            )
                        })}
                        </ul>
             
                    </div>

                </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default NavigationMobile;
