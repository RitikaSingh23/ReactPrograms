/*-------------------------------simple map-----------------------------------------------------*/ 
// const App=()=>{
//   const name=["ritika","Farhan","Anjali","Gauri"]
//   const ans=name.map((key)=>{
//     return(
//       <h1>{key}</h1>
//     )
//   })
//   return(
//     <>
// <h1>Hello</h1>
// <h1>{ans}</h1>
//     </>
//   )
// }
// export default App;



/*-------------------------listing----------------------------------------------------------------------*/
// const App=()=>{
//   const name=["ritika","Farhan","Anjali","Gauri"]
//   const ans=name.map((key)=>{
//     return(
//       <li>{key}</li>
//     )
//   })
//   return(
//     <>
// <h1>Hello</h1>
// <ul>{ans}</ul>
// <ol>{ans}</ol>
//     </>
//   )
// }
// export default App;




/*----------------------------------------array of object in table--------------------------------------*/
// const App=()=>{
  // const name=[{
  //     "name":"Ritika",
  //     "id":101,
  //     "Age":22,
  //     "City":"Jhansi",
  //     "fees":20000
  //   },
  //   {
  //     "name":"Avanit",
  //     "id":102,
  //     "Age":23,
  //     "City":"kanpur",
  //     "fees":21000
  //   },
  //   {
  //     "name":"Farhan",
  //     "id":103,
  //     "Age":20,
  //     "City":"allahbad",
  //     "fees":25000
  //   },
  //   {
  //     "name":"Anjali",
  //     "id":104,
  //     "Age":19,
  //     "City":"Bhopal",
  //     "fees":22000
  //   },
  //   {
  //     "name":"Gauri",
  //     "id":105,
  //     "Age":22,
  //     "City":"Jabalpur",
  //     "fees":19000
  //   }]
  //   const ans=name.map((key)=>{
  //     return(
  //       <tr>
    // <td>{key.id}</td>
    // <td>{key.name}</td>
    // <td>{key.fees}</td>
    // <td>{key.City}</td>
    // <td>{key.Age}</td>
//       </tr>
//     )
//   })
  // return(
  //   <>
  //     <table border={1}>
  //       <tr>
  //         <th>ID</th>
  //         <th>NAME</th>
  //         <th>FEES</th>
  //         <th>CITY</th>
  //         <th>AGE</th>
  //       </tr>
  //         {ans}  
  //     </table>
  //   </>
  // )
// }
// export default App;


/*------------------------------------------array of object from anaother file ---------------------------------*/
// import EmpData from "./EmpData"
// const App=()=>{
//   const ans=EmpData.map((key)=>{
//     return(
//       <>
//       <tr>
//         <td>{key.id}</td>
//         <td>{key.name}</td>
//         <td>{key.salary}</td>
//         <td>{key.City}</td>
//         <td>{key.Age}</td>
//       </tr>
//       </>
//     )
//   })
//    return(
//     <>
//       <table border={1}>
//         <tr>
//           <th>ID</th>
//           <th>NAME</th>
//           <th>SALARY</th>
//           <th>CITY</th>
//           <th>AGE</th>
//         </tr>
//           {ans}  
//       </table>
//     </>
//   )
// }
// export default App;


/*----------------------------------making different components-------------------------------*/
// import EmpData from "./EmpData"
// import EmpDesign from "./EmpDesign"
// const App=()=>{
//   const ans=EmpData.map((key)=><EmpDesign
//   id={key.id}
//   name={key.name}
//   city={key.City}
//   age={key.Age}
//   sal={key.salary}
// />)
//    return(
//     <>
//       <table border={1}>
//         <tr>
//           <th>ID</th>
//           <th>NAME</th>
//           <th>CITY</th>
//           <th>AGE</th>
//           <th>SALARY</th>
//         </tr>
//           {ans}  
//       </table>
//     </>
//   )
// }
// export default App;


/*--------------------------product---------------------------------*/
import ProductData from "./ProductData";
import ProductDesign from "./ProductDesign";
const App=()=>{
  const ans=ProductData.map((key)=><ProductDesign
  pid={key.pid}
  pname={key.pname}
  qty={key.qty}

/>)
   return(
    <>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>PRODUCT NAME</th>
          <th>QUANTITY</th>
          
        </tr>
          {ans}  
      </table>
    </>
  )
}
export default App;