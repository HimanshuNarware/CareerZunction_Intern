import './Contact.css';
import  { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Contact() {
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageVisible(true);
  };

  return (
    <div className="p" style={{display: 'flex'}}>
      <div className="card" style={{maxWidth:"30%",margin:"30px"}}>
        <img src="./support.jpg" alt="Support"></img>
        <div className="icons">
          <FaGithub id="ic"/>
          <BsTwitterX id="ic"/>
          <FaWhatsapp id="ic"/>
          <CiLinkedin id="ic"/>
        </div>
      </div>
      <div className="form">
        <h1 style={{color:"#9416e9"}}>Send us a message</h1>
        <form onSubmit={handleSubmit}>
          <div className="child1">
            <input type="text" placeholder='First Name' required></input>
            <input type="text" placeholder="Last Name" required></input>
          </div>
          <div className="child2">
            <input type="email" placeholder="Mail" required></input>
            <input type="text" placeholder="Phone Number" required></input>
          </div>
          <div className="child3">
            <textarea name="in_text" id="text" rows="8" placeholder="Write your message" required></textarea>
          </div>
          <div className="btn">
            <button type="submit">Send Message</button>
          </div>
        </form>
        {messageVisible && (
          <div className="thank-you-message">
            Thank you, we will connect soon.
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
