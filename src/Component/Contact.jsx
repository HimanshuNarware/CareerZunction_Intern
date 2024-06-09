import './Contact.css';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";
function Contact() {
  return (
    <div className="p" style={{display: 'flex'}}>
    <motion.div
                      initial={{ opacity: 0, x: -150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                        delay: 0.5,
                      }}
                      className="card" 
                      style={{maxWidth:"30%",margin:"30px"}}
                    >
      <img src="./support.jpg"></img>
      <div className="icons">
        <FaGithub id="ic"/>
        <BsTwitterX id="ic"/>
        <FaWhatsapp id="ic"/>
        <CiLinkedin id="ic"/>
      </div>
    </motion.div>
    <motion.div
                      initial={{ opacity: 0, y: 150 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                        delay: 0.8,
                      }}
                      className="form" 
                    >
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
    </motion.div>
    </div>
  )
}

export default Contact;