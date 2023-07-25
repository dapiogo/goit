import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"

export const CommonLayout = () => {
    return(
        <div style={{padding:'10px', border:"1px solid black", display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex'}}>
                <div>Logo</div>
                <Navigation/>
                <div>Wyloguj</div>
            </div>
            <Outlet/>
            <footer>Footer</footer>
        </div>
    )
}