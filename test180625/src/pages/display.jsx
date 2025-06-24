import { useState,useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const[mydata,setdata]=useState([])
    const loadata=async()=>{
        let api="http://localhost:3000/products"
        let res=await axios.get(api);
        setdata(res.data);
    }

    useEffect(()=>{
        loadata();
    },[]);

    let  sno=0;
    const ans= mydata.map((key)=>{
     sno++;
    return(
      <>
        <tr>
          <td> {sno} </td>
          <td> {key.pno} </td>
          <td> {key.pname} </td>
          <td> {key.pqty} </td>
          <td> {key.price} </td>
          <td> {key.name} </td>
        </tr>
      </>
    )
  });


    return(
        <>
        <h1>This is my display page</h1>
        <table Border="2">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Product No</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Customer Name</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </table>
        </>
    )
}
export default Display;