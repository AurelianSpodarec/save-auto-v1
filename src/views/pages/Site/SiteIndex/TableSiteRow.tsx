import { Link, NavLink } from "react-router-dom";
import { TableCell, TableRow } from "atoms/Table";
import Skeleton from "atoms/Skeleton";
import { configPages } from "config/configPages";
import { BlogSite } from "interfaces/Blog";
import { configApp } from "config/configApp";

function TableSiteRow({ item, isLoading }: any) {
    const { id, title, domain, logo, scheduled_posts, published_posts }:BlogSite = item || {};

    return (
        <TableRow>
        <TableCell>
            {isLoading ? (
            <div className="flex items-center gap-3 px-2.5">
                <Skeleton type="image" height="h-10" width="w-10" gutter="mb-0" />
                
                <div className="flex flex-col">
                    <Skeleton height="h-2.5" width="w-32" />
                    <Skeleton height="h-2" width="w-24" gutter="mb-0"/>
                </div>
            </div>
            ) : (
            <>
            <div className="flex items-center gap-3 px-2.5">
                <NavLink to={`/app${configPages.SITES.path}/${id}`}>
                    {logo &&
                        <img className="h-10 w-10" src={`${configApp.http}${configApp.url}${logo}`} alt="Brand" />
                    }
                </NavLink>
                <div className="flex flex-col">
                    <NavLink to={`/app${configPages.SITES.path}/${id}`}>
                        <p className="text-xl font-semibold mb-0">{title}</p>
                    </NavLink>
                    <Link to={`${configApp.http}${domain}`} target="_blank" className="text-[#667085] text-xs underline">
                    {domain}
                    </Link>
                </div>
            </div>
            </>
            )}
        </TableCell>

        {isLoading ? (
            <>
            <TableCell>
                <Skeleton variant="rectangular" height="h-2.5" width="w-12" />
            </TableCell>
            <TableCell>
                <Skeleton variant="rectangular" height="h-2.5" width="w-12" />
            </TableCell>
            <TableCell>
                <Skeleton variant="rectangular" height="h-2.5" width="w-12" />
            </TableCell>
            </>
        ) : (
            <>
            <TableCell>{scheduled_posts}</TableCell>
            <TableCell>{published_posts}</TableCell>
            </>
        )}
        </TableRow>
    );
}

export default TableSiteRow;
