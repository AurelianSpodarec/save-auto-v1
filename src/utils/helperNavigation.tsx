import { configPages } from "config/configPages";

const helperNavigation = {
    isActiveURL(item:any, menu:any) {
        const pathname = location.pathname;
        const isDashboardItem = item.id === "dashboard";
        const isDashboardActive = isDashboardItem && pathname === "/app";
        const isSubmenuItemActive = !isDashboardItem && pathname.startsWith(`${configPages.DASHBOARD.path}/${item.id}`);
        const existsInData = menu.some((menuItem:any) => menuItem.url === pathname);
        const isActive = isDashboardActive || isSubmenuItemActive || existsInData;
      
        return isActive;
    }
}

export default helperNavigation;