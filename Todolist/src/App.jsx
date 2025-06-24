import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addtotask ,deletetask} from "./todo";


const App=()=>{
  const [txt,settxt]=useState("");
  const data=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();

let sno=0;
const ans =data.map((key)=>{
  sno++
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>{key.work}</td>
      <td><button onClick={()=>dispatch(deletetask(key.id))} > Delete</button></td>
    </tr>
    </>
  )
}
)
return(
  <>
  <h1> My to do list </h1>
  Enter task:<input type="text" value={txt} onChange={(e)=>{settxt(e.target.value)}} />
  <button onClick={()=>{dispatch(addtotask({id:Date.now(),work:txt}))}} > Add task </button>
  <br></br>
  <table border={2}>
      <tr>
      <th>Sno.</th>
      <th>Tasks</th>
      <th>Delete</th>
      <th>Edit</th>
    </tr>
    {ans}
  </table>
  </>
)
}
export default App;