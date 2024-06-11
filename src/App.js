import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Componet/Navbar";
import Home from "./Componet/Home";
import Doc from "./Componet/Documetation/Doc";
import Error from "./Componet/Error";
import InternPage from "./Componet/Documetation/Internship/InternPage";
import Footer from "./Componet/Footer";
import Login from "./Componet/pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Componet/pages/Register";
import { AuthProvider } from "./Componet/AuthContext";
import ProtectedRoute from "./Componet/ProtectedRoute";

function App() {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Doc />} />
          <Route
            path="/intern"
            element={
              <ProtectedRoute>
                <InternPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
        {!hideFooter && <Footer />}
      </AuthProvider>
    </div>
  );
}

export default App;
