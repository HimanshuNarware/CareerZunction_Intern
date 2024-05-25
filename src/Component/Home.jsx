/** @format */

import React, { useState } from 'react';
import '../Style/Home.css';
import '../Style/util.css';
import '../Style/test-style.css';
import '../Style/swiper-bundle.min.css'
import code from '../image/code.jpg';
import code1 from '../image/code1.jpg';
import code2 from '../image/code2.jpg';
import code4 from '../image/code4.jpg';
import code5 from '../image/code5.jpg';
import code6 from '../image/code6.jpg';
import code7 from '../image/code7.jpg';
import code8 from '../image/code8.jpg';
import img1 from '../image/desktopImg/code.jpg';
import img6 from '../image/desktopImg/img 3.jpg';
import img5 from '../image/desktopImg/img 4.jpg';
import img4 from '../image/desktopImg/img 5.jpg';
import img2 from '../image/desktopImg/img 7.jpg';
import img7 from '../image/desktopImg/img2.jpg';
import img8 from '../image/desktopImg/img 9.jpg';
import img9 from '../image/desktopImg/img 8.jpg';
import test1 from '../image/testimonials-1.jpg';
import test2 from '../image/testimonials-2.jpg';
import test3 from '../image/testimonials-3.jpg';
import test4 from '../image/testimonials-4.jpg';
import { Button } from 'antd';
import { GiGlobe, GiWorld } from 'react-icons/gi';
import { FaIndianRupeeSign, FaPeopleGroup } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'B.Sharmila',
    image: test1,
    text: 'CareerZunction simplified my internship search with its user-friendly interface and extensive listings. Thanks to their resources, I secured an internship aligned with my career goals.',
    stars: 5,
  },
  {
    name: 'Prem Sampath',
    image: test2,
    text: 'CareerZunction streamlined my internship hunt, offering tailored opportunities in marketing. Their platform helped me land an internship that enriched my skills and connections.',
    stars: 4,
  },
  {
    name: 'Aron Loes',
    image: test3,
    text: 'CareerZunctions intuitive interface and personalized profiles made finding an internship effortless. I found a finance internship that aligned perfectly with my career aspirations.',
    stars: 5,
  },
  {
    name: 'Sonal K',
    image: test4,
    text: 'CareerZunctions collaboration with educational institutions provided me with exclusive engineering internships. Their platform played a crucial role in enhancing my practical skills.',
    stars: 5,
  },
];

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <div className="page_0">
        <div className="bx-1">
          <h2>
            Elevate
            <br /> Your
            <br />
            Future
          </h2>
          <h4>
            <i>Land your dream career.....</i>
          </h4>
          <Button className="check-now">
            <Link to="/intern" className="link1">
              Check Now
            </Link>
          </Button>
        </div>
        <div className="bx-2">
          <img className="home-img img-1" src={code} alt="img" />
          <img className="home-img img-2" src={code1} alt="img" />
          <img className="home-img img-3" src={code2} alt="img" />
          <img className="home-img img-4" src={code4} alt="img" />
          <img className="home-img img-5" src={code5} alt="img" />
          <img className="home-img img-6" src={code6} alt="img" />
          <img className="home-img img-7" src={code7} alt="img" />
          <img className="home-img img-8" src={code8} alt="img" />
        </div>
      </div>
      <div className="page_1">
        <div className="wrapper_p1">
          <div className="wrapper-bx-1 ">
            <div className="sub_title">About us</div>
            <p className="peragraph" style={{ textAlign: 'center' }}>
              Find your first internship
            </p>
          </div>
          <div className="wrapper-bx-2">
            <div className="wrapper-bx-2-0 wrapper-bx-2-1 outline">
              <i className="icon" style={{ color: 'blueviolet' }}>
                <GiWorld />
              </i>
              <div className="wrapper-subbx">
                <h3>World's Biggest</h3>
                <p>The World's biggest collection of internships.</p>
              </div>
            </div>
            <div className="wrapper-bx-2-0 wrapper-bx-2-2 outline">
              <i className="icon" style={{ color: 'blueviolet' }}>
                <GiGlobe />
              </i>
              <div className="wrapper-subbx">
                <h3>Around the Globe</h3>
                <p>
                  You can find more than 600+ internships, Open-source
                  programs, and hackathons.
                </p>
              </div>
            </div>
            <div className="wrapper-bx-2-0 wrapper-bx-2-3 outline">
              <i className="icon" style={{ color: 'blueviolet' }}>
                <FaPeopleGroup />
              </i>
              <div className="wrapper-subbx">
                <h3>Open Source</h3>
                <p>This project is open source and you can contribute to it.</p>
              </div>
            </div>
            <div className=" wrapper-bx-2-0 wrapper-bx-2-4 outline">
              <i className="icon" style={{ color: 'blueviolet' }}>
                <FaIndianRupeeSign />
              </i>
              <div className="wrapper-subbx">
                <h3>Free to use</h3>
                <p>This project is free to use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="desktopImg">
          <img className="img img1" src={img1} alt="is" />
          <img className="img img2" src={img2} alt="is" />
          <img className="img img3" src={img7} alt="is" />
          <img className="img img4" src={img6} alt="is" />
          <img className="img img5" src={img8} alt="is" />
          <img className="img img6" src={img5} alt="is" />
          <img className="img img7" src={img9} alt="is" />
          <img className="img img8" src={img4} alt="is" />
        </div>
      </section>
      <div className="testimonial-section">
  <h2 className="h2 section-title has-underline" style={{ marginTop: '15px', color: 'white' ,display:'flex',justifyContent:'center',fontSize:'30px'}}>
    Testimonials
  </h2>
  <p className="section-subtitle" style={{ marginTop: '15px', color: 'white' ,display:'flex',justifyContent:'center',marginBottom:'15px',fontSize:'20px'}}>Discover Stories of Success: Hear What Our Community Says</p>
  <div className="testimonial-buttons">
    <button className="prev-button" onClick={prevTestimonial}>‹</button>
    <div className="slide-container swiper" style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
      <div className="slide-content">
        <div className="card-wrapper swiper-wrapper">
          {testimonials.slice(currentTestimonial, currentTestimonial + 3).map((testimonial, index) => (
            <div key={index} className="card" style={{ margin: '0 10px' }}>
              <div className="fronts" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="image-content">
                  <div className="card-image">
                    <img src={testimonial.image} alt="" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
                  </div>
                  <h2 style={{ fontSize: '20px' }}>{testimonial.name}</h2>
                  <div className="rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} role="img" aria-label="star" style={{ marginRight: '3px' }}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="backs" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', padding: '10px 10px' ,color:'black'}}>
                {testimonial.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <button className="next-button" onClick={nextTestimonial}>›</button>
  </div>
</div>

    </div>
  );
}

export default Home;

