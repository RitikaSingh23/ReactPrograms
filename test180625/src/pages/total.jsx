import { useState,useEffect } from "react";
import axios from "axios";
const Total=()=>{
    const[myqty,setqty]=useState(0)
    const loadata=async()=>{
        let api="http://localhost:3000/products"
        let res=await axios.get(api);
        setqty(res.data.pqty);
    }

    useEffect(()=>{
        loadata();
    },[]);

    let  qty;
    const ans= myqty.map((key)=>{
     setqty=qty+key.pqty;
    
  });
    return(
        <>
        <h1>This is my Total page</h1>
        <h1>Total Quantity: {ans}</h1>
        </>
    )
}
export default Total;