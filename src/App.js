import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Doc from "./Component/Documentation/Doc";
import Error from "./Component/Error";
import InternPage from "./Component/Documentation/Internship/InternPage";
import Footer from "./Component/Footer";
import Wishlist from "./Component/Wishlist";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Doc />} />
        <Route path="/intern" element={<InternPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
