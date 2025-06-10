import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./Pages/home";
import Display from "./Pages/display";
import Insertt from "./Pages/insert";
import Search from "./Pages/search";
import Update from "./Pages/update";
import Edit from "./Pages/edit";


const App=()=>{
  return(
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insertt/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="edit/:id" element={<Edit/>}/>

      </Route>
    </Routes> 
   </BrowserRouter>
    </>
  )
}
export default App;