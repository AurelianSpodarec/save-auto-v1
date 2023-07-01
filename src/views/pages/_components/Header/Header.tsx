import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "context/AuthContext/useAuth";
import useDashboard from "context/DashboardContext/useDashboard";

import { DropdownWrap, DropdownTrigger, DropdownPortal, DropdownContent, DropdownItem,  } from "molecules/Dropdown/Dropdown";

function Header() {

    const { user } = useAuth()
    const { handleToggleMobileMenu } = useDashboard()

    return (
        <header className="flex lg:hidden sticky top-0 z-999 w-full border-b border-b-gray-600 min-h-[60px] drop-shadow-1 bg-[#24303f]">
        <div className="flex justify-between items-center w-full relative mx-2">

            <div className="flex items-center space-x-4">
                <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div>
                    <span className="text-gray-100 text-lg font-bold">
                        Autosite    
                    </span>
                </div>
            </div>

            <div className="ml-auto">
            {/* <DropdownWrap> 

                <DropdownTrigger>    
                <button type="button" className="flex flex-row items-center gap-4">
                    <div className="hidden text-right lg:block">
                        <span className="block text-sm font-medium text-white">{user && user.name}</span>
                        <span className="block text-xs text-white">Marketer</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 relative">
                    <div className="w-10 h-10">
                        <img className="rounded-full bg-cover h-full w-full" src="https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg" alt="User" />
                    </div>
                    </div>

                </button>
                </DropdownTrigger>

                <DropdownPortal>
                <DropdownContent>
                    <DropdownItem>
                        Item
                    </DropdownItem>
                </DropdownContent>
                </DropdownPortal>
    
            </DropdownWrap> */}
            </div>

          
        </div>
        </header>
    )
}

export default Header;
