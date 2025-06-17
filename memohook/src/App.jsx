// import { useState,useMemo } from "react";

// const App=()=>{
//   const [add,setadd]=useState(0);
//   const [sub,setsub]=useState(100);
//   const mymulti=useMemo(()=>{
//     console.log("**");
//     return add*2;
//   },[add]);
   
//   return(
//     <>
//     <h1>Welcome</h1>
//     <h1>Multiplication:{mymulti} </h1>
//     <h1>Addition:{add}</h1>
//     <button onClick={()=>{setadd(add+1)}}>ADD</button>
//     <h1>Subtraction:{sub}</h1>
//     <button onClick={()=>{setsub(sub-1)}}>SUB</button>
//     </>
//   )
// }

// export default App;

import { useState,useMemo } from "react";

const App=()=>{
  const [count,setcount]=useState(0);
  const [city,setcity]=useState("");

  const myexpen=useMemo(()=>{
    for(var i=0;i<100000000;i++){}
    return count*2;
  },[count])
   
  // function myexpen(){
  //   for(var i=0;i<1000000000;i++){}
  //   return count*2;
  // }
  return(
    <>
    <h1>Welcome</h1>
    Enter the number: <input type="number" value={count} onChange={(e)=>{setcount(e.target.value)}}/>
    Enter the city: <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}}/>
    <h1>My Expencive count:{myexpen}</h1>
    {/* <h1>My Expencive count:{myexpen()}</h1> */}
    </>
  )
}

export default App;