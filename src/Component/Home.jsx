/** @format */
import '../Style/Home.css';
import '../Style/util.css';
import Preloader from './Preloader';
import bg from '../image/bg.gif';
import code from '../image/code.jpg';
import code1 from '../image/code1.jpg';
import code2 from '../image/code2.jpg';
import code4 from '../image/code4.jpg';
import code5 from '../image/code5.jpg';
import code6 from '../image/code6.jpg';
import code7 from '../image/code7.jpg';
import code8 from '../image/code8.jpg';
import img1 from '../image/desktopImg/code.jpg'
import img6 from '../image/desktopImg/img 3.jpg'
import img5 from '../image/desktopImg/img 4.jpg'
import img4 from '../image/desktopImg/img 5.jpg'
import img2 from '../image/desktopImg/img 7.jpg'
import img7 from '../image/desktopImg/img2.jpg'
import img8 from '../image/desktopImg/img 9.jpg'
import img9 from '../image/desktopImg/img 8.jpg'
import { Button } from 'antd';
import { GiGlobe, GiTrophy, GiWorld } from 'react-icons/gi';
// import { FcGlobe } from 'react-icons/fc';
import {
  FaHandshake,
  FaIndianRupeeSign,
  FaPeopleGroup,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';
import Testimonials from './Testimonials';



function Home() {


  return (
    <>
    <Preloader />
    <div>
      <div className="page_0">
        <div className="bx-1">
          <h2>Elevate
            <br /> Your
            <br />
            <span>Future</span></h2>
          <h4>
            <i>Land your dream career...</i> </h4>
          <Button className='check-now'>
            <Link to="/intern" className='link1'>

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
          <div className="wrapper-bx-1">
            <div className="about-us-content">
              <div className="text-content">
                <div className="sub_title">About us</div>
                <p className="peragraph">Find your first internship</p>
                <p className="peragraph">Kickstart Your Career: Discover Your First Internship Today!</p>
                <div className="detailed-info-wrapper">
                  <p className="detailed-info">
                    CareerZunction is a revolutionary open-source platform dedicated to bridging the gap between students and internship opportunities. Our mission is to provide a comprehensive, user-friendly interface where students can easily create profiles, search through extensive listings, and connect with internships that align with their career goals.
                  </p>
                  <div className="bg-gif-container">
                    <img src={bg} alt="Background" className="bg-gif" />
                    <div className="bg-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="why-choose-us">Why Choose Us?</h2>
          <div className="wrapper-bx-2">
            <div className='inside'>
              <div className="wrapper-bx-2-0 wrapper-bx-2-1 outline">
                <i className='icon' style={{ color: 'blueviolet' }}>
                  <GiWorld />
                </i>
                <div className="wrapper-subbx">
                  <h3>World's Biggest</h3>
                  <p> CareerZunction prides itself on being the world's largest collection of internships.</p>
                </div>
              </div>
              {/* </div> */}
              <div className="wrapper-bx-2-0 wrapper-bx-2-2 outline">
                <i className='icon' style={{ color: 'blueviolet' }}>
                  <GiTrophy />
                </i>
                <div className="wrapper-subbx">
                  <h3>Award-Winning Platform</h3>
                  <p>Our platform has been recognized for excellence in career development and user experience.
                  </p>
                </div>
              </div>
              <div className="wrapper-bx-2-0 wrapper-bx-2-2 outline">
                <i className='icon' style={{ color: 'blueviolet' }}>
                  <GiGlobe />
                </i>
                <div className="wrapper-subbx">
                  <h3>Around the Globe</h3>
                  <p>Our platform is truly global, offering more than 600
                    internships.
                  </p>
                </div>
              </div>
            </div>

            <div className='inside'>
              <div className="wrapper-bx-2-0 wrapper-bx-2-3 outline">
                <i className='icon' style={{ color: 'blueviolet' }}>
                  <FaPeopleGroup />
                </i>
                <div className="wrapper-subbx">
                  <h3>Open Source</h3>
                  <p>CZunction is an open-source project, inviting contributions
                    who want to make a difference.</p>
                </div>
              </div>
              <div className=" wrapper-bx-2-0 wrapper-bx-2-4 outline">
                <i className='icon' style={{ color: 'blueviolet' }}>
                  <FaHandshake />
                </i>
                <div className="wrapper-subbx">
                  <h3>Partnered with Top Companies</h3>
                  <p>We collaborate with leading companies to offer the best internship opportunities.</p>
                </div>
              </div>
              <div className=" wrapper-bx-2-0 wrapper-bx-2-4 outline">
                <i className='icon' style={{ color: 'blueviolet' }}>
                  <FaIndianRupeeSign />
                </i>
                <div className="wrapper-subbx">
                  <h3>Free to use</h3>
                  <p> CareerZunction is completely free to use..</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="desktopImg">
          <img className='img img1' src={img1} alt="is" />
          <img className='img img2' src={img2} alt="is" />
          <img className='img img3' src={img7} alt="is" />
          <img className='img img4' src={img6} alt="is" />
          <img className='img img5' src={img8} alt="is" />
          <img className='img img6' src={img5} alt="is" />
          <img className='img img7' src={img9} alt="is" />
          <img className='img img8' src={img4} alt="is" />
        </div>


      </section>
      {/* <div className="page_2 footer">
        <div className="footer-wrapper">
          <div className="flex">
          <h3 className="footer-title">CareerZuction</h3>
          <p className="footer-pera">
          CareerZunction is a dynamic platform connecting eager students with valuable internship opportunities.
          </p>
          <div className="footer-socail-icon">
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
          </div>
          <div className="flex">
          <h4 className='doc'>Documentation</h4>
<div className="doc-pera">
<p className='doc-pera'>What is Open-Source.</p>
          <p className='doc-pera'>What is Git and GitHub.</p>
          <p className='doc-pera'>How to start contributing to Open-Source.</p>
</div>
          </div>
          <div className="flex">
          <h4  className='lice'>License  </h4>
          <h5 className='license'>MIT License</h5>
          <h4 className='pd '>Code of Conduct</h4>
          </div>
         
          
          <button size="size" type="defautl" className='button-star'>
            {' '}
           < FaStar style={{margin:"-2px 2px",lineHeight:"2px"}} />Star us
          </button>
        </div>
      </div> */}
      <FAQ />
      <Testimonials />
    </div>
    </>
  );
}

export default Home;
