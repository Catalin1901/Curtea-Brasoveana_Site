import Dropdown from '../Components/Dropdown.js';
import Navbarbackground from '../Components/Navbarbackground.js';
import React, { useState } from 'react';
import '../styles/rooms.css';
import Contact from '../Components/Contact.js';
import Camere from '../Components/Rooms.js'
import styled from 'styled-components';
const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;
const Rooms = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
     <div className='rooms'>
    <Navbarbackground toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Separator space={60} />
        <Separator space={100} />
        <Camere/>
        <Separator space={100} />
        <Contact/>

    </div>
    );
};
 
export default Rooms;