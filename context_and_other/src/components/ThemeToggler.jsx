import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const ThemeToggler = () => {
    const {toggleTheme, theme} = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>{theme === 'white' ? "zmien na tryb ciemny" : "zmien na tryb jasny"}</button>
    )
}