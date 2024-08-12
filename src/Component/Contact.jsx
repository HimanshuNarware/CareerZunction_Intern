import './Contact.css';
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Tilt from "react-parallax-tilt";
import Preloader from './Preloader';

function Contact() {
  const [messageVisible, setMessageVisible] = useState(false);
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageVisible(true);

    const templateParams={
      from_name:firstname+" "+lastname,
      from_email:email,
      phone_number:phone,
      email_id:"himanshunarware77@gmail.com",
      message: message,
    }

    emailjs.send("service_7lb51ka","template_mu7qnok",templateParams,"-OBmWZjadmE1odXKm")
      .then((response)=>{
        console.log("email sent",response)
        alert("Your message has been sent successfully! Will get back to you as soon as possible.")
        setFirstname('')
        setLastname('')
        setPhone('')
        setEmail('')
        setMessage('')        
      })
      .catch((err)=>{
        console.log("error",err)
        alert("Sorry, something went wrong while sending your message. Please try again later.");
      })
  };

  return (
    <>
    <Preloader />
    <div className="p" style={{display: 'flex'}}>
      <div className="card" style={{maxWidth:"30%",margin:"30px"}}>
      <Tilt>
        <img src="./support.jpg" alt="Support"></img>
      </Tilt>
        <div className="icons">
          <FaGithub   className="contactus-icons"id="ic"/>
          <BsTwitterX className="contactus-icons" id="ic"/>
          <FaWhatsapp className="contactus-icons" id="ic"/>
          <CiLinkedin className="contactus-icons" id="ic"/>
        </div>
      </div>
      <div className="form">
        <h1 style={{color:"#9416e9"}}>Send us a message</h1>
        <form onSubmit={handleSubmit}>
          <div className="child1">
            <input type="text" placeholder='First Name' onChange={(e)=>setFirstname(e.target.value)}
              value={firstname} required></input>
            <input type="text" placeholder="Last Name" onChange={(e)=>setLastname(e.target.value)}
              value={lastname} required></input>
          </div>
          <div className="child2">
            <input type="email" placeholder="Mail" value={email}
              onChange={(e)=>setEmail(e.target.value)} required></input>
            <input type="text" placeholder="Phone Number" value={phone}
              onChange={(e)=>setPhone(e.target.value)} required></input>
          </div>
          <div className="child3">
            <textarea name="in_text" id="text" rows="8" placeholder="Write your message" value={message}
            onChange={(e)=>setMessage(e.target.value)} required></textarea>
          </div>
          <div className="btn">
            <button type="submit" className='submitMsg'>Send Message</button>
          </div>
        </form>
        {messageVisible && (
          <div className="thank-you-message">
            Thank you, we will connect soon.
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Contact;
