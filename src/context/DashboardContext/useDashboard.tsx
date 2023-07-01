import { useContext } from "react";
import { DashboardContext } from "./DashboardProvider";

function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }

  const {
    menuOpen,
    menuExpanded,
    mobileOpen,
    toggleMenu,
    handleMouseEnterNav,
    handleMouseLeaveNav,
    handleToggleMobileMenu,
  } = context;

  return {
    menuOpen,
    menuExpanded,
    mobileOpen,
    toggleMenu,
    handleMouseEnterNav,
    handleMouseLeaveNav,
    handleToggleMobileMenu,
  };
}

export default useDashboard;
