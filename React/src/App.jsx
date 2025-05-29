// import Auth from "./Auth";
// import Unauth from "./Unauth";
// import { useContext } from "react";
// import { myContext } from "./Login";

// const App=()=>{
//     const {user}=useContext(myContext);
//     return(
//         <>
//         <h1>Login System</h1>
//         {user.Auth ? <Auth/> : <Unauth/>}
//         </>
//     )
// }
// export default  App;





//useref-----------------------------------------------------------------------------------------------------------------------

// import { useRef } from "react";
// const App=()=>{
//     const myref=useRef("");
//     const fun=()=>{
//         myref.current.innerHTML="welcome to react classes";
//     }
//     return(
//         <>
//         <h1 ref={myref}> hello </h1>
//         <button onClick={fun}>click here</button>
//         </>
//     )
// }
// export default App;


// import { useRef } from "react";
// const App=()=>{
//     const myref=useRef("");
//     const fun=()=>{
//         myref.current.innerHTML="welcome to react classes";
//         myref.current.style.with="400px";
//         myref.current.style.border="5px solid green";
//         myref.current.style.margin="auto";
//         myref.current.style.textAlign="center";
//         myref.current.style.backgroundColor="yellow";


//     }
//     return(
//         <>

//         <button onClick={fun}>click here</button>
//         <div ref={myref}> Cybrom </div>
        
//         </>
//     )
// }
// export default App;



// import { useRef } from "react";
// const App=()=>{
//     const myref=useRef("");
//     const fun1=()=>{
//         myref.current.innerHTML="we learn react js from cybrom";
//         myref.current.style.width="400px";
//         myref.current.style.height="400px";
//         myref.current.style.border="5px solid green";
//         myref.current.style.margin="auto";
//         myref.current.style.marginTop="auto";
//         myref.current.style.textAlign="center";
//         myref.current.style.backgroundColor="yellow";
//     }

//     const fun2=()=>{
//         myref.current.innerHTML="we learn react js from cybrom";
//         myref.current.style.width="400px";
//         myref.current.style.height="400px";
//         myref.current.style.border="10px solid green";
//         myref.current.style.borderRadius="400px";
//         myref.current.style.margin="auto";
//         myref.current.style.textAlign="center";
//         myref.current.style.backgroundColor="yellow";
//     }

//     const fun3=()=>{
//         myref.current.innerHTML="we learn react js from cybrom";
//         myref.current.style.width="400px";
//         myref.current.style.height="400px";
//         myref.current.style.color="red";
//         myref.current.style.border="10px solid yellow";
//         myref.current.style.margin="auto";
//         myref.current.style.textAlign="center";
//         myref.current.style.backgroundColor="green";
//     }
//     return(
//         <>

//         <button onClick={fun1}>click here 1</button>
//         <button onClick={fun2}>click here 2</button>
//         <button onClick={fun3}>click here 3</button>

//         <div ref={myref}> Hello friends </div>
        
//         </>
//     )
// }
// export default App;

// import { useRef ,useState,useEffect} from "react";
// const App=()=>{
//    const [name,setname]=useState("");
//    const cnt=useRef(0);
//    useEffect(()=>{
//     cnt.current=cnt.current+1;
//    })
//     return(
//         <>
//         enter your name:<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
//         <h1>count: {cnt.current}</h1>
//         </>
//     )
// }
// export default App;







//usereduser hook ---------------------------------------------------------------------------------------------------------------------------------


import { useRef } from "react";
const App=()=>{
    const myref=useRef("");
    const fun=()=>{
        myref.current.innerHTML="welcome to react classes";
    }
    return(
        <>
        <h1 ref={myref}> hello </h1>
        <button onClick={fun}>click here</button>
        </>
    )
}
export default App;