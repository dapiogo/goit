import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"



export const User = () => {
    const { userName } = useContext(AuthContext);
    return (
        <div style={{border:'1px solid black',padding:'10px',margin:'20px'}}>Nasz user to : {userName}</div>
    )
}
