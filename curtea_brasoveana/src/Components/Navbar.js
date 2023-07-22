import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
//un navbar simplu cu un logo si un burger menu
  return (
    <nav className="navbar">
    <div className="navbar-logo">Your Logo</div>

    {/* Burger menu for smaller displays */}
    <div className={`navbar-burger ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </div>

    {/* Links */}
    <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="Rooms">Rooms</a></li>
        <li><a href="About">Contact</a></li>
    </ul>
  </nav>
  );
};

export default Navbar;


