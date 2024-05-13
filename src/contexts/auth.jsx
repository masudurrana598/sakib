import React, {createContext, useContext, useState} from "react";

export const AuthContext = createContext({
    auth: {
        user: null,
        token: null
    },
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: null
    });
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            { children }
        </AuthContext.Provider>
    );
}