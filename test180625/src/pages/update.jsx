// const Update=()=>{
//     return(
//         <>
//         <h1>This is my Update page</h1>
//         </>
//     )
// }
// export default Update;
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Update=()=>{
  const [mydata, setMydata] = useState([]);

  const loadData= async()=>{
    let api="http://localhost:3000/products";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data)
  }
  useEffect(()=>{
    loadData();
  }, []);
const myDel=async(id)=>{
  let api=`http://localhost:3000/products/${id}`;
  const response = await axios.delete(api);
  console.log(response);
  alert("data deleted")
  loadData();
}


let sno=0;
  const ans=mydata.map((key)=>{
    sno++;
    return(
      <>
        <tr>
          <td> {sno}</td>
          <td> {key.pno}</td>
          <td> {key.pname}</td>
          <td> {key.name}</td>
          <td> {key.pqty}</td>
<td> {key.price}</td>
          <td> 
          <button className="delIcon" onClick={()=>{myDel(key.id)}} >delete</button>
          </td>
        </tr>
      </>
    )
  })
    return(
        <>
         <h1> Update Page</h1>
        <table border={2}>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Product no</th>
          <th>Product Name</th>
          <th>Customer Name</th>
          <th>Qantity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
      </table>
        </>
    )
}

export default Update;