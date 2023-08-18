import React, { useState } from 'react';
import Dropdown from '../Components/Dropdown.js';
import Navbarbackground from '../Components/Navbarbackground.js';
import Double_room from '../Components/Double_room.js';import styled from 'styled-components';

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
            <h1 style={{textAlign: 'center'}}>Cameră Dublă</h1>
            <Separator space = {50}/>
            <Double_room />
            <Separator space = {50}/>

            
        </div>
    );
};
export default Double_Room;