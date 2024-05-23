import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Doc from "./Component/Documetation/Doc";
import Error from "./Component/Error";
import InternPage from "./Component/Documetation/Internship/InternPage";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Wishlist from "./Component/Wishlist";


function App() {
  return(
 <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs" element={<Doc/>}/>
        <Route path="/intern" element={<InternPage/>}/>
        <Route path="/Contact" element={<Contact></Contact>}/>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
