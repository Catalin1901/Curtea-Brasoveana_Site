

import '../styles/footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=1234567890'; // Replace with your actual WhatsApp link
  const facebookLink = 'https://www.facebook.com/yourpage'; // Replace with your actual Facebook link

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Add your logo or footer branding here */}
          {/* Example: <img src="/path/to/your/logo.png" alt="Your Logo" /> */}
        </div>
        <div className="footer-social">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: "green" }} />
          </a>
        </div>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Curtea Brasoveana. All rights reserved.</p>
    </footer>
  );
};


export default Footer;
