import { createContext,useState } from "react";
const myContext =createContext();
const LoginContex=({children})=>{
    const [user,setuser]=useState({name:"",auth:false});
    const login=(nm)=>{
        setuser({name:nm,auth:true});
    }
    const logout=()=>{
        setuser({name:"",auth:false});
    }
    return(
        <>
        <myContext.Provider value={{user,login,logout}}>
            {children}
            </myContext.Provider>
        </>
    )
}
export default LoginContex;
export {myContext};