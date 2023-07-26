import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/information">Information</NavLink>
        <NavLink to="/movies">Movies</NavLink>
    </nav>
    )
}