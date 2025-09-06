import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import './Newsletter.css';
function Newsletter() {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  
    const recaptchaRef = React.createRef();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setErrorMessage("");
      setSuccessMessage("");
  
      const recaptchaValue = recaptchaRef.current.getValue();
  
      if(!recaptchaValue) {
        setErrorMessage("Please verify the Captcha.");
      } else {
  
  
      try {
        const response = await fetch(
          "https://connect.mailerlite.com/api/subscribers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              Authorization: `Bearer YOUR_API_TOKEN`
            },
            body: JSON.stringify({
              email: email,
              groups: ["117872522076096341"]
            })
          }
        )
  
        const data = await response.json();
        console.log(data);
  
        if(data.errors) {
          setErrorMessage(data?.message);
          return;
        }
  
        setSuccessMessage("Thank you for joining our newsletter!");
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to subscribe. Please try again later.")
      }
  
      }
  
    }  
    return (
        <div className='form'>
          <h1>Subscribe To Our NewsLetter</h1>
        <form onSubmit={handleSubmit}>

          {errorMessage && <p className='error'>{errorMessage}</p>}
          {successMessage && <p className='success'>{successMessage}</p>}
  
          <div className="userinput">
            <input 
          type='email'
          value={email}
          placeholder='Email...'
          onChange={(e) => setEmail(e.target.value)}
          required />
          </div>
          <div className="captcha">
               <ReCAPTCHA ref={recaptchaRef} sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'/>
          </div>
          <div className="submitButton">
          <button type='submit'>Subscribe</button>
          </div>
        </form>
        
        </div>
  )
}

export default Newsletter