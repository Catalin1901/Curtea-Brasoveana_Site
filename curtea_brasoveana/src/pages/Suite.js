import React, { useState } from 'react';
import Dropdown from '../Components/Dropdown.js';
import Navbarbackground from '../Components/Navbarbackground.js';
import Suite from '../Components/Suite.js';
import styled from 'styled-components';
import { IoTrendingUpOutline } from 'react-icons/io5';

const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;

const Double_Room = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (

        <div>
            <Navbarbackground toggle={toggle} />  {/* NavbarEn */}
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Separator space={100} />
            <h1 style={{textAlign: 'center'}}>Apartament</h1>
            <Separator space = {50}/>
            <Suite/>
            <Separator space = {50}/>

            
        </div>
    );
};
export default Double_Room;