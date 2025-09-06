import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './Testimonials.css';

const testimonials = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', photo: 'https://randomuser.me/api/portraits/men/1.jpg', quote: 'CareerZunction provided me with the best internship opportunities and helped me grow professionally.' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager', photo: 'https://randomuser.me/api/portraits/women/2.jpg', quote: 'The platform is user-friendly and offers diverse opportunities for career growth.' },
  { id: 3, name: 'Michael Brown', position: 'UX Designer', photo: 'https://randomuser.me/api/portraits/men/3.jpg', quote: 'I found an amazing internship through CareerZunction that perfectly matched my skills.' },
  { id: 4, name: 'Emily Johnson', position: 'Marketing Specialist', photo: 'https://randomuser.me/api/portraits/women/4.jpg', quote: 'The internships offered are top-notch and have helped me advance my career significantly.' },
  { id: 5, name: 'David Wilson', position: 'Data Scientist', photo: 'https://randomuser.me/api/portraits/men/5.jpg', quote: 'CareerZunction is a game-changer for students seeking valuable internships.' },
  { id: 6, name: 'Sophia Davis', position: 'Content Writer', photo: 'https://randomuser.me/api/portraits/women/6.jpg', quote: 'I secured a fantastic internship thanks to CareerZunction. Highly recommend it!' },
  { id: 7, name: 'James Lee', position: 'Graphic Designer', photo: 'https://randomuser.me/api/portraits/men/7.jpg', quote: 'The platform is intuitive and provides excellent internship opportunities.' },
  { id: 8, name: 'Olivia Martinez', position: 'Web Developer', photo: 'https://randomuser.me/api/portraits/women/8.jpg', quote: 'CareerZunction helped me find an internship that perfectly aligned with my career goals.' },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const testimonialsRef = useRef();
  
    const totalTestimonials = testimonials.length;
    const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
    const slideAnimation = useSpring({
      transform: `translateX(-${(currentIndex + 1) * (100 / 3)}%)`,
      config: { duration: 500 },
      onRest: () => setIsAnimating(false),
    });
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!isAnimating) {
          nextSlide();
        }
      }, 5000);
      return () => clearInterval(interval);
    }, [currentIndex, isAnimating]);
  
    const nextSlide = () => {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= totalTestimonials * 2) {
          setTimeout(() => {
            setIsAnimating(false);
            setCurrentIndex(0);
          }, 500);
          return prevIndex;
        }
        return nextIndex;
      });
    };
  
    const prevSlide = () => {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex - 1;
        if (nextIndex < 0) {
          setTimeout(() => {
            setIsAnimating(false);
            setCurrentIndex(totalTestimonials * 2 - 1);
          }, 500);
          return prevIndex;
        }
        return nextIndex;
      });
    };
  
    return (
      <section className="testimonials-section">
        <h2 className='testimonial'>Testimonials</h2>
        <div className="testimonials-wrapper">
          <button className="testimonials-nav prev" onClick={prevSlide} aria-label="Previous testimonial">
            <span className="nav-arrow">❮</span>
          </button>
          <div className="testimonials-slider" ref={testimonialsRef}>
            <animated.div className="testimonials-slides" style={slideAnimation}>
              {infiniteTestimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={`${testimonial.id}-${index}`}>
                  <img src={testimonial.photo} alt={testimonial.name} className="testimonial-image" />
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-title">{testimonial.position}</p>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                </div>
              ))}
            </animated.div>
          </div>
          <button className="testimonials-nav next" onClick={nextSlide} aria-label="Next testimonial">
            <span className="nav-arrow">❯</span>
          </button>
        </div>
      </section>
    );
  };
  
  export default Testimonials;