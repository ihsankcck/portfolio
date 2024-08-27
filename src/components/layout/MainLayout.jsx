import { Outlet } from "react-router-dom"
import { Header } from "./header"
import Linear from "../linear"

const MainLayout = () => {
    return <>
        <Linear />
        <Header />
        <Outlet />
    </>
}

export default MainLayout