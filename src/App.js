import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Doc from "./Component/Documetation/Doc";
import Error from "./Component/Error";
import InternPage from "./Component/Documetation/Internship/InternPage";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Blog from "./Component/Documetation/Blog";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spinner = document.getElementById("spinner");
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      }, 2000);
    }
  }, []);

  return (
    !loading && (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Doc />} />
          <Route path="/intern" element={<InternPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    )
  );
}

export default App;
