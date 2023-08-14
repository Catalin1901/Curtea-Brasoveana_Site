import React from 'react'
import styled , {css} from 'styled-components'
import {Link} from 'react-router-dom'
import { MenuDataEn } from '../data/MenuDataEn.js'
import { Button } from './ButtonEn.js';
import {FaBars} from 'react-icons/fa'
import  { useState, useEffect } from 'react';
import RoIcon from '../assets/Ro.svg'
import EnIcon from '../assets/En.svg'
import Logo1 from '../assets/Logo.svg'


const Nav = styled.nav`
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.8rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: #cd853f
  transition: 0.5s ease;
  @media (max-width: 800px) {
    background: none;
  }
`;

const NavLink = css`
  padding-right: 2vw;
  padding-left: 4vw;
  margin-right: 0.5vw;
  margin-left: 4vw;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-size: 28px;
  position: relative; 
  padding-left: 1vw;
  text-shadow: 
  -0.5px -0.5px 0 black,
   0.5px -0.5px 0 black,
  -0.5px 0.5px 0 black,
   0.5px 0.5px 0 black;
  @media (min-width: 800px) {
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 3px;

    background: #cd853f;;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;

  }


  &:hover:before,
  &:focus:before,
  &:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Adjust the cubic-bezier values */
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Adjust the cubic-bezier values */
   

  }
}
`;


const MenuBars = styled(FaBars)`
display: none;
@media screen and (max-width: 800px) {
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

padding-right: -10px;

@media screen and (max-width: 800px) {
    display: none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;


const NavButton = styled.div`
display: flex;
size:auto;
min-width: 60px;
align-items: center;
margin-right: 1rem;
@media screen and (max-width: 800px) {
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
  transition: background-color 0.6s ease;


`;

//trebuie sa transmit toggle pentru a folosi dropwdown-ul
function NavbarbackgroundEn({ toggle }) {



  return (
    <>

      <NavWithTransition >
      <img src={Logo1} alt="Logo" style={{ height:'60px', width: '10vw' , marginTop: '-15px' }}  />
        <MenuBars onClick={toggle} />
        <NavMenu>
          {MenuDataEn.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
      </NavMenu>
        <NavButton>
        <a href="/" rel="noopener noreferrer"> <img src={RoIcon} alt="Romania Flag" style={{ width: '4vh', height: 'auto',marginLeft: '0vw' }}  /> </a>
        <a href="/en" rel="noopener noreferrer"> <img src={EnIcon} alt="English Flag" style={{ width: '4vh', height: 'auto', marginLeft: '0.8vw' }}  /> </a>
  
          <Button to="https://www.booking.com/hotel/ro/curtea-brasoveana.ro.html" primary='true'>Rezerva</Button>
        </NavButton>
      </NavWithTransition>
    </>
  );
}

export default NavbarbackgroundEn;