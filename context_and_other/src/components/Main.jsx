import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ThemeContext } from "../context/ThemeContext";

export const Main = () => {
    const {login} = useContext(AuthContext)
    const {theme} = useContext(ThemeContext);
    return (
        <div style={{background:theme}}>
            <button onClick={()=> {
                console.log('wykonuje sie ? ')
                login('Paulina')
            }}>Zaloguj</button>
        </div>
    )
}