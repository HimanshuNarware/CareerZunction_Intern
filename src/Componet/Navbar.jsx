/** @format */

import React, { useState } from 'react';
import './style.css';
import { GiCrossMark, GiConversation } from 'react-icons/gi'; // Import GiConversation for Community/Forum
import { FaGithub, FaLaptop, FaHome, FaRegSun, FaQuestionCircle } from 'react-icons/fa'; // Import FaQuestionCircle for Help/FAQ
import { BsFiletypeDoc } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai'; // Import AiOutlineSearch for Search
import { Link } from 'react-router-dom';

function Navbar() {
  let [slidebarClick, setSlidebarClick] = useState(false);

  const toggleDarkMode = () => setSlidebarClick(!slidebarClick);

  return (
    <>
      <nav className="Navbar">
        <div 
          className="nav-icons"
          style={{ cursor: 'pointer', fontSize: '2em' }}
          onClick={toggleDarkMode}>
          {slidebarClick ? <GiCrossMark /> : <FaRegSun />}
        </div>
        <div className="left-sight" style={{ textAlign: 'center', fontSize: '2em', cursor: 'pointer' }}>
          CareerZunction
        </div>
        <div className="right-sight">
          {/* Existing items */}
          <div className="cart-item">
            <Link to="/" className='link'> <FaHome />Home</Link>
          </div>
          <div className="cart-item">
            <Link to="/intern" className='link'><FaLaptop /> Internships</Link>
          </div>
          <div className="cart-item">
            <Link to="/docs" className='link'><BsFiletypeDoc />Documentation</Link>
          </div>
          <div className="cart-item">
            <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" className='link'><FaGithub />GitHub</Link>
          </div>
          {/* New items */}
          <div className="cart-item">
            <Link to="/community" className='link'>
              <GiConversation /> Community
            </Link>
          </div>
          <div className="cart-item">
            <Link to="/help" className='link'>
              <FaQuestionCircle /> Help/FAQ
            </Link>
          </div>
          <div className="cart-item">
            <Link to="/search" className='link'>
              <AiOutlineSearch /> Search
            </Link>
          </div>
        </div>
      </nav>
  
      {/* Sidebar */}
      <div className="sidebar">
        {/* Existing sidebar options */}
        <div className="sidebar-options">
          <Link to="/">
            <FaHome />
          </Link>
        </div>
        <div className="sidebar-options">
          <Link to="/intern">
            <FaLaptop />
          </Link>
        </div>
        <div className="sidebar-options">
          <Link to="/docs">
            <BsFiletypeDoc />
          </Link>
        </div>
        <div className="sidebar-options">
          <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" target="_blank">
            <FaGithub />
          </Link>
        </div>
        {/* New sidebar options */}
        <div className="sidebar-options">
          <Link to="/community">
            <GiConversation />
          </Link>
        </div>
        <div className="sidebar-options">
          <Link to="/help">
            <FaQuestionCircle />
          </Link>
        </div>
        <div className="sidebar-options">
          <Link to="/search">
            <AiOutlineSearch />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
