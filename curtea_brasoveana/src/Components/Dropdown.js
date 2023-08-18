import React from 'react'
import styled , {css} from 'styled-components'
import { Button } from './Button.js';
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { MenuData } from '../data/MenuData.js';
import RoIcon from '../assets/Ro.svg'
import EnIcon from '../assets/En.svg'
const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #cd853f;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};

`;

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;

`;
const CloseIcon = styled(FaTimes)`
color: #fff;
`;
const DropdownWrapper = styled.div`

`;
const DropdownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
background-color: #cd853f;
text-shadow: 
-0.5px -0.5px 0 black,
 0.5px -0.5px 0 black,
-0.5px 0.5px 0 black,
 0.5px 0.5px 0 black;
margin-bottom: 4rem;
@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}

`;
const DropdownLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.2s ease-in-out;
&:hover {
    color: #000d1a;
}

`;
const NavButton = styled.div`
display: flex;
justify-content: center;
rounded: true;
margin-left: -10px;

`;

function Dropdown({isOpen, toggle}) {
  return (

    <DropdownContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>

                {MenuData.map((item, index) => (
                    <DropdownLink to={item.link} key={index}>
                        {item.title}
                    </DropdownLink>
))}             
            <NavButton>
   
            <Button primary='true' round='true' big='false' to='/https://www.booking.com/hotel/ro/curtea-brasoveana.ro.html'>Rezerva</Button>
            </NavButton>
            <a href="/" rel="noopener noreferrer"> <img src={RoIcon} alt="Romania Flag" style={{display:'flex', justifyContent:'center', maxWidth: '60px', alignItems: 'center', margin:'auto' , paddingLeft:'10px'}} /> </a>
            <a href="/en" rel="noopener noreferrer"> <img src={EnIcon} alt="Uk Flag" style={{display:'flex', justifyContent:'center', maxWidth: '60px', alignItems: 'center', margin:'auto', paddingLeft:'10px'}} /> </a>
            </DropdownMenu>
        </DropdownWrapper>
    </DropdownContainer>  
    )
}

export default Dropdown;   