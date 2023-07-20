import { useContext } from "react";
import { useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext";

export const ToDo = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div style={{border:'1px solid black',padding:'10px',margin:'20px', background:theme, color:theme === 'black' && 'white' }}>Zadnia od uzytkownika : </div>
    )
}