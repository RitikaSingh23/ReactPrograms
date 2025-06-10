import axios from "axios";
import { useState } from "react";
const Search=()=>{
  const [empno, setEmpno]= useState("");
  const [mydata, setMydata]=useState([]);
  const handleSubmit=async()=>{
     let api=`http://localhost:3000/Employyyy/?empno=${empno}`;
     const response = await axios.get(api);
     console.log(response.data);
     setMydata(response.data);
  }
  const ans= mydata.map((key)=>{
      return(
        <>
         
             <h1> Welcome {key.name}!</h1>
             <h2> Employee Numeber : {key.empno}</h2>
             <h2> Designation :  {key.deg}</h2>
             <h2> City : {key.city} </h2>
       
        </>
      )
  })

    return(
        <>
          <h1> Search Page</h1>
          Enter Employee No. : <input type="text" value={empno} 
          onChange={(e)=>{setEmpno(e.target.value)}} />
          <button onClick={handleSubmit}> Search</button>
          <hr />
          <div id="searchdata">
          {ans}
          </div>
        </>
    )
}
export default Search;