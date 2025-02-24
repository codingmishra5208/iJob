import React, { createContext, useContext, ReactNode } from "react";

// Context ka type define karein
interface AuthContextType {
    storeToken: (serverToken: string) => void; // Token ko store karne ka function
    storeUserName: (userName: string) => void; // Username ko store karne ka function
    logout: () => void;
    getUserName: () => string | null; // Username retrieve karne ka function
}

// Context create karein
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider ke liye props define karein
interface AuthProviderProps {
    children: ReactNode;
}

// AuthProvider component create karein
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const storeToken = (serverToken: string) => {
        localStorage.setItem('token', serverToken); 
    };

    const storeUserName = (userName: string) => {
        localStorage.setItem('userName', userName); 
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
    };

    const getUserName = () => {
        return localStorage.getItem('userName');
    };

    return (
        <AuthContext.Provider value={{ storeToken, storeUserName, logout, getUserName }}>
            {children}
        </AuthContext.Provider>
    );
};

// AuthContext ko use karne ke liye custom hook create karein
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
