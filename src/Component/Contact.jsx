import './Contact.css';
import  { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import emailjs from "@emailjs/browser";

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
    <div className="container">
      <div className="contact-info">
        <h2>Get in touch</h2>
        <p>Email: himanshunarware77@gmail.com</p>
        <p>Phone: +91 XXX XXX</p>
        <p>We are here to assist you with any inquiries or support you may need. Whether you have questions about our services, need technical assistance, or want to provide feedback, feel free to reach out. Our team is dedicated to ensuring you have the best experience possible.</p>
      </div>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
        {messageVisible && <p className="thank-you-message">Thank you for your message. We'll get back to you soon.</p>}
      </div>
    </div>
  );


}

export default Contact;
