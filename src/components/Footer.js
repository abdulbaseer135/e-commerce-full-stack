import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-section about">
        <h3>E-Shop</h3>
        <p>
          Your one-stop shop for the latest trends in fashion for men, women, and kids. Quality products, fast shipping, and excellent customer service.
        </p>
      </div>
      <div className="footer-section links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h4>Contact Us</h4>
        <p><FaMapMarkerAlt /> 123 Market Street, City, Country</p>
        <p><FaPhoneAlt /> +1 234 567 890</p>
        <p><FaEnvelope /> support@eshop.com</p>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-section newsletter">
        <h4>Newsletter</h4>
        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
        <p className="newsletter-note">Get the latest updates and offers.</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
      <div className="footer-policy-links">
        <Link to="/privacy">Privacy Policy</Link>
        <span>|</span>
        <Link to="/terms">Terms of Service</Link>
        <span>|</span>
        <Link to="/refund">Refund Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;