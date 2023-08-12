import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/whatsapp.css';

const WhatsAppLogo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [iconSize, setIconSize] = useState("4x");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updateIconSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 800) {
        setIconSize("3x");
      } else {
        setIconSize("4x");
      }
    };

    // Call the function once on mount to set the initial icon size and add scroll event listener
    updateIconSize();
    window.addEventListener('scroll', handleScroll);

    // Attach the event listener to update the icon size on window resize
    window.addEventListener("resize", updateIconSize);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("resize", updateIconSize);
    };
  }, []);

  return (
    <div className="whatsapp-logo" style={{ left: 10, bottom: Math.max(10, 10 - scrollY) }}>
      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
        <div className="whatsapp-icon-bg">
          <FontAwesomeIcon icon={faWhatsapp} size={iconSize} />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppLogo;
