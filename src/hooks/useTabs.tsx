import { useState } from "react";

type TabID = string | number;

interface TabState {
    active: TabID;
    changeTab: (tabID: TabID) => void;
}

function useTabs(state: TabID): TabState {
    const [active, setActive] = useState<TabID>(state);

    function changeTab(tabID: TabID) {
        setActive(tabID);
    }

    return {
        active,
        changeTab,
    };
}

export default useTabs;
