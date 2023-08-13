
import React, { useState } from 'react';
//Components
import MainEn from '../ComponentsEn/MainEn.js';
import Room_cardEn from '../ComponentsEn/Room_cardEn.js';
import { SliderDataEn } from '../data/SliderDataEn.js';
import HeroEn from '../ComponentsEn/HeroEn.js';
import ContactEn from '../ComponentsEn/ContactEn.js';
import FacilitiesEn from '../ComponentsEn/FacilitiesEn.js';
import ReviewsEn from '../ComponentsEn/ReviewsEn.js';
import styled from 'styled-components';
import DropdownEn from '../ComponentsEn/DropdownEn.js';
import Navbar from '../ComponentsEn/NavbarEn.js';
const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;

const HomeEn = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (

        <div>
        <Navbar toggle={toggle}/>  {/* NavbarEn */}
        <DropdownEn isOpen={isOpen} toggle={toggle}/>
            <HeroEn slides={SliderDataEn}/>
            <Separator space={60} />
            <MainEn/>
            <Separator space={60} />
            <Separator space={60} />
            <Separator space={60} />
            <FacilitiesEn/>
            <Separator space={60} />
            <Separator space={60} />
            <Room_cardEn/>
            <Separator space={60} />
            <ReviewsEn/>
            <Separator space={60} />
            <ContactEn/>
        </div>
    );
};
export default HomeEn;