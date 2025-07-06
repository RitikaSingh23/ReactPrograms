import { Outlet } from "react-router-dom";
import Navv from "./compotent/navbar";



const Layout=()=>{
    return(
        <>
        <Navv/>
        <Outlet/>
        </>
    )
}


export default Layout;