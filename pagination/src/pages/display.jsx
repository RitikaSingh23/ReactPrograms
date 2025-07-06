// import axios from "axios";
// import { useState,useEffect} from "react";

// const Display=()=>{
//    const [mydata, setMydata] = useState([]);
//   const loadData=async()=>{
//      let api="http://localhost:3000/page";
//      const response = await axios.get(api);
//      console.log(response.data);
//      setMydata(response.data);
//   }
//   useEffect(()=>{
//     loadData();
//   }, []);
//   let sno=0;
//   const ans= mydata.map((key)=>{
//      sno++;
//     return(
//       <>
//         <tr>
//           <td> {sno} </td>
//           <td> {key.name} </td>
//           <td> {key.id} </td>
//           <td> {key.city} </td>
//         </tr>
//       </>
//     )
//   });
//     return(
//         <>
//           <h1> Display Page</h1>
//     <table border={2}>
//       <thead>
//         <tr>
//           <th>Sno</th>
//           <th>Name</th>
//           <th>ID</th>
//           <th>City </th>
//         </tr>
//       </thead>
//       <tbody border={2}>
//         {ans}
//       </tbody>
//      </table>
//         </>
//     )
// }
// export default Display;

import axios from "axios";
import { useState, useEffect } from "react";

const Display = () => {
  const [mydata, setMydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;

  const loadData = async () => {
    try {
      const api = "http://localhost:3000/page";
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = mydata.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(mydata.length / rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <h1>Display Page</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            {/* <th>ID</th> */}
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((key, index) => (
            <tr key={key.id}>
              <td>{indexOfFirstRow + index + 1}</td>
              <td>{key.name}</td>
              <td>{key.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Display;
