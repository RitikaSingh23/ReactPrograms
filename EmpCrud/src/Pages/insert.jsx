import axios from "axios";
import { useState } from "react";
const Insertt=()=>{
  const [input,setinput]=useState({});
  const Handel=(e)=>{
      let name =e.target.name;
      let value=e.target.value;

      setinput(values=>({...values,[name]:value}))
      console.log({input})
  }

  const Result=async()=>{
    let api="http://localhost:3000/Employyyy"
    const res=await axios.post(api,input)
    alert(`success`)
  }
  
  return(
    <>
    <h1>Welcome to my App</h1>
    <h1>Application Form</h1>
    Name: <input type="text" name="name" onChange={Handel} /><br></br><br></br>
    City: <input type="text" name="city" onChange={Handel} /><br></br><br></br>
    Empno: <input type="text" name="empno" onChange={Handel} /><br></br><br></br>
    Degination: <input type="text" name="deg" onChange={Handel} /><br></br><br></br>
    <button onClick={Result}>submit</button>
    </>
  )
}
export default Insertt;

