/** @format */
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import React, { useContext, useState } from "react";
import "./style.css";
import "../../src/index.css"
import { GiCrossMark } from "react-icons/gi";
import { FaGithub, FaLaptop, FaHome, FaRegSun } from "react-icons/fa";
import { BsFiletypeDoc } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";


import { ThemeContext } from "../Theme";


const Navbar = () => {
  // const toggle_mode = ()=>{
  //   theme == 'light' ? setTheme('dark') : setTheme('light');

  // }

  // new
  // const [isDarkTheme , setIsDarkTheme] = useState(false)
  const { theme,isDarkTheme, toggleTheme } = useContext(ThemeContext);


  // const [isDarkTheme , setIsDarkTheme] = useState(true);
  // function handleClick() {
  //   setIsDarkTheme(!isDarkTheme);
  // }

  const navigate = useNavigate();
  function handleRedirect() {
    navigate("/");
  }
  let [slidebarClick, setSlidebarClick] = useState(false);

  // function slidebarClicked(e){
  // // slidebarClick=slidebarClick?false:true;
  // // slidebarClick=slidebarClick?false:true;
  // // if(slidebarClick==false).?

  // console.log(slidebarClick)

  // }

  var toggleDarkMode = () => setSlidebarClick(!slidebarClick);

  // </div>
  return (
    <>
      <nav className="Navbar">
        {/* <div>
        <img style={{width: "200px"}} src={theme == 'light' ? logo_light : logo_dark} alt="" className="'logo"/>
        </div> */}
        <div
          className="nav-icons"
          style={{ cursor: "none", fontSize: "2em" }}
          onClick={toggleDarkMode}>

          {slidebarClick ? <GiCrossMark /> : <FaRegSun />}
        </div>

        <div
          className="left-sight"
          onClick={handleRedirect}
          style={{ textAlign: "center", fontSize: "2em", cursor: "none" }}>
          CareerZunction
        </div>
        <div className="right-sight">
          <div className="cart-item">
            <Link to="/" className="link">
              {" "}
              Home
            </Link>
          </div>
          <div className="cart-item">
            <Link to="/intern" className="link">
              {" "}
              Internships
            </Link>
          </div>
          <div className="cart-item">
            <Link to="/Blog" className="link">
              Blog
            </Link>
          </div>
          <div className="cart-item">
            <Link to="/docs" className="link">
              {" "}
              Documentation
            </Link>
          </div>
          <div className="cart-item">
            <Link
              to="https://github.com/HimanshuNarware/CareerZunction_Intern"
              className="link">
              {" "}
              GitHub
            </Link>
          </div>
          <div className="cart-item">
            <Link to="/Contributors" className="link">
              {" "}
              Contributors
            </Link>
          </div>
          <div className="cart-item">
            <Link to="/Contact" className="link">
              {" "}
              Contact Us
            </Link>
          </div>
          {/* <div className="toggle-icon">
            <i class="fa-solid fa-delete"></i>
            <Link className="link">
              {" "}
              <i class="fa-regular fa-moon"></i>

            </Link>
          </div> */}
          <div className="toggle-icon">
          <button onClick={() => toggleTheme()} >{isDarkTheme ? <LuSun /> : <FaMoon />}</button>
          </div>
        </div>
      </nav>

      <div className="sidebar ">
        <div className="sidebar-options">
          {
            <Link to="/">
              <FaHome />
            </Link>
          }
        </div>
        <div className="sidebar-options">
          {
            <Link to="/intern">
              <FaLaptop />
            </Link>
          }
        </div>
        <div className="sidebar-optionss">{<Link to="/Blog"></Link>}</div>
        <div className="sidebar-options">
          {
            <Link to="/docs">
              <BsFiletypeDoc />
            </Link>
          }
        </div>
        <div className="sidebar-options">
          {
            <Link
              to="https://github.com/HimanshuNarware/CareerZunction_Intern"
              target="_blank">
              <FaGithub />
            </Link>
          }
        </div>
        <div className="sidebar-optionss">
          {<Link to="/Contact" target="_blank"></Link>}
        </div>
        {/* <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt=""
         className="toggle-icon"/> */}
      </div>



    </>
  );
}

export default Navbar;
