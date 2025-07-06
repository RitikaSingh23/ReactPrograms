import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addtotask ,deletetask,completetask,incompletetask,editsave} from "./todo";


const App=()=>{
  const [txt,settxt]=useState("");
  // const [val,setval]=useState("")
  const [taskid,settaskid]=useState("")
  const [btn,setbtn]=useState(true)

  const data=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();

  const myedit=(id,work)=>{
    settxt(work)
    setbtn(false)
    settaskid(id)
  }

  const myeditdata=()=>{
    setbtn(true)
    dispatch(editsave({id:taskid,work:txt}))
    settxt("")
  }
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
      <td><button onClick={()=>dispatch(incompletetask(key.id))}>uncomplete</button></td>
      <td><button onClick={()=>{myedit(key.id,key.work)}}>Edit</button></td>
    </tr>
    </>
  )
}
)
return(
  <>
  <h1> My to do list </h1>
  Enter task:<input type="text" value={txt} onChange={(e)=>{settxt(e.target.value)}} />

  {btn ?(<><button onClick={()=>{dispatch(addtotask({id:Date.now(),work:txt,status:"incomplete"}))}} > Add task </button></>):(<><button onClick={myeditdata}>Edit Save</button></>)}

  <br></br>
  <table border={2}>
      <tr>
      <th>Sno.</th>
      <th>Tasks</th>
      <th>Status</th>
      <th>Delete</th>
      <th>complete</th>
      <th>Incomplete</th>
      <th>Edit</th>
    </tr>
    {ans}
  </table>
  </>
)
}
export default App;