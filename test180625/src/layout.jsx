import { Outlet,Link } from "react-router-dom";
import Navv from "./component/nav";

const Layout=()=>{
    return(
        <>
        <Navv/>
        <Outlet/>
        </>
    )
}
export default Layout;