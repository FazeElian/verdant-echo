import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <h1>Header</h1>
            </header>

            <Outlet />
        </>
    )
}

export { Header };