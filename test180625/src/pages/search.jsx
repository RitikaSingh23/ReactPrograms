import axios from "axios";
import { useState } from "react";

const Search=()=>{
    const [pno, setPno]=useState("")
    const [data, setdata]=useState([])

    const srch=async()=>{

        const api=`http://localhost:3000/products/?pno=${pno}`
        const res=await axios.get(api)

        setdata(res.data)

    }
    const ans=data.map((key)=>{
        return(
            <>
            <tr>
                
                <td>{key.pno}</td>
                <td>{key.pname}</td>
                <td>{key.pqty}</td>
                <td>{key.price}</td>
                <td>{key.name}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Search</h1>
        <input type="text" value={pno} onChange={(e)=>{setPno(e.target.value)}}/>
        <button onClick={srch}>search</button>

         <table border="1" cellPadding="10px">
            <tr>
                <th>product number</th>
                <th>product name</th>
                <th>product Qty</th>
                <th>product price</th>
                <th>costomer name</th>
                
                
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Search;