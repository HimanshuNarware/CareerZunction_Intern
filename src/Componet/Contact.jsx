import './Contact.css';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
function Contact() {
  return (
    <div className="p" style={{display: 'flex'}}>
    <div className="card" style={{maxWidth:"30%",margin:"30px"}}>
      <img src="./support.jpg"></img>
      <div className="icons">
        <FaGithub id="ic"/>
        <BsTwitterX id="ic"/>
        <FaWhatsapp id="ic"/>
        <CiLinkedin id="ic"/>
      </div>
    </div>
    <div className="form">
      <h1 style={{color:"#9416e9"}}>Send us a message</h1>
      <div className="child1">
        <input type="text" placeholder='First Name'></input>
        <input type="text" placeholder="Last Name"></input>
      </div>
      <div className="child2">
        <input type="email" placeholder="Mail"></input>
        <input type="text" placeholder="Phone Number"></input>
      </div>
      <div className="child3">
        <textarea name="in_text" id="text" rows="8" placeholder="Write your message"></textarea>
      </div>
      <div className="btn">
      <button type="submit">Send Message</button>
      </div>
    </div>
    </div>
  )
}

export default Contact;