// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import Founder_img from'../../image/cz/h.png'
import Maintainer_img from'../../image/cz/c.jpeg'
import './Detail.css'
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa6';
import Slider from './Slider';

function Detail() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 550;

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
  return (
    <div  style={{marginTop:"150px"}}>
        <h1 style={{color:"rgba(128, 128, 128, 0.44)",textAlign:'center'}}> Founder And Maintainers of CareerZunction</h1>
          <div className='ProjectD'>
              
              {width >= breakpoint ?
                  (<div className='inner-container' style={{width: "100%", display: "flex", justifyContent: "space-evenly"}}>
                  
                      <div className="section_founder">
                          <img className="fimg" src={Founder_img} alt="img" />
                          <div class='content'> 
                          <p>Founder : Himanshu Narware</p>
                          {/* <span>

                          <a  href="https://github.com/HimanshuNarware" target="_blank">
              <FaGithub className='github' />
              </a>
              <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank">
              <FaLinkedin className="linkedin" />
              </a>
              <a href="https://twitter.com/N_Himanshu_" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
              </a>

                          </span> */}


<div className='outerD  gap-4 md:gap-2'>
        <span className='icons'>
        <a  href="https://github.com/HimanshuNarware" target="_blank"> <FaGithub
                color="white"
                fontSize={25}
                className="ico "
              /></a></span>
                <span  className='icons'> <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank">
                  <FaLinkedin color="white" fontSize={25} className="ico" />

                </a></span>
                <span  className='icons'> <a href="https://twitter.com/N_Himanshu_" target="_blank">
                  <FaXTwitter  className="ico" />
                </a></span></div>
</div>
                      </div>
              
                      <div className="section_maintainer ">
                          <img className='fimg' src={Maintainer_img} alt="img" />
                          <div class='content'>
                          <p>Maintainer : Chaitali Sonare</p>
                          {/* <span>

                          <a href="https://github.com/HimanshuNarware" target="_blank">
              <FaGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank">
              <FaLinkedin className="linkedin" />
              </a>
              <a href="https://twitter.com/N_Himanshu_" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
              </a>
                            
                          </span> */}
                         <div className='outerD  gap-4 md:gap-2'>
        <span className='icons'>
        <a  href="https://github.com/HimanshuNarware" target="_blank"> <FaGithub
                color="white"
                fontSize={25}
                className="ico "
              /></a></span>
                <span  className='icons'> <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank">
                  <FaLinkedin color="white" fontSize={25} className="ico" />

                </a></span>
                <span  className='icons'> <a href="https://twitter.com/N_Himanshu_" target="_blank">
                  <FaXTwitter  className="ico" />
                </a></span></div>
                          </div>
                      </div>
                  </div>) :
                  <Slider />}
        </div>
    </div>
  )
}

export default Detail
