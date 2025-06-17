import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";;
import axios from "axios";
const Edit=()=>{
  const {id} = useParams();
   const [mydata, setMydata]=useState({});
   const loadData=async()=>{
    let api=`http://localhost:3000/Employyyy/${id}`;
    const resposne = await axios.get(api);
    console.log(resposne.data);
    setMydata(resposne.data);
   }

   useEffect(()=>{
    loadData();
   }, []);

   const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
      setMydata(values=>({...values, [name]:value}));
      console.log(mydata);
   }
   
   const handleSubmit=async()=>{
    let api=`http://localhost:3000/Employyyy/${id}`;
    const response = await axios.put(api, mydata);
    alert("Changed")
   
   }


    return(
        <>
           
          Edit Employee No : <input type="text" name="empno" value={mydata.empno} onChange={handleInput} />
          <br />
          Edit Name : <input type="text" name="name" value={mydata.name} onChange={handleInput} />
          <br />
          Edit Designation : <input type="text" name="deg" value={mydata.deg} onChange={handleInput} />
          <br />
          Edit City : <input type="text" name="city" value={mydata.city} onChange={handleInput} />
          <br />
          <button onClick={handleSubmit}> Edit Save!</button>    
        </>


    )
}

export default Edit;