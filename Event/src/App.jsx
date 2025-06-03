/*------------------------------without parameter----------------------*/
// const App=()=>{
//   const Display=()=>{
//     alert("hello React students")
//   }
//   return(
//     <>
//     <h1>welcome to react classes</h1>
//     <button onClick={Display}> click here</button>
//     </>
//   )
// }
// export default App;


/*----------------------------with parameter-----------------------------------*/
// const App=()=>{
//   const Display=(name,sirname)=>{
//     alert(`hello my name is ${name} ${sirname}`)
//   }
//   return(
//     <>
//     <button onClick={()=>{Display("Ritika","Singh")}}> click here</button>
//     </>
//   )
// }
// export default App;


/*---------------------------------event object------------------------------------------*/
// const App=()=>{
//   const Display=(e)=>{
//     console.log(e.type)
//   }
//   return(
//     <>
//     <button onClick={Display}> click here</button>
//     </>
//   )
// }
// export default App;



/*----------------------------------event object with parameter---------------------------------------*/
// const App=()=>{
//   const Display=(nm,e)=>{
//     alert(`hello my name is ${nm} and my type is ${e.type}`)
//   }
//   return(
//     <>
//     <button onClick={(e)=>{Display("Ritika",e)}}> click here</button>
//     </>
//   )
// }
// export default App;



// const App=()=>{
//   const Display=(nm,e)=>{
//     let name=e.target.name;
//     let val=e.target.value;
//     let ty=e.target.type;
//     console.log(`Name= ${name}  Value=${val}   Type= ${ty} `)
//     alert(`hello my name is ${nm} and my type is ${e.type} `)
//   }
//   return(
//     <>
//     <button type="btntyp" value="1010" name="button" onClick={(e)=>{Display("Ritika",e)}}> click here</button>
//     </>
//   )
// }
// export default App;



/*-----------------------------------input tag-----------------------------------------*/
const App=()=>{
  const Display=(e)=>{
    let name=e.target.name;
    let val=e.target.value;
    // console.log(`Name= ${name}  Value=${val}  `)
    console.log({[name]:val})

  }
  return(
    <>
    city: <input type="text" name="City" value="Bhopal" onChange={Display}/>
    </>
  )
}
export default App;