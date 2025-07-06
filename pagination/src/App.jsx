import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Insert from "./pages/insert";
import Display from "./pages/display";

const App=()=>{
  return(
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;