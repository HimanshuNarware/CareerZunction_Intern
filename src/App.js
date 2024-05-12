import { Route, Routes } from "react-router-dom";
import Doc from "./Component/Documentation/Doc";
import InternPage from "./Component/Documentation/Internship/InternPage";
import Error from "./Component/Error";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";


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
