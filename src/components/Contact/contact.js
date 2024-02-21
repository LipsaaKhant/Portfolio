import React, { useRef, useState } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ju8klea', 'template_bc719k2', form.current, {publicKey: 'uYPM1hfDFBcYaIgkv'})
      .then(
        (result) => {
          console.log('Success!!',result.text);
          setMessage("Email sent successfully");
          e.traget.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage("Failed to send email. Please try again later");
        },
      );
  };

  return(
      <div id="contact">
        <h1 className="contactMePageTitle">Contact Me</h1>
        <span className="contactMeDescprition">Please fill out the below form and let's connect to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name="your_name" />
            <input type="email" className="email" placeholder="Your Email" name="your_email"></input>
            <textarea name="message" className="msg" placeholder="Your Message" rows="5"></textarea>
            <button type="submit" value="send" className="submitBtn" >Submit</button>
        </form>

        {/* Display success/error message */}
        {message && <div className={`message ${message.includes("successfully") ? "success" : "error"}`}>{message}</div>}

      </div>

  );
}


export default Contact