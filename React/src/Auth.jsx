import { useContext } from "react";
import { myContext } from "./Login";

const Auth=()=>{
    const {user,logout}=useContext(myContext);
    return(
        <>
        <h2>welcome {user.name}</h2>
        <button onClick={()=>{logout()}}>Logout</button>
        </>
    )
}
export default Auth;