import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "./Logo";
import { Menu } from "./Menu";


export const CommonLayout = () => {
    return (
        <div className="container">
            <header className="header">
                <Logo />
                <Menu />
            </header>
            <Suspense fallback={<div>Loading page ...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}