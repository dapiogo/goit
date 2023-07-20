import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

//1 krok stworz kontekst danej logiki
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userName,setUserName] = useState(null);
    const [token,setToken] = useState(null);
    const [zalogowany,ustawLogowanie] = useState(false);



    const login = (user) => {
        ustawLogowanie(true);
        setUserName(user)
    }

    const logout = () => {
        ustawLogowanie(false)
        setUserName(null)
    }

    return (
        <AuthContext.Provider value={{ userName, token, login, logout, zalogowany }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider}