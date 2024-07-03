/** @format */

import React from 'react';

import { FaGithub, FaLinkedin, FaStar, FaXTwitter } from 'react-icons/fa6';

import { Link } from 'react-router-dom';

import { FaGithub, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import favicon from "../image/footer/favicon.png";
import img from "../image/footer/footer-qr.jpg";
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (

    <div>
      {' '}
      <div className="page_2 footer">
        <div className="footer-wrapper">
          <div className="flex">
            <h3 className="footer-title"><img src={favicon} alt="logo" className='footer-favicon'/>CareerZunction</h3>
            <p className="footer-pera">
              CareerZunction is a dynamic platform connecting eager students
              with valuable internship opportunities.
            </p>
            
          </div>
          <div className="flex docGroup">
            <h4 className="doc">Documentation</h4>
            <div className="doc-pera">
              <p className="doc-pera doc-perag" onClick={() => { window.open('https://opensource.com/resources/what-open-source') }}>What is Open-Source.</p>
              <p className="doc-pera doc-perag" onClick={() => { window.open('https://opensource.guide/how-to-contribute/') }}>What is Git and GitHub.</p>
              <p className="doc-pera doc-perag" onClick={() => { window.open('https://docs.github.com/en/get-started/using-git/about-git') }}>
                How to start contributing to Open-Source.
              </p>
            </div>
          </div>
          <div className="flex licenseGroup">
            <h3 className="lice ">License </h3>
            <h5 className="license underline" style={{ cursor: 'pointer' }}>MIT License</h5>
            <h5 className="coc underline" style={{ cursor: 'pointer' }}>Code of Conduct</h5>
            <h3 className='links'>Get in touch</h3>
            <div className="footer-socail-icon">
              <a href="https://github.com/HimanshuNarware" target="_blank">
              <FaGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank">
              <FaLinkedin className="linkedin" />
              </a>
              <a href="https://twitter.com/N_Himanshu_" target="_blank">
              <FaXTwitter className="twittor" />
              </a>
            </div>

    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3 className="footer-title">
            <img src={favicon} alt="logo" className='footer-favicon' />
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
              What is Open-Source
            </li>
            <li onClick={() => window.open('https://opensource.guide/how-to-contribute/')}>
              What is Git and GitHub
            </li>
            <li onClick={() => window.open('https://docs.github.com/en/get-started/using-git/about-git')}>
              How to start contributing to Open-Source
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">License</h4>
          <ul className="footer-links">
            <li>MIT License</li>
            <li>Code of Conduct</li>
          </ul>
          <h4 className="footer-heading">Get in touch</h4>
          <div className="footer-social-icons">
            <a href="https://github.com/HimanshuNarware" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/N_Himanshu_" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>

          </div>
        </div>
        <div className="footer-section">
          <img src={img} id='qr' alt="QR Code" className="footer-qr"/>
          <div className="footer-social-icons">
            <a herf="https://github.com/HimanshuNarware/CareerZunction_Intern" target='_blank' rel="noopener noreferrer" >
              <FaStar  /> 
            </a><div className='rate-us'>Rate us!</div>
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
