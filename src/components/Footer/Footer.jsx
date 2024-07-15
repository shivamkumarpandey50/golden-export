import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
import './Footer.css'; 
 
const Footer = () => { 
  return ( 
    <footer className="footer"> 
      <h2>GOLDEN EXPORTS</h2> 
      <nav className="footer-nav"> 
        <a href="#home">Home</a> 
        <a href="#about-us">About Us</a> 
        <a href="#industries">Our Industries</a> 
        <a href="#solutions">Our Solutions</a> 
        <a href="#careers">Careers</a> 
        <a href="#contact-us">Contact Us</a> 
      </nav> 
      <div className="footer-socials"> 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> 
          <FontAwesomeIcon icon={faFacebookF} /> 
        </a> 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> 
          <FontAwesomeIcon icon={faInstagram} /> 
        </a> 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> 
          <FontAwesomeIcon icon={faTwitter} /> 
        </a> 
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> 
          <FontAwesomeIcon icon={faLinkedinIn} /> 
        </a> 
      </div> 
      <p> 
        Feel Free To Contact Us At Any Time And Ask Us A Question{' '} 
        <a href="mailto:info@golden-exports.com">Info@Golden-Exports.Com</a> 
      </p> 
    </footer> 
  ); 
}; 
 
export default Footer;