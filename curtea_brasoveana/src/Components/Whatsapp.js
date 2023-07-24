import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/whatsapp.css';

const WhatsAppLogo = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="whatsapp-logo"
      style={{ left: 10, bottom: Math.max(10, 10 - scrollY) }} 
    >
      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="4x" />
      </a>
    </div>
  );
};

export default WhatsAppLogo;
