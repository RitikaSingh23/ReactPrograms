import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./layout";
import About from "./about";
import Home from "./home";
import Contact from "./contact";
import Not from "./notfound";
import List from "./list";
const App=()=>{
  return(
    <>
    <h1>Hello welcome to my page </h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="list" element={<List/>}/>
        <Route path="*" element={<Not/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;