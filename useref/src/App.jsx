// import { useRef } from "react";

// const App=()=>{
//   const myref =useRef();
//   const change=()=>{
//     myref.current.innerHTML="Welcome to cybrome !!";
//   }
//   return (
//     <>
//     <h1 ref={myref}>WELCOME TO MY PAGE</h1>
//     <button onClick={change}>Click Here</button>
//     </>
//   )
// }
// export default App;



// import { useRef } from "react";

// const App=()=>{
//   const myref =useRef();
//   const change=()=>{
    // myref.current.style.width="300px";
    // myref.current.style.padding="20px";
    // myref.current.style.backgroundColor="red";
    // myref.current.style.border="3px solid black";
    // myref.current.style.borderRadius="20px";
//   }
//   return (
//     <>
//     <div ref={myref}> hello we are developer </div>
//     <button onClick={change}>Click Here</button>
//     </>
//   )
// }
// export default App;



/*---------------------------------------increment decrement------------------------*/

// import { useRef } from "react";

// const App = () => {
//   const myref = useRef(0);

//   const inc = () => {
//     myref.current += 1;
//     console.log("Incremented:", myref.current);
//   };

//   const dec = () => {
//     myref.current -= 1;
//     console.log("Decremented:", myref.current);
//   };

//   return (
//     <>
//       <h1>Check console for value (UI won't update)</h1>
//       <button onClick={inc}>Increase</button>
//       <button onClick={dec}>Decrease</button>
//     </>
//   );
// };

// export default App;


// import { useEffect, useRef, useState } from "react";

// const App = () => {
//   const myref = useRef(0);
//   const [val,setval]=useState("")
//   useEffect(()=>{
//     myref.current++;
//   })
//   return (
//     <>
//       <h1>Check the render count</h1>
//       <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}}/>
//       <h1> my render count :{myref.current}</h1>
//     </>
//   );
// };

// export default App;



import { useRef } from "react";

const App=()=>{
  const myref =useRef();
  const change1=()=>{
    myref.current.innerHTML="Welcome to cybrome !!";
    myref.current.style.width="400px";
    myref.current.style.padding="20px";
    // myref.current.style.backgroundColor="red";
    myref.current.style.border="3px solid red";
    myref.current.style.borderRadius="20px";
  }
  const change2=()=>{
    myref.current.style.backgroundColor="yellow";
  }
  const change3=()=>{
    myref.current.innerHTML="WELCOME TO CYBROME !!";
    myref.current.style.color="red";
    myref.current.style.fontStyle="italic";
    myref.current.style.fontFamily = "Arial";


  }
  return (
    <>
    <h1 ref={myref}>Welcome to India</h1>
    <button onClick={change1}>Click Here1</button>
    <button onClick={change2}>Click Here2</button>
    <button onClick={change3}>Click Here3</button>
    </>
  )
}
export default App;