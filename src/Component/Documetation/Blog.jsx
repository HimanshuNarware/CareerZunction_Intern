import React, { useEffect, useState } from 'react';
import './blog.css';

function Blog() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonial-heading section__title" data-aos="fade-in">Testimonials</h2>
      <div className="testimonial-container">
        {[
          {
            img: "blog1.jpg",
            text: "Thanks to Career Zunction, I landed an internship at a top marketing firm. The real-world experience and the network I built during my internship were incredible. It helped me understand the industry better and opened doors to several job opportunities right after graduation.",
            name: "Joseph"
          },
          {
            img: "blog2.jpg",
            text: "Career Zunction made it easy for me to find an internship that matched my interests in environmental science. The practical knowledge and professional connections I gained were instrumental in shaping my career path. I now have a clear direction and confidence in my future career.",
            name: "Abhisha"
          },
          {
            img: "blog3.jpg",
            text: "Career Zunction made it easy for me to find an internship that matched my interests in environmental science. The practical knowledge and professional connections I gained were instrumental in shaping my career path. I now have a clear direction and confidence in my future career.",
            name: "Emily"
          },
          {
            img: "blog4.jpeg",
            text: "Career Zunction helped me secure an internship in the finance sector. The practical experience I gained in financial analysis and market research was instrumental in shaping my career path. The connections I made during my internship have been invaluable, leading to multiple job offers after graduation.",
            name: "Daniel"
          },
          {
            img: "blog5.jpg",
            text: "Thanks to Career Zunction, I found an internship in the graphic design field that perfectly matched my skills and interests. The exposure to real-world projects and the mentorship I received were crucial in building my portfolio and confidence. This experience set me on the right track for a successful career in design.",
            name: "Katie"
          }
        ].map((testimonial, index) => (
          <div className="testimonial-user" data-aos="fade-up" key={index}>
            <img className="testi-img" src={testimonial.img} alt=""/>
            <div>
              <p><sup><i></i></sup>{testimonial.text}<sup><i></i></sup></p>
              <div className="user-info">
                  <br/>
                <h3>{testimonial.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
