import { AuthLogin } from "interfaces/Auth";
import { createContext, useState, ReactNode, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin, authLogout } from "services/apis/autosite/requests/auth";

interface Token {
    access: string;
    refresh?: string;
    user: User;
}

interface AuthConfig {
    children: ReactNode;
}

interface User {
    pk?: number;
    name?: string;
    email?: string;
}

interface Auth {
    user: User;
    isAuthenticated: boolean;
}

interface AuthContextValue {
    auth: Auth;
    logout: () => void;
    login: (value:any) => void;

    setUser: (user: User) => void;
    setAuthenticatedStatus: (value: boolean) => void;

    checkIfTokenIsAttached: () => void;
    saveTokenToLocalStorage: (token:any) => void;
    getTokenFromLocalStorage: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function AuthProvider({ children }: AuthConfig) {
    const [auth, setAuth] = useState<Auth>({
        user: {
            name: "",
            email: "",
        },
        isAuthenticated: true,
    });
    
    // Functions 
    // ----------------------------------------

    function checkIfTokenIsAttached() {
        const url = window.location.href;
        const tokenRegex = /token=([^&]+)/;
        const tokenMatch = url.match(tokenRegex);
        
        if (tokenMatch && tokenMatch[1]) {
            const token = tokenMatch[1];
            return token;
        } else {
            // console.log("Token not found in the URL.");
            return null;
        }
    }

    function checkIfAuthenticated() {
        const token = getTokenFromLocalStorage();
        console.log("check if auth")

        if(token) {
            setAuthenticatedStatus(true)
        } else {
            setAuthenticatedStatus(false)
        }
    }

    async function login({ email, password }:AuthLogin) {
        const res = await authLogin({ email, password })

        if(res.status === 400 || res.access.length === 0) {
            return res.content;
        } else {
            saveTokenToLocalStorage(res)
            setAuthenticatedStatus(true)
        }
    }

    async function logout() {
        await authLogout();
        saveTokenToLocalStorage(null)
        setAuthenticatedStatus(false);
    }

    // Token 
    // ----------------------------------------
    
    function saveTokenToLocalStorage(token:any) {
        if (token) {
            localStorage.setItem('jwtToken', JSON.stringify(token));
        } else {
            localStorage.removeItem('jwtToken');
        }
    }
      
    function getTokenFromLocalStorage() {
        const tokenString:any = localStorage.getItem('jwtToken');
        return JSON.parse(tokenString);
    }

    // Set User 
    // ----------------------------------------

    function setUser(user: User) {
        setAuth((prevAuth) => ({
            ...prevAuth,
            user,
        }));
    };

    function setAuthenticatedStatus(value: boolean) {
        setAuth((prevAuth) => ({
            ...prevAuth,
            isAuthenticated: value,
        }));
    };

    // Other
    // ----------------------------------------

    useEffect(() => {
        checkIfAuthenticated();
    }, [auth.isAuthenticated]);

    useEffect(() => {
        const token = checkIfTokenIsAttached();
        
        if(token) {
            saveTokenToLocalStorage({
                access: token,
                refresh: "",
                user: {
                    pk: "",
                    email: ""
                }
            })
            setAuthenticatedStatus(true)
        }
    }, []);

    const contextValues: AuthContextValue = {
        auth,
        setUser,
        setAuthenticatedStatus,
        saveTokenToLocalStorage,
        getTokenFromLocalStorage,
        checkIfTokenIsAttached,
        logout,
        login
    };

    return (
        <AuthContext.Provider value={contextValues}>
        {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
