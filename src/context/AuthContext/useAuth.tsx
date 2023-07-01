import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    
    const { 
        auth, 
        setUser, 
        setAuthenticatedStatus, 
        saveTokenToLocalStorage,
        getTokenFromLocalStorage,
        logout,
        login,
        checkIfTokenIsAttached
    } = context;

    return {
        setUser,
        setAuthenticatedStatus,
        auth,
        user: auth.user,
        isAuthenticated: auth.isAuthenticated,
        saveTokenToLocalStorage,
        getTokenFromLocalStorage,
        logout,
        login,
        checkIfTokenIsAttached
    };
}

export default useAuth;
