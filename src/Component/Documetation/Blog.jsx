import React from 'react';
import './blog.css';  // Make sure to create this CSS file

function Blog() {
  return (
    <section class="testimonials" id="testimonials">
      <h2 class="testimonial-heading section__title" align-items="center" data-aos="fade-in">Testimonials</h2>
      <div class="testimonial-container">
        <div class="testimonial-user" data-aos="fade-up">
          <img class="testi-img" src="blog1.jpg" alt=""/>
          <div>
            <p><sup><i></i></sup>Thanks to Career Zunction, I landed an internship at a top marketing firm. The real-world experience and the network I built during my internship were incredible. It helped me understand the industry better and opened doors to several job opportunities right after graduation<sup><i></i></sup></p>
            <div class="user-info">
                <br/>
              <h3>Joseph</h3>
            </div>
          </div>
        </div>
        <div class="testimonial-user" data-aos="fade-up">
          <img class="testi-img" src="blog2.jpg" alt=""/>
          <div>
            <p><sup><i></i></sup>Career Zunction made it easy for me to find an internship that matched my interests in environmental science. The practical knowledge and professional connections I gained were instrumental in shaping my career path. I now have a clear direction and confidence in my future career<sup><i></i></sup></p>
            <div class="user-info">
                <br/>
              <h3>Abhisha</h3>
            </div>
          </div>
        </div>
        <div class="testimonial-user" data-aos="fade-up">
          <img class="testi-img" src="blog3.jpg" alt=""/>
          <div>
            <p><sup><i></i></sup>Career Zunction made it easy for me to find an internship that matched my interests in environmental science. The practical knowledge and professional connections I gained were instrumental in shaping my career path. I now have a clear direction and confidence in my future career<sup><i></i></sup></p>
            <div class="user-info">
                <br/>
              <h3>Emily</h3>
            </div>
          </div>
        </div>
        <div class="testimonial-user" data-aos="fade-up">
          <img class="testi-img" src="blog4.jpeg" alt=""/>
          <div>
            <p><sup><i></i></sup>Career Zunction helped me secure an internship in the finance sector. The practical experience I gained in financial analysis and market research was instrumental in shaping my career path. The connections I made during my internship have been invaluable, leading to multiple job offers after graduation<sup><i></i></sup></p>
            <div class="user-info">
                <br/>
              <h3>Daniel</h3>
            </div>
          </div>
        </div>
        <div class="testimonial-user" data-aos="fade-up">
          <img class="testi-img" src="blog5.jpg" alt=""/>
          <div>
            <p><sup><i></i></sup>Thanks to Career Zunction, I found an internship in the graphic design field that perfectly matched my skills and interests. The exposure to real-world projects and the mentorship I received were crucial in building my portfolio and confidence. This experience set me on the right track for a successful career in design<sup><i></i></sup></p>
            <div class="user-info">
                <br></br>
              <h3>Katie</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Blog;
