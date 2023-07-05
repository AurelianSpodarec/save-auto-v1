import { configMenu } from "config/menu/menuConfig";
import useDashboard from "context/DashboardContext/useDashboard";
import NavList from "../_components/NavList";

function NavigationMobile() {
    const { handleToggleMobileMenu, mobileOpen } = useDashboard();
  
    return (
        <div className={`lg:hidden fixed top-[60px] bg-[#181818] z-30 h-full w-full ${mobileOpen ? "" : "hidden"} `}>
        <div className="relative h-full w-full">

            <div className="flex absolute z-20 w-full top-0 right-0 bottom-0 left-0 pt-18 overflow-hidden bg-gray-900/50 h-full"></div>

            <div className="bg-white h-full w-64 z-30 relative">

                <div className="relative flex flex-col flex-1 min-h-0 h-full pt-0 border-r border-gray-200 bg-[#181818] dark:border-gray-700">
                <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                    <NavList data={configMenu.primary} />
                </div>
                </div>

            </div>

        </div>
        </div>
    )
}

export default NavigationMobile;
