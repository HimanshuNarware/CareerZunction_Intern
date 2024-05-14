import React, { useState } from 'react';
import './style.css';
import { GiCrossMark } from 'react-icons/gi';
import { FaRegSun } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  function handleRedirect(){
    navigate("/");
  }
  let [slidebarClick, setSlidebarClick] = useState(false);

  const toggleDarkMode = () => setSlidebarClick(!slidebarClick);

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
          <div className="cart-item">
            <Link to="/community" className='link'>Community</Link>
          </div>
          <div className="cart-item">
            <Link to="/help" className='link'>Help/FAQ</Link>
          </div>
        </div>
      </nav>
  
        <div className="sidebar ">
          <div className="sidebar-options">
            {
              <Link to="/">
                Home
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="/intern">
                Internships
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="/docs">
                Documentation
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" target="_blank">
                GitHub
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="/community">
                Community
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="/help">
                Help/FAQ
              </Link>
            }
          </div>
        </div>
    </>
  );
}

export default Navbar;
