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
    return null; // Return null for mobile view to avoid rendering the blog section
  }

  const testimonials = [
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
  ];

  const blogPosts = [
    {
      title: "How to Ace Your Internship Interview",
      date: "July 1, 2024",
      description: "Learn the key strategies and tips to excel in your internship interviews and land your dream position."
    },
    {
      title: "Top 5 Skills to Develop During Your Internship",
      date: "June 25, 2024",
      description: "Discover the essential skills that will not only help you during your internship but also boost your future career prospects."
    },
    {
      title: "Networking Tips for Interns",
      date: "June 20, 2024",
      description: "Effective networking can open doors to numerous opportunities. Find out how you can build a strong professional network during your internship."
    },
    {
      title: "Balancing Work and Study During an Internship",
      date: "June 15, 2024",
      description: "Striking the right balance between your internship responsibilities and academic workload can be challenging. Here are some tips to manage both successfully."
    }
  ];

  return (
    <div>
      <section className="blog" id="blog">
        <h2 className="blog-heading section__title" data-aos="fade-in">Blog</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div className="blog-post" data-aos="fade-up" key={index}>
              <div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-date">{post.date}</p>
                <p className="blog-description">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="testimonials" id="testimonials">
        <h2 className="testimonial-heading section__title" data-aos="fade-in">Testimonials</h2>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-user" data-aos="fade-up" key={index}>
              <img className="testi-img" src={testimonial.img} alt=""/>
              <div>
                <p>{testimonial.text}</p>
                <div className="user-info">
                  <h3>{testimonial.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}

export default Blog;
