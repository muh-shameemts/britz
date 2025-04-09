import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "bf960566-2093-4c66-84ea-17783804e716");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us A Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
        <ul>
            <li><img src={mail_icon} alt="" /> tshameem149@gmail.com</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="" />Near sukhappuram hospital ,Edappal,Malappuram,Kerala,675849</li>
        </ul>
        <div style={{ marginTop: "20px" }}>
    <iframe
      title="Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4233687486662!2d76.00652097322656!3d10.77885048937007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b97a49a8af7d%3A0x47088ee7bc957d08!2sSukapuram%20Hospital!5e0!3m2!1sen!2sin!4v1744088252769!5m2!1sen!2sin"
      width="450"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message required'></textarea>
            <button type='submit' className="btn dark-btn">Submit Now  <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
