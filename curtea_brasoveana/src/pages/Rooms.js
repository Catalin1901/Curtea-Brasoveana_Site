import Dropdown from '../Components/Dropdown.js';
import Navbarbackground from '../Components/Navbarbackground.js';
import React, { useState } from 'react';
import Carousel from '../Components/Carousel.js';
import '../styles/rooms.css';
const Rooms = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
     <div>
    <Navbarbackground toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
        <div class="container">
            <button type="button" class="btn btn-primary">Click me</button>
        </div>
            <h1>
                Rooms
            </h1>
        <Carousel></Carousel>
    </div>
    );
};
 
export default Rooms;