import React, { useEffect, useState } from 'react'
import Founder_img from'../../image/cz/h.png'
import Maintainer_img from'../../image/cz/c.jpeg'
import './Detail.css'
import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa6';
import Slider from './Slider';

function Detail() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 700;

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
    <div style={{marginTop:"150px"}}>
        <h1 style={{color:"rgba(128, 128, 128, 0.44)",textAlign:'center'}}> Founder And Maintainers of CareerZunction</h1>
          <div className='ProjectD'>
              
              {width >= breakpoint ?
                  (<div className='' style={{width: "100%", display: "flex", justifyContent: "space-evenly", }}>
                  
                      <div className="section_founder">
                          <img className="fimg" src={Founder_img} alt="img" />
                          <p>Founder : Himanshu Narware</p>
                          <span>
                              <a className="github" href='https://github.com/HimanshuNarware' target='_blank'><FaGithub /></a>
                              <a className="linkedin" href='https://linkedin.com/himanshunarware ' target='_blank'><FaLinkedin /></a>
                          </span>

                      </div>
              
                      <div className="section_maintainer">
                          <img className='fimg' src={Maintainer_img} alt="img" />
                          <p>Maintainer : Chaitali Sonare</p>
                          <span>
                              <a className="github" href='#' target='_blank'>{<FaGithub />}</a>
                              <a className="linkedin" href='# ' target='_blank'><FaLinkedin /></a>
                          </span>
                      </div>
                  </div>) :
                  <Slider />}
        </div>
    </div>
  )
}

export default Detail