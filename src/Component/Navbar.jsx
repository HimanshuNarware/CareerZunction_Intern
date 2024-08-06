/** @format */

import React, { useState } from "react";
import "./style.css";
import { GiCrossMark } from "react-icons/gi";
import { FaGithub, FaLaptop, FaHome, FaRegSun, FaBars } from "react-icons/fa";
import { BsFiletypeDoc } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function handleRedirect() {
    navigate("/");
  }
  const [slidebarClick, setSlidebarClick] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => setSlidebarClick(!slidebarClick);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className="Navbar">
        <div
          className="nav-icons"
          style={{ cursor: "pointer", fontSize: "2em" , marginRight:"10em"}}
          onClick={toggleDarkMode}
        >
          {slidebarClick ? <GiCrossMark /> : <FaRegSun />}
        </div>
        <div
          className="left-sight"
          onClick={handleRedirect}
          style={{ textAlign: "center", fontSize: "2em", cursor: "pointer" }}
        >
          CareerZunction
        </div>
        <div className="right-sight">
          <div className="cart-item">
            <Link to="/" className="link">Home</Link>
          </div>
          <div className="cart-item">
            <Link to="/intern" className="link">Internships</Link>
          </div>
          <div className="cart-item">
            <Link to="/Blog" className="link">Blog</Link>
          </div>
          <div className="cart-item">
            <Link to="/docs" className="link">Documentation</Link>
          </div>
          <div className="cart-item">
            <Link
              to="https://github.com/HimanshuNarware/CareerZunction_Intern"
              className="link"
            >
              GitHub
            </Link>
          </div>
          <div className="cart-item">
            <Link to="/Contributors" className="link">Contributors</Link>
          </div>
          <div className="cart-item">
            <Link to="/Contact" className="link">Contact Us</Link>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <GiCrossMark /> : <FaBars />}
        </div>
      </nav>

      <div className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="close-button" onClick={toggleMobileMenu}>
          <GiCrossMark />
        </div>
        <div className="sidebar-item">
          <Link to="/" className="link">Home</Link>
        </div>
        <div className="sidebar-item">
          <Link to="/intern" className="link">Internships</Link>
        </div>
        <div className="sidebar-item">
          <Link to="/Blog" className="link">Blog</Link>
        </div>
        <div className="sidebar-item">
          <Link to="/docs" className="link">Documentation</Link>
        </div>
        <div className="sidebar-item">
          <Link
            to="https://github.com/HimanshuNarware/CareerZunction_Intern"
            className="link"
          >
            GitHub
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="/Contributors" className="link">Contributors</Link>
        </div>
        <div className="sidebar-item">
          <Link to="/Contact" className="link">Contact Us</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
