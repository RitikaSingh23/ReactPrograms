import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addtotask ,deletetask,completetask,incompletetask} from "./todo";


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

      <td>
        {key.status=="incomplete"?(<>{key.work}</>):(<><span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span></>)}
      </td>
      <td>
        {key.status=="incomplete"?"incomplete":"completed"}
      </td>
      <td><button onClick={()=>dispatch(deletetask(key.id))} > Delete</button></td>
      <td><button onClick={()=>dispatch(completetask(key.id))}>Complete</button></td>
      <td><button onClick={()=>dispatch(incompletetask(key.id))}>Incomplete</button></td>
    </tr>
    </>
  )
}
)
return(
  <>
  <h1> My to do list </h1>
  Enter task:<input type="text" value={txt} onChange={(e)=>{settxt(e.target.value)}} />
  <button onClick={()=>{dispatch(addtotask({id:Date.now(),work:txt,status:"incomplete"}))}} > Add task </button>
  <br></br>
  <table border={2}>
      <tr>
      <th>Sno.</th>
      <th>Tasks</th>
      <th>Status</th>
      <th>Delete</th>
      <th>complete</th>
      <th>Incomplete</th>
    </tr>
    {ans}
  </table>
  </>
)
}
export default App;