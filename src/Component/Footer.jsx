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
              <Link className="doc-pera doc-perag" to={'https://opensource.com/resources/what-open-source'}>What is Open-Source.</Link>
              <Link className="doc-pera doc-perag" to={'https://opensource.guide/how-to-contribute/'}>What is Git and GitHub.</Link>
              <Link className="doc-pera doc-perag" to={'https://docs.github.com/en/get-started/using-git/about-git'}>
                How to start contributing to Open-Source.
              </Link>
            </div>
          </div>
          <div className="flex licenseGroup">
            <h3 className="lice ">License </h3>
            <h5 className="license underline" style={{ cursor: 'none' }}>MIT License</h5>
            <h5 className="coc underline" style={{ cursor: 'none' }}>Code of Conduct</h5>
            <h3 className='links'>Get in touch</h3>
            <div className="footer-socail-icon">
              <a href="https://github.com/HimanshuNarware" target="_blank">
              <FaGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank">
              <FaLinkedin className="linkedin" />
              </a>
              <a href="https://twitter.com/N_Himanshu_" target="_blank">
              <FaTwitter className="twittor" />
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
