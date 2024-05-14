/** @format */

import React, { useState } from 'react';
import './style.css';
import { GiCrossMark } from 'react-icons/gi';
import { FaGithub, FaLaptop, FaHome, FaRegSun } from 'react-icons/fa';
import { BsFiletypeDoc } from 'react-icons/bs';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTheme } from '../Redux/Slice/ThemeSlice';

function Navbar() {
  let [slidebarClick, setSlidebarClick] = useState(true);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  function handleRedirect(){
    navigate("/");
  }


  const toggleDarkMode = () =>{
    setSlidebarClick(!slidebarClick);
    dispatch(setTheme(
      slidebarClick ? 'light' : 'dark'
    ));
    let navbar = document.querySelector(".Navbar");
    let link=document.querySelectorAll('.link');
    navbar.classList.toggle("alternate");
    link.forEach((element)=>{
      element.classList.toggle('alternate');
    });

  
  };

  // </div>
  return (
    <>
      <nav className="Navbar">
        <div 
          className="nav-icons"
          style={{ cursor: 'pointer',fontSize:'2em' }}
          onClick={toggleDarkMode}>
          {slidebarClick ? <GiCrossMark /> : <FaRegSun />}
        </div>
        <div className="left-sight" onClick={handleRedirect} style={{textAlign:'center',fontSize:'2em',cursor:'pointer'}} 
        >
          CareerZunction</div>
        <div className="right-sight">
          <div className="cart-item">
            <Link to="/" className='link'>Home</Link>
          </div>
          <div className="cart-item">
            <Link to="/intern" className='link'> Internships</Link>
          </div>
          <div className="cart-item">
            <Link to="/docs" className='link'>Documentation</Link>
          </div>
          <div className="cart-item">
            <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" className='link'>GitHub</Link>
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