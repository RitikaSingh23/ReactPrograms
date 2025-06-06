// import { useState,useEffect } from "react";

// const App=()=>{
//   const [count,setcount]=useState(0)

//   useEffect(()=>{
//     setTimeout(()=>{
//       setcount(count+1)
//     },1000)
//     console.log(`count: ${count}`)
//   })

//   return(
//     <>
//     <h1>Welcome to my App</h1>
//     <h1>Count:{count}</h1>
//     </>
//   )
// }
// export default App;


/*----------------------------empty aray--------------------------------------*/
// import { useState,useEffect } from "react";

// const App=()=>{
//   const [count,setcount]=useState(0)

//   useEffect(()=>{
//     setTimeout(()=>{
//       setcount(count+1)
//     },1000)
//     console.log(`count: ${count}`)
//   },[])

//   return(
//     <>
//     <h1>Welcome to my App</h1>
//     <h1>Count:{count}</h1>
//     </>
//   )
// }
// export default App;


/*----------------------------multi---------------------*/
// import { useState,useEffect } from "react";

// const App=()=>{
//   const [count,setcount]=useState(0);
//   const [multi,setmulti]=useState(0);

//   useEffect(()=>{
//     setmulti(count*2)
//    },[count])

//   return(
//     <>
//     <h1>Welcome to my App</h1>
//     <h1>Count:{count}</h1>
//     <button onClick={()=>{setcount(count+1)}}> click here</button>
//     <h1>Amount:{multi}</h1>
//     </>
//   )
// }
// export default App;


/*------------------------------------form-------------------------------------*/
// import { useState } from "react";

// const App=()=>{
//   const [name,setname]=useState("");
//   const[city,setcity]=useState("");
//   const[roll,setroll]=useState("");
//   const[fees,setfees]=useState("");


//   const Result=()=>{
//     alert(`Your name is ${name} and your city is ${city} your roll number is ${roll} and your fees is ${fees}`)
//   }

//   return(
//     <>
//     <h1>Welcome to my App</h1>
//     <h1>Application Form</h1>
//     Name: <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} /><br></br><br></br>
//     City: <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}} /><br></br><br></br>
//     Rollno: <input type="text" value={roll} onChange={(e)=>{setroll(e.target.value)}} /><br></br><br></br>
//     Fees: <input type="text" value={fees} onChange={(e)=>{setfees(e.target.value)}} /><br></br><br></br>
//     <button onClick={Result}>submit</button>
//     </>
//   )
// }
// export default App;


/*------------------------spread operator----------------------------*/
// import { useState } from "react";
// import axios from "axios";

// const App=()=>{
//   const [input,setinput]=useState({});
//   const Handel=(e)=>{
//       let name =e.target.name;
//       let value=e.target.value;

//       setinput(values=>({...values,[name]:value}))
//       console.log({input})
//   }

//   const Result=async()=>{
//     let api="http://localhost:3000/Student"
//     const res=await axios.post(api,input)
//     alert(`success}`)
//   }

//   return(
//     <>
//     <h1>Welcome to my App</h1>
//     <h1>Application Form</h1>
//     Name: <input type="text" name="name" onChange={Handel} /><br></br><br></br>
//     City: <input type="text" name="city" onChange={Handel} /><br></br><br></br>
//     Rollno: <input type="text" name="roll" onChange={Handel} /><br></br><br></br>
//     Fees: <input type="text" name="fees" onChange={Handel} /><br></br><br></br>
//     <button onClick={Result}>submit</button>
//     </>
//   )
// }
// export default App;




/*------------------------------task--------------------*/

import { useState } from "react";
import axios from "axios";

const App=()=>{
  const [input,setinput]=useState({});
  const Handel=(e)=>{
      let name =e.target.name;
      let value=e.target.value;

      setinput(values=>({...values,[name]:value}))
      console.log({input})
  }

  const Result=async()=>{
    let api="http://localhost:3000/Student"
    const res=await axios.post(api,input)
    alert(`success}`)
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
export default App;