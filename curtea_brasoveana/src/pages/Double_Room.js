import React, { useState } from 'react';
import Dropdown from '../Components/Dropdown.js';
import Navbar from '../Components/Navbar.js';
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
            <Navbar toggle={toggle} />  {/* NavbarEn */}
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Double_room />
            
        </div>
    );
};
export default Double_Room;