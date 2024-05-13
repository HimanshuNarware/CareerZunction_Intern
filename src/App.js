import { Route, Routes } from "react-router-dom";
import Doc from "./Componet/Documetation/Doc";
import InternPage from "./Componet/Documetation/Internship/InternPage";
import Error from "./Componet/Error";
import Footer from "./Componet/Footer";
import Home from "./Componet/Home";
import Navbar from "./Componet/Navbar";


function App() {
  return(
 <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs" element={<Doc/>}/>
        <Route path="/intern" element={<InternPage/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
