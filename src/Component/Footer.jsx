/** @format */

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaStar } from 'react-icons/fa6';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      {' '}
      <div className="page_2 footer">
        <div className="footer-wrapper">
          <div className="flex">
            <h3 className="footer-title">CareerZunction</h3>
            <p className="footer-pera">
              CareerZunction is a dynamic platform connecting eager students
              with valuable internship opportunities.
            </p>
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
          </div>

          <button size="size" type="defautl" className="button-star">
            <Link
              to="https://github.com/HimanshuNarware/CareerZunction_Intern"
              target='_blank'>
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
  );
}

export default Footer;
