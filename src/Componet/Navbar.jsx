import React, { useState } from 'react';
import './style.css';
// Removed duplicate import of GiCrossMark
import { GiConversation } from 'react-icons/gi'; // For Community/Forum
import { FaGithub, FaLaptop, FaHome, FaQuestionCircle } from 'react-icons/fa';
import { BsFiletypeDoc } from 'react-icons/bs'; // For Documentation
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
        
        </div>
        <div className="left-sight" onClick={handleRedirect} style={{textAlign:'center',fontSize:'2em',cursor:'pointer'}} 
        >
          CareerZunction</div>
        <div className="right-sight">
          <div className="cart-item">
            <Link to="/" className='link'><FaLaptop />Home</Link>
          </div>
          <div className="cart-item">
            <Link to="/intern" className='link'><FaHome /> Internships</Link>
          </div>
          <div className="cart-item">
            <Link to="/docs" className='link'><BsFiletypeDoc />Documentation</Link>
          </div>
          <div className="cart-item">
            <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" className='link'><FaGithub />GitHub</Link>
          </div>
          <div className="cart-item">
            <Link to="/community" className='link'><GiConversation />Community</Link>
          </div>
          <div className="cart-item">
            <Link to="/help" className='link'><FaQuestionCircle />Help/FAQ</Link>
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
