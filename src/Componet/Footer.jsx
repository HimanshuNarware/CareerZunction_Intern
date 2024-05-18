/** @format */

import React from 'react';
import { FaGithub, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import favicon from "../image/footer/favicon.png";
import img from "../image/footer/footer-qr.jpg";
import './Footer.css';
function Footer() {
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
              </a>&nbsp;
              <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank">
              <FaLinkedin className="linkedin" />
              </a>&nbsp;
              <a href="https://twitter.com/N_Himanshu_" target="_blank">
              <FaTwitter className="twittor" />
              </a>&nbsp;
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
              Star us
            </Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
