import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const ShowToken = () => {
    const {login} = useContext(AuthContext)
    return (
    <div style={{border:'1px solid black',padding:'10px',margin:'20px'}}>
        <div>Moj token to : </div>
        <button onClick={()=>login('Marcina')}>Ustaw innego usera</button>
    </div>
    )
}