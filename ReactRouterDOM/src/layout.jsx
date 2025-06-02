import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link><br></br>
        <Link to="about">About</Link><br></br>
        <Link to="contact">Contact</Link><br></br>
        <Link to="list">List</Link>
        <hr/>
        <Outlet/>
        <hr/>
        www.company.com
        </>
    )
}
export default Layout;