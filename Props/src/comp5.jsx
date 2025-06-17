import { UserContext } from "./App";
import { useContext } from "react";
const Comp5=()=>{
    const {user}=useContext(UserContext);
    return(
        <>
        <h1>Comp5 {user} </h1>
        </>
    )
}
export default Comp5;