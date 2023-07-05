import React, { useMemo } from 'react';
import useGuide from "../useGuide";

function GuideMenuIndex() {
    const { menuList, activeMenu } = useGuide();

    const menuClass = useMemo(() => {
        return {
            complete : "translate-x-[-60px] opacity-0 complete",
            upcoming : "translate-x-[60px] opacity-0 upcoming",
            active : "translate-x-[0px] opacity-100 z-50 active",
        };
    }, []);

    return (
        <div className="flex w-full h-full mx-auto relative">
            {menuList && menuList.map((menuItem:any, index:number) => (
                <div
                    key={menuItem.id}
                    className={`
                        absolute w-full h-full bg-white 
                        transition ease-linear duration-100
                        ${menuItem === activeMenu ? menuClass.active : ""}
                        ${index > menuList.findIndex((item:any) => item === activeMenu) ? menuClass.upcoming : ""}
                        ${index < menuList.findIndex((item:any) => item === activeMenu) ? menuClass.complete : ""}
                    `}
                        // ${menuList[activeMenu].status}
                >
                    {menuItem.component}
                </div>
            ))}
        </div>
    );
}

export default GuideMenuIndex;
