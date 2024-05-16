// Slider.js

import React, { useState } from 'react';
import Founder_img from '../../image/cz/h.png';
import Maintainer_img from '../../image/cz/c.jpeg';
import "./Slider.css"
import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa6';

const Slider = () => {
  const slides = [
    { role: 'Founder', imgSrc: Founder_img, name: 'Himanshu Narware' },
    { role: 'Maintainer', imgSrc: Maintainer_img, name: 'Chaitali Sonare '  },
    // Add more slides if needed
    ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
      <div className="slider-container" style={{position: "relative", display:"flex", justifyContent:'center'}}>
          <div className="arrow-container" style={{
              display: "flex", justifyContent: "space-between", top: "50%", position:"absolute", width: "100%", color:"white", zIndex:'99'
          }}>
      <div className=" left-arrow" onClick={prevSlide}>
        &lt;
          </div>
      <div className=" right-arrow" onClick={nextSlide}>
      &gt;
      </div>
              
          </div>
          <div className='section_maintainer' style={{textAlign: "center", }}>
              <img className="slide-image fimg" src={slides[currentSlide].imgSrc} alt={slides[currentSlide].name} />
              <p>{slides[currentSlide].role} : {slides[currentSlide].name}</p>
              <span>
                <a className="github" href='#' target='_blank'>{<FaGithub/>}</a>
                    <a className="linkedin" href='# ' target='_blank'><FaLinkedin/></a>
                </span>
              
          </div>
    </div>
  );
};

export default Slider;
