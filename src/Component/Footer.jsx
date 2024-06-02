/** @format */

import React from 'react';
import { FaGithub, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
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
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
              </a>
            </div>
          </div>
       <div className='flex qrsec'>
         <img src={img} id='qr'/>
          <button size="size" type="defautl" className="button-star">
            <Link
              to="https://github.com/HimanshuNarware/CareerZunction_Intern"
              target='_blank' className='star-us'>
              {' '}
              <FaStar
                style={{ margin: '-2px 2px', lineHeight: '2px' }}
                className="star"
              />
              Rate us!
            </Link>
          </button>
          </div>
        </div>
        <div className="copy">
        &copy; {currentYear} All rights reserved. Made with 💜 by CareerZunction.
        </div>
      </div>
    </div>
  );
}

export default Footer;
