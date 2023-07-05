import useDashboard from "context/DashboardContext/useDashboard";
import useAuth from "context/AuthContext/useAuth";
import { Link, NavLink } from "react-router-dom";
import { configApp } from "config/configApp";
import NavList from "../_components/NavList";
import { configMenu } from "config/menu/menuConfig";
import { DropdownContent, DropdownItem, DropdownPortal, DropdownTrigger, DropdownWrap } from "molecules/Dropdown/Dropdown";

function NavigationDesktop() {

    const { 
        menuOpen,
        menuExpanded, 
    } = useDashboard()

    const { logout } = useAuth();

    return (
        <aside className={`
                hidden lg:flex
                fixed left-0 h-screen
                w-72
                bg-[#181818]
            `}
        >
            <nav className="flex flex-col h-full w-full text-white">
                <div>
                <Link to="/" className={`flex shrink-0 p-4 ${!menuOpen ? "group-hover:hidden block" : "hidden "} `}> 
                    <div className="flex items-center justify-center">
                        
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd"></path>
                        </svg>

                        <span className={`ml-3 text-xl font-bold`}>{configApp.name}</span>
                    </div>
                </Link>
                </div>

                <div className="overflow-auto h-full sidebar-scrollbar ">
                    <NavList menuExpanded={menuExpanded} menuOpen={menuOpen} data={configMenu.primary} />
                </div>

                <div className="px-4 py-2">
                <DropdownWrap>
                    <DropdownTrigger>
                    <div className="flex items-center space-x-4">
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                            <defs></defs><path d="M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Zm0,8a3,3,0,1,1,3-3A3.0034,3.0034,0,0,1,16,16Z"></path>
                            <path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM10,26.3765V25a3.0033,3.0033,0,0,1,3-3h6a3.0033,3.0033,0,0,1,3,3v1.3765a11.8989,11.8989,0,0,1-12,0Zm13.9925-1.4507A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"></path>
                            <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1 fill-none" width="32" height="32"></rect>
                        </svg>
                        {menuOpen || menuExpanded && 
                        <div className="font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                        }
                    </div>
                    </DropdownTrigger>

                    <DropdownPortal>
                    <DropdownContent className="z-30">
                        <DropdownItem onClick={() => logout()}>
                            Logout
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink to={`my-account`}>
                            My Account
                            </NavLink>
                        </DropdownItem>
                    </DropdownContent>
                    </DropdownPortal>

                </DropdownWrap>
                </div>

            </nav>
        </aside>
    )
}

export default NavigationDesktop;
