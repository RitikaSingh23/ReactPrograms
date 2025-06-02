
import { Outlet } from "react-router-dom";
import Foot from "./Components/Foot";
import Menu from "./Components/Nav";

const Layout=()=>{
    return(
        <>
        <Menu/>
        <Outlet/>
        <Foot/>
        </>
    )
}
export default Layout;