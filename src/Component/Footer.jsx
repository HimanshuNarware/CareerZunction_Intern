import React from 'react';
import { FaGithub, FaLinkedin, FaStar} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import favicon from "../image/footer/favicon.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import img from "../image/footer/footer-qr.jpg";
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3 className="footer-title">
            <img src={favicon} alt="logo" className="footer-favicon" />
            CareerZunction
          </h3>
          <p className="footer-pera">
            CareerZunction is a dynamic platform connecting eager students with valuable internship opportunities.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Documentation</h4>
          <ul className="footer-links">
            <li onClick={() => window.open('https://opensource.com/resources/what-open-source')}>
              <span>What is Open-Source</span>
            </li>
            <li onClick={() => window.open('https://opensource.guide/how-to-contribute/')}>
              <span>What is Git and GitHub</span>
            </li>
            <li onClick={() => window.open('https://docs.github.com/en/get-started/using-git/about-git')}>
              <span>How to start contributing to Open-Source</span>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-links">
            <li><span> <a href="/privacypolicy">Privacy Policy</a></span></li>
            <li><span><a href="/terms">Terms and Conditions</a></span></li>
            <li><span><a href="#">MIT License</a></span></li>
            <li><span><a href="https://github.com/HimanshuNarware/CareerZunction_Intern?tab=coc-ov-file#readme">Code of Conduct</a></span></li>
          </ul>
          <h4 className="footer-heading">Get in touch</h4>
          <div className="footer-social-icons">
            <a href="https://github.com/HimanshuNarware" target="_blank" rel="noopener noreferrer">
              <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </a>
            <a href="https://twitter.com/N_Himanshu_" target="_blank" rel="noopener noreferrer">
              <FaXTwitter/>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <img src={img} id="qr" alt="QR Code" className="footer-qr" />
          <div className="footer-social-icons">
            <a href="https://github.com/HimanshuNarware/CareerZunction_Intern" target="_blank" rel="noopener noreferrer">
              <FaStar />
            </a>
            <div className="rate-us">Rate us!</div>
          </div>
        </div>
      </div>
      
      <div className="copy">
        &copy; {currentYear} All rights reserved. Made with 💜 by CareerZunction.
      </div>
    </footer>
  );
}

export default Footer;
