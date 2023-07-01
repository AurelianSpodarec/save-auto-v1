import React, { useMemo } from 'react';
import useGuide from "../_logic/useGuide";

function StepsIndex() {
    const { menuList } = useGuide();

    console.log({menuList})

    const menuClass = useMemo(() => {
        return {
            complete : "translate-x-[-60px] opacity-0",
            upcoming : "translate-x-[60px] opacity-0",
            active : "translate-x-[0px] opacity-100 z-50",
        };
    }, []);

    return (
        <div className="flex w-full h-full mx-auto relative">
            {/* {menuList && menuList.map((menuItem:any) => (
                <div
                    key={menuItem.id}
                    className={`
                        absolute w-full h-full bg-white 
                        transition ease-linear duration-100
                        ${menuClass[menuItem.status] || menuClass.complete}
                    `}
                > */}
                    {/* {menuItem.component} */}
                    {menuList}
                {/* </div>
            ))} */}
        </div>
    );
}

export default StepsIndex;