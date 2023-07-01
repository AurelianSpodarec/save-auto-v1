import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

import SiteNavList from "./_components/SiteNav/SiteNavList";
import ConfettiExplosion from "./_components/ConfettiExplosion";

function SiteShowLayout() {
    const { id } = useParams()
    const [confettiExplode, setConfettiExplode] = useState(false)

    useEffect(() => {
        setConfettiExplode(true)
    }, [])

    return (
        <div className="flex h-full">

            <div className="w-full">

                <header className="sticky top-0 z-20 bg-[#181818]">
                <div className="flex justify-between items-start">
                    {/* <SiteHeader /> */}
                    <SiteNavList siteId={id} />
                </div>
                </header>

                <div className="h-full">
                    <Outlet />
                </div>
            </div>
            <ConfettiExplosion active={confettiExplode} />

        </div>
    )
}

export default SiteShowLayout;
