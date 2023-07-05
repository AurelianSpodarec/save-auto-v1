import { NavLink, useLocation, useNavigate } from "react-router-dom";

import useAuth from "context/AuthContext/useAuth";
import useDashboard from "context/DashboardContext/useDashboard";

import { DropdownWrap, DropdownTrigger, DropdownPortal, DropdownContent, DropdownItem,  } from "molecules/Dropdown/Dropdown";

function Header() {

    const { user } = useAuth()
    const { handleToggleMobileMenu, mobileOpen } = useDashboard()

    return (
        <header className="flex lg:hidden sticky top-0 z-999 w-full border-b border-b-gray-600 min-h-[60px] drop-shadow-1 bg-[#181818]">
        <div className="flex justify-between items-center w-full relative mx-2">

            <div className="flex items-center space-x-4">
                <button onClick={() => handleToggleMobileMenu()} id="js-toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg id="js-toggleSidebarMobileHamburger" className={`w-6 h-6 ${mobileOpen ? "hidden" : ""}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg id="js-toggleSidebarMobileClose" className={`w-6 h-6 ${mobileOpen ? "" : "hidden"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                
                <div>
                    <span className="text-gray-100 text-lg font-bold">
                        Autosite    
                    </span>
                </div>
            </div>

            <div className="ml-auto">
            <DropdownWrap>
                <DropdownTrigger>
                <div className="flex items-center space-x-4">
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                        <defs></defs><path d="M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Zm0,8a3,3,0,1,1,3-3A3.0034,3.0034,0,0,1,16,16Z"></path>
                        <path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM10,26.3765V25a3.0033,3.0033,0,0,1,3-3h6a3.0033,3.0033,0,0,1,3,3v1.3765a11.8989,11.8989,0,0,1-12,0Zm13.9925-1.4507A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"></path>
                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1 fill-none" width="32" height="32"></rect>
                    </svg>
                </div>
                </DropdownTrigger>

                <DropdownPortal>
                <DropdownContent className="z-30">
                    <DropdownItem>
                        <NavLink to={`my-account`}>
                        My Account
                        </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        Logout
                    </DropdownItem>
                </DropdownContent>
                </DropdownPortal>

            </DropdownWrap>
            </div>

          
        </div>
        </header>
    )
}

export default Header;
