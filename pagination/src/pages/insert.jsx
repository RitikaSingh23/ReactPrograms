import { useState } from "react";
import axios from "axios";


const Insert=()=>{

  const [input,setinput]=useState({});
  const Handel=(e)=>{
      let name =e.target.name;
      let value=e.target.value;

      setinput(values=>({...values,[name]:value}))
      console.log({input})
  }

  const Result=async()=>{
    let api="http://localhost:3000/page"
    const res=await axios.post(api,input)
    alert(`success`)
  }
  
    return(
        <>
        <h1>This is insert page</h1>
        Enter  Name:<input type="text" name="name" onChange={Handel}/><br></br><br></br>
        Enter  Id:<input type="text" name="id" onChange={Handel}/><br></br><br></br>
        Enter  City:<input type="text" name="city" onChange={Handel}/><br></br><br></br>
        <button onClick={Result}>Submit</button>
        </>
    )
}
export default Insert;