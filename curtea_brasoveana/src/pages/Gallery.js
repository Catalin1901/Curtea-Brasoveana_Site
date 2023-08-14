import  '../styles/about.css'
import styled from 'styled-components';
import Gallery_component from '../Components/Gallery_component';
import Dropdown from '../Components/Dropdown.js';
import Navbarbackground from '../Components/Navbarbackground.js';
import React, { useState } from 'react';
const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;
const Lobby = [
  { img: require('../assets/Front.jpeg') },
  { img: require('../assets/Front3.jpeg') },
  { img: require('../assets/Front2.jpeg') },
  { img: require('../assets/Front3.jpeg') },
  { img: require('../assets/Huge.png') },
]
const Suite = [
  { img: require('../assets/Galerie/Suite.jpg') },
  { img: require('../assets/Galerie/Suite2.jpg') },
  { img: require('../assets/Galerie/Suite3.jpg') },
  { img: require('../assets/Galerie/Suite4.jpg') },
  { img: require('../assets/Galerie/Suite5.jpeg') },
]

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
  <div className='galerie'>
    <Navbarbackground toggle={toggle}/>  {/* NavbarEn */}
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Separator space={100} />
    <div><h1>Galerie</h1></div>
    <div><h2>Lobby</h2></div>
    <Separator space={100} />
    <Gallery_component galleryImages={Lobby}/>
    <Separator space={100} />
    <div><h2>Suite</h2></div>
    <Gallery_component galleryImages={Suite}/>

    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />

  </div>
            
    );
};
 
export default Gallery;   