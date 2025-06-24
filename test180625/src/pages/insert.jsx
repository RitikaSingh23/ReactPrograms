import { useState } from "react";
import axios from "axios";

const Insert=()=>{
    const [input,setinputt]=useState({})
const Handel=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setinputt(values=>({...values,[name]:value}))
}
const submit=async()=>{
    let api="http://localhost:3000/products"
    let res=await axios.post(api,input)
    alert("success")
}
    return(
        <>
        Enter Product No:<input type="text" name="pno" onChange={Handel} /><br></br><br></br>
        Enter Product Name:<input type="text" name="pname" onChange={Handel} /><br></br><br></br>
        Enter Product Qty:<input type="text" name="pqty" onChange={Handel} /><br></br><br></br>
        Net Price:<input type="text" name="price" onChange={Handel} /><br></br><br></br>
        Customer Name:<input type="text" name="name" onChange={Handel} /><br></br><br></br>
        <button onClick={submit}>Submit</button>
        </>
    )
}
export default Insert;