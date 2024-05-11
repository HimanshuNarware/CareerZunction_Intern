import { Route, Routes } from "react-router-dom";
import Navbar from "./Componet/Navbar";
import Home from "./Componet/Home";
import Doc from "./Componet/Documetation/Doc";
import Error from "./Componet/Error";
import InternPage from "./Componet/Documetation/Internship/InternPage";
import Footer from "./Componet/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Doc />} />
        <Route path="/intern" element={<InternPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
