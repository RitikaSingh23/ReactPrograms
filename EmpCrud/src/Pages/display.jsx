import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
  const [mydata, setMydata] = useState([]);
  const loadData=async()=>{
     let api="http://localhost:3000/Employyyy";
     const response = await axios.get(api);
     console.log(response.data);
     setMydata(response.data);
  }
  useEffect(()=>{
    loadData();
  }, []);
  let sno=0;
  const ans= mydata.map((key)=>{
     sno++;
    return(
      <>
        <tr>
          <td> {sno} </td>
          <td> {key.empno} </td>
          <td> {key.name} </td>
          <td> {key.deg} </td>
          <td> {key.city} </td>
        </tr>
      </>
    )
  });
    return(
        <>
          <h1> Display Page</h1>
    <table>
      <thead>
        <tr>
          <th>Sno</th>
          <th>EmpNo</th>
          <th>Name</th>
          <th>Designation</th>
          <th>City </th>
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