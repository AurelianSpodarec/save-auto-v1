import { useState, useEffect, createContext, ReactNode } from 'react';

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

interface DashboardProviderProps {
    children: ReactNode;
}

function DashboardProvider({ children }: DashboardProviderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuExpanded, setMenuExpanded] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    }

    function handleMouseEnterNav() {
        setMenuExpanded(true);
    }

    function handleMouseLeaveNav() {
        setMenuExpanded(false);
    }

    function handleToggleMobileMenu() {
        setMobileOpen((prevMobileOpen) => !prevMobileOpen);
    }

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 1220) setMobileOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const contextValues: DashboardContextType = {
        menuOpen,
        menuExpanded,
        mobileOpen,
        toggleMenu,
        handleMouseEnterNav,
        handleMouseLeaveNav,
        handleToggleMobileMenu,
    };

    return (
        <DashboardContext.Provider value={contextValues}>
        {children}
        </DashboardContext.Provider>
    );
}

export default DashboardProvider;

interface DashboardContextType {
    menuOpen: boolean;
    menuExpanded: boolean;
    mobileOpen: boolean;
    toggleMenu: () => void;
    handleMouseEnterNav: () => void;
    handleMouseLeaveNav: () => void;
    handleToggleMobileMenu: () => void;
}
