import Navigation from "pages/_components/Navigation/Navigation"
import { Outlet } from 'react-router-dom';
import useDashboard from 'context/DashboardContext/useDashboard';
import Header from "pages/_components/Header/Header";

function LayoutDashboard() {
    const { menuOpen } = useDashboard()
    
    return (
        <div className="relative h-full overflow-auto overflow-x-hidden">
        <div id="context-wrap" className={`flex flex-col h-full`}> 

            <Navigation />

            {/* <div className={`flex ${menuOpen ? "lg:pl-72" : "lg:pl-[50px]"}  flex-col h-full relative`}> */}
            <div className={`flex lg:ml-72 flex-col h-full relative`}>
                <Header/>
                <main className="h-full w-full">
                    <Outlet />
                </main>      
            </div>            

        </div>
        </div>
    )
}

export default LayoutDashboard;
