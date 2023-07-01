import Card from "atoms/Card";
import PageHeader from "molecules/PageHeader";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

function TabLink({ label, url, isActive }:{label:string, url: string, isActive: boolean}) {

    return (
        <NavLink 
            to={url} 
            className={`
                border-b-2  ${isActive ? "border-primary" : "border-transparent"} 
            `}>
            {label}
        </NavLink>
    )
}

function SiteSEOIndex() {

    const location = useLocation();
    const currentURL = location.pathname.split("/")[5]

    return (
        <div>

            <div className="p-8">
            <PageHeader title="Site Default SEO">
                <nav className="isolate flex border-b border-gray-200 space-x-12">
                    <TabLink label="Meta" url="meta" isActive={currentURL === "meta"} />
                    <TabLink label="Image" url="image" isActive={currentURL === "image"} />
                    <TabLink label="Social" url="social" isActive={currentURL === "social"} />
                    <TabLink label="Sitemap" url="sitemap" isActive={currentURL === "sitemap"} />
                </nav>
            </PageHeader>
            </div>

            <div className="p-8">
                <Outlet />
            </div>
            
        </div>
    )
}

export default SiteSEOIndex;
