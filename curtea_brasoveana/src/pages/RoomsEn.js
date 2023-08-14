import Carousel from '../ComponentsEn/CarouselEn.js';
import '../styles/rooms.css';
import DropdownEn from '../ComponentsEn/DropdownEn.js';
import NavbarbackgroundEn from '../ComponentsEn/NavbarbackgroundEn.js';
import React, { useState } from 'react';
import ContactEn from '../ComponentsEn/ContactEn.js';
import styled from 'styled-components';

const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;
const RoomsEn = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
      return (
    <div>
      <NavbarbackgroundEn toggle={toggle}/>  {/* NavbarEn */}
      <DropdownEn isOpen={isOpen} toggle={toggle}/>
        <div class="container">
            <button type="button" class="btn btn-primary">Click me</button>
        </div>
            <h1>
                RoomsEn
            </h1>
        <Carousel></Carousel>
        <Separator space={60} />
            <ContactEn/>
    </div>
    );
};
 
export default RoomsEn;