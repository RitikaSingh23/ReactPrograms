import { useState,useEffect } from "react";

const App=()=>{
  const [count,setcount]=useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setcount(count+1)
    },1000)
    console.log(`count: ${count}`)
  })

  return(
    <>
    <h1>Welcome to my App</h1>
    <h1>Count:{count}</h1>
    </>
  )
}
export default App;