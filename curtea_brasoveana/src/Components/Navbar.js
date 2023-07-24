import React from 'react'
import styled , {css} from 'styled-components'
import {Link} from 'react-router-dom'
import { MenuData } from '../data/MenuData.js'
import { Button } from './Button.js';
import {FaBars} from 'react-icons/fa'
import  { useState, useEffect } from 'react';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${props => (props.transparent ? 'transparent' : '#cd853f')};
  @media (max-width: 769px) {
    background: none;
  }
`;
const Navbg = styled.nav`
  background: red;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
display: none;
@media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-10%, 25%);
    color: #fff;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -2rem;
@media screen and (max-width: 768px) {
    display: none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;


const NavButton = styled.div`
display: flex;
align-items: center;
margin-right: 1.5rem;
@media screen and (max-width: 768px) {
    display: none;
}
`;
const NavWithTransition = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${props => (props.transparent ? 'transparent' : '#cd853f')};
  transition: background-color 0.6s ease; /* Add a smooth transition */

  @media (max-width: 769px) {
    background: none;
  }
`;

//trebuie sa transmit toggle pentru a folosi dropwdown-ul
function Navbar({ toggle }) {
  const [colorChange, setColorChange] = useState(false);

  const handleChangeColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleChangeColor);
    return () => {
      window.removeEventListener('scroll', handleChangeColor);
    };
  }, []);

  return (
    <>
      {/* Replace `Nav` with `NavWithTransition` */}
      <NavWithTransition transparent={!colorChange}>
        <Logo to="/">Curtea Brasoveana Logo</Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {MenuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavButton>
          <Button to="/about" primary='true'>Book now</Button>
        </NavButton>
      </NavWithTransition>
    </>
  );
}

export default Navbar