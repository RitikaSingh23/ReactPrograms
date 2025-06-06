import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Service from "./Pages/service";
import Join from "./Pages/join";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="join" element={<Join/>}/>
      <Route path="" element={<About/>}/>
      </Route>
    </Routes> 
   </BrowserRouter>
    </>
  )
}
export default App;