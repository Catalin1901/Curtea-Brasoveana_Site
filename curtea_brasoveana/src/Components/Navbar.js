import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
//un navbar simplu cu un logo si un burger menu
  return (
    <nav className="navbar">
      <div className="logo">logo</div>
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#rooms">Rooms</a>
        <a href="#contact">Contact</a>
      </div>
      {/* Burger menu , care are un bug lol*/}
      <div className="burger" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
