import { Outlet } from "react-router-dom";
import shapeOne from "assets/images/shapeOne.png";
import shapeTwo from "assets/images/shapeTwo.png";

function LayoutAuth() {
    return (
        <div className="relative">
        <div className="h-full max-w-xl mx-auto">

            <img src={shapeOne} className="fixed -scale-y-100 w-[700px] right-12 -bottom-12 -left-12 object-cover z-0" />
            <img src={shapeTwo} className="fixed -scale-y-100 w-[470px] -right-32 -top-20 object-cover z-0" />

            <div className="relative z-10 flex min-h-full flex-1 flex-col justify-center py-12">
                <Outlet />
            </div>             

        </div>
        </div>
    )
}

export default LayoutAuth;
