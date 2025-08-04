import React from 'react';
import '../styles/Contact.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
          alt="Contact Us"
        />
      </div>
      <div className="contact-form-section">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your Email" required />
          </label>
          <label>
            Message
            <textarea placeholder="Your Message" rows={5} required />
          </label>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-social">
          <h3>Connect with us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:support@eshop.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;