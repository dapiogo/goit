import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <div style={{display:'flex'}}>
            <div style={{padding:'10px'}}><NavLink to="/">Home</NavLink></div>
            <div style={{padding:'10px'}}><NavLink to="/contact">Contact</NavLink></div>
            <div style={{padding:'10px'}}><NavLink to="/products">Products</NavLink></div>
            <div style={{padding:'10px'}}><NavLink to="/user">User</NavLink></div>
            <div style={{padding:'10px'}}><NavLink to="/user/settings">User Settings</NavLink></div>
        </div>
    )
}