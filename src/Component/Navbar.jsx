import React, { useState, useEffect } from 'react';
import './style.css';
import { GiCrossMark } from 'react-icons/gi';
import { FaGithub, FaLaptop, FaHome, FaRegSun } from 'react-icons/fa';
import { BsFiletypeDoc } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [slidebarClick, setSlidebarClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  function handleRedirect() {
    navigate("/");
  }

  const toggleDarkMode = () => setSlidebarClick(!slidebarClick);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`Navbar ${scrolled ? 'NavbarScrolled' : ''} ${scrollDirection === 'down' ? 'NavbarHidden' : ''}`}>
        <div
          className="nav-icons"
          style={{ cursor: 'pointer', fontSize: '2em' }}
          onClick={toggleDarkMode}>
          {slidebarClick ? <GiCrossMark /> : <FaRegSun />}
        </div>
        <div className="left-sight" onClick={handleRedirect} style={{ textAlign: 'center', fontSize: '2em', cursor: 'pointer' }}>
          CareerZunction
        </div>
        <div className="right-sight">
          <div className="cart-item">
            <Link to="/" className='link'>Home</Link>
          </div>
          <div className="cart-item">
            <Link to="/intern" className='link'>Internships</Link>
          </div>
          <div className="cart-item">
            <Link to="/docs" className='link'>Documentation</Link>
          </div>
          <div className="cart-item">
            <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" className='link'>GitHub</Link>
          </div>
          <div className="cart-item">
            <Link to="/Contact" className='link'>Contact Us</Link>
          </div>
        </div>
      </nav>

      <div className="sidebar">
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
        <div className="sidebar-options">
          <Link to="/Contact" target="_blank">
            <FaRegSun />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
