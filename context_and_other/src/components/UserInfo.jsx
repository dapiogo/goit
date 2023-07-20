import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const UserInfo = () => {

    const {userName, zalogowany} = useContext(AuthContext)


    return (
        <div>
            {zalogowany ? (
                <div>Jestes zalogowany jako : {userName} </div>
            ): (
                <div>Musisz sie zalogowac</div>
            )}
        </div>
        
    )
}