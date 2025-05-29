import { useContext ,useState} from "react";
import { myContext } from "./Login";

const Unauth=()=>{
    const [txtval,settaxtval]=useState("");
    const {login}=useContext(myContext);
    return(
        <>
        enter name: <input type="text" value={txtval} onChange={(e)=>{settaxtval(e.target.value)}}/>
        <button onClick={()=>{login(txtval)}}>Login</button>
        </>
    )
}
export default Unauth;