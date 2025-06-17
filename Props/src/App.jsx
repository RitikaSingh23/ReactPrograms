import { useState,createContext } from "react";
import Comp1 from "./comp1";

const UserContext=createContext();
const App=()=>{
  const [user,setuser]=useState("Ritika");

  return(
    <>
    <h1>welcome  {user} !!</h1>
    <UserContext.Provider value={user}>
     <Comp1 />
    </UserContext.Provider>
    </>
  )
}
export default App;
export {UserContext};