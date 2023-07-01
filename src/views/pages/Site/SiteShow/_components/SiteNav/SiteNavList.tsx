import { NavLink, useLocation, useParams } from "react-router-dom";
import { getMenuPageByID } from "config/menu/menuUtils";

import SiteNavItem from "./SiteNavItem";
import Container from "atoms/Container";
import helperArray from "utils/helperArray";
import { useQuery } from "@tanstack/react-query";
import { getBlogSite } from "services/apis/autosite/requests/blog";
import { configPages } from "config/configPages";
import { configApp } from "config/configApp";
import Skeleton from "atoms/Skeleton";

function SiteNavList({ siteId }:{ siteId: number }) {
    const siteMenu:any = getMenuPageByID('primary', "sites") // TODO: Grab the site by id or slug, as if you change its position from pimary to secondary it breaks
    const location = useLocation();

    const curatedMenu = helperArray.filterArray(siteMenu.children, [], ["settings", "seo", "billing"])
    const pathname = location.pathname;

    const { id } = useParams();

    const siteQuery = useQuery({
        queryKey: ["sites", id],
        queryFn: () => getBlogSite(id)
    })
    const data = siteQuery && siteQuery.data
    
    return (
        <nav className="flex justify-between w-full h-full space-x-4 border-b border-gray-700" aria-label="Tabs">
            <SiteNavItem className="rounded-br-[60px] flex-none">
            <NavLink to={`${configPages.DASHBOARD.path}${configPages.SITES.path}/${id}`}>
                <div className="flex items-center pl-6 pr-20 py-2.5 space-x-2">
                    <div className="flex-shrink-0 w-6 h-6">
                        {data?.logo ? (
                            <img className="h-full w-full" src={`${configApp.http}${configApp.url}${data?.logo}`} alt="Brand" />
                        ) : (
                            <Skeleton height="h-full" width="w-full" gutter="mb-0" type="image" />
                        )}
                    </div>

                    <div className="flex flex-col">
                        {data?.title ? (
                            <h1 className="text-gray-50 font-secondary font-semibold">{data && data.title}</h1>
                        ) : (
                            <Skeleton height="h-3" width="w-32" gutter="mb-0" />
                        )}
                    </div>
                </div>
            </NavLink>
            </SiteNavItem>

            <div className="flex justify-between w-full py-2 space-x-4">
            {curatedMenu &&  curatedMenu.map((item:any) => {
                const menuURL = pathname.split('/')[4];
                const isHome = menuURL || 'overview';
                const matchingItems = curatedMenu.filter(childItem => isHome === childItem.id);
                const isActive = isHome === item.id && matchingItems.length === 1;
                
                return <SiteNavItem key={item.id} className="w-full" id={siteId} item={item} isActive={isActive} />
            })}
            </div>

            {/* <SiteNavItem className="bg-[#242424] hover:bg-[#000000]">
                <div className="text-gray-300 w-12 h-8 fill-gray-300">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </div>
            </SiteNavItem> */}
        </nav>
    )
}

export default SiteNavList;
