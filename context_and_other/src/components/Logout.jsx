import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Logout = () => {
    const {logout} = useContext(AuthContext);
    return (
        <div>
            <button onClick={logout}>Wyloguj</button>
        </div>
    )
}