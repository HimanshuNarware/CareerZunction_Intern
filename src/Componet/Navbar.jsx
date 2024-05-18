/** @format */

import React, { useState } from 'react';
import './style.css';
import { GiCrossMark } from 'react-icons/gi';
// import { FaRegSun } from 'react-icons/fa // Changed';
import { HiLightBulb } from "react-icons/hi2";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaGithub, FaLaptop, FaHome } from 'react-icons/fa';
import { BsFiletypeDoc } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";


function Navbar() {
  const navigate=useNavigate();
  function handleRedirect(){
    navigate("/");
  }
  let [slidebarClick, setSlidebarClick] = useState(false);

  // function slidebarClicked(e){
  // // slidebarClick=slidebarClick?false:true;
  // // slidebarClick=slidebarClick?false:true;
  // // if(slidebarClick==false).?

  // console.log(slidebarClick)

  // }

  const toggleDarkMode = () => setSlidebarClick(!slidebarClick);

  // </div>
  return (
    <>
      <nav className="Navbar">
        <div 
          className="nav-icons"
          style={{ cursor: 'pointer',fontSize:'2em' }}
          onClick={toggleDarkMode}>
          {slidebarClick ? <RiLightbulbFlashFill /> : <HiLightBulb />}
        </div>
        <div className="left-sight" onClick={handleRedirect} style={{textAlign:'center',fontSize:'2em',cursor:'pointer'}} 
        >
        CareerZunction</div>
        <div className="right-sight">
          <div className="cart-item">
            <Link to="/" className='link'><IoHome />&nbsp;Home&nbsp;</Link>
          </div>
          <div className="cart-item">
            <Link to="/intern" className='link'> <FaLaptop/>&nbsp;Internships&nbsp;</Link>
          </div>
          <div className="cart-item">
            <Link to="/docs" className='link'><IoDocumentText/>&nbsp;Documentation&nbsp;</Link>
          </div>
          <div className="cart-item">
            <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" className='link'><FaGithub/>&nbsp;GitHub&nbsp;</Link>
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
          <div className="sidebar-options">
            {
              <Link to="/docs">
                <BsFiletypeDoc />
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" target="_blank">
                <FaGithub />
              </Link>
            }
          </div>
        </div>

       
    
    </>
  );
}

export default Navbar;