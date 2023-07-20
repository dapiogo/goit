import { useState } from "react";
import { createContext } from "react";


const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark': 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}