
import './Contact.css';
function Contact() {
  return (
    <div className="form">
      <h1>Send us a message</h1>
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
  )
}

export default Contact;
