import '../styles/footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from "../assets/Logo_mic.png"

const Footer = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=1234567890'; // Replace with your actual WhatsApp link
  const facebookLink = 'https://www.facebook.com/PensiuneaCurteaBrasoveana/'; // Replace with your actual Facebook link

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Add your logo or footer branding here */}
          {/* Example: <img src="/path/to/your/logo.png" alt="Your Logo" /> */}
        </div>
        <div className="footer-social">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} style={{color: "#005eff",}} size="3x" />          </a>
          <img src={logo} alt="Logo" style={{ height:'50px', width: '50px' , marginTop: '-22px', marginRight: '1vw' }}  />
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareWhatsapp} size="3x" style={{color: "#25d366",}} />
          </a>
        </div>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Curtea Brasoveana. All rights reserved.</p>
    </footer>
  );
};


export default Footer;
