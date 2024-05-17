/** @format */

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaStar } from 'react-icons/fa';
import favicon from "../image/footer/favicon.png";
import './Footer.css';
import { Link } from 'react-router-dom';
import img from "../image/footer/footer-qr.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-section">
        <div className="footer-title-container">
              <img src={favicon}alt="favicon" className="footer-favicon" />
              <h3 className="footer-title">CareerZunction</h3>
            </div>
          <p className="footer-pera">
            CareerZunction is a dynamic platform connecting eager students
            with valuable internship opportunities.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Documentation</h4>
          <div className="footer-links">
            <p className="footer-link" onClick={() => { window.open('https://opensource.com/resources/what-open-source') }}>What is Open-Source</p>
            <p className="footer-link" onClick={() => { window.open('https://opensource.guide/how-to-contribute/') }}>What is Git and GitHub</p>
            <p className="footer-link" onClick={() => { window.open('https://docs.github.com/en/get-started/using-git/about-git') }}>How to start contributing to Open-Source</p>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Get in Touch</h4>
          <div className="footer-icons">
            <a href="https://github.com/HimanshuNarware" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://twitter.com/N_Himanshu_" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="footer-icon" />
            </a>
          </div>
        </div>

        <div className="footer-section qr-section">
          <img src={img} alt="QR Code" className="footer-qr" />
          <button className="button-star">
            <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" target="_blank" className="star-us">
              <FaStar className="star" /> Star us
            </Link>
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 CareerZunction</p>
      </div>
    </footer>
  );
}

export default Footer;
