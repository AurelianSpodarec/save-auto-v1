import React, { useMemo } from 'react';
import useGuide from "../useGuide";

function GuideMenuIndex() {
    const { menuList } = useGuide();

    return (
        <div className="flex w-full h-full mx-auto relative">
            {menuList[0].component}
        </div>
    );
}

export default GuideMenuIndex;