import { useEffect } from "react"
import { useState } from "react"


export const FnTest = ({props}) => {

    const [activeUsers,setActiveUsers] = useState(['basie','jacka'])

    const addNewUser = () => {
        setActiveUsers(prev => [...prev,'new user'])
    }

    useEffect(()=> {
            setActiveUsers(prev => [...prev,'new useEffect'])
    }, [])

    return (
        <div>
            <div>{activeUsers.map(el => <div>{el}</div>)}</div>
            <button onClick={addNewUser}>add</button>
        </div>

    )
}