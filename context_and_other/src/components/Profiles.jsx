import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ThemeContext } from "../context/ThemeContext";
import { User } from "./User"

export const Profiles = () => {
    const {login} =  useContext(AuthContext);
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme} style={{border:'1px solid black',padding:'10px',margin:'20px'}}>
            <h1>Osobny komponent</h1>
            <User/>
            <button onClick={()=> login('Basie')}>Ustaw uzytkownika</button>
        </div>
    )
}