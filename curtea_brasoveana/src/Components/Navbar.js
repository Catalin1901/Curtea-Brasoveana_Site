import React from 'react'
import styled , {css} from 'styled-components'
import {Link} from 'react-router-dom'
import { MenuData } from '../data/MenuData.js'
import { Button } from './Button.js';
import {FaBars} from 'react-icons/fa'
const Nav = styled.nav`
  height: 60px;
  display: flex;
  background: red;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled.i`
display: none;
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
function Navbar() {
  return (
    <Nav>
      <Logo to="/">Curtea Brasoveana</Logo>
      <MenuBars />
      <NavMenu>
        {MenuData.map((item,index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
))}
      </NavMenu>
      <NavButton>
        <Button to="/about" primary='true'>About us</Button>
      </NavButton>
    </Nav>
  )
}

export default Navbar