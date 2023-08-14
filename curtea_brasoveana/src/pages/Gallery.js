import  '../styles/about.css'
import styled from 'styled-components';
import Gallery_component from '../Components/Gallery_component';
import Dropdown from '../Components/Dropdown.js';
import Navbarbackground from '../Components/Navbarbackground.js';
import React, { useState } from 'react';
import Contact from '../Components/Contact.js';
const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;
const Hotel = [
  { img: require('../assets/Galerie/Hotel2.jpg') },
  { img: require('../assets/Front.jpeg') },
  { img: require('../assets/Galerie/Hotel2.jpg') },
  { img: require('../assets/Galerie/Hotel3.jpg') },
  { img: require('../assets/Galerie/Hotel3.jpg') },
  { img: require('../assets/Galerie/Hotel3.jpg') },
  { img: require('../assets/Galerie/Hotel.jpg') },
  { img: require('../assets/Huge.png') },
  { img: require('../assets/Galerie/Hotel.jpg') },
  { img: require('../assets/Huge.png') },  
  { img: require('../assets/Front.jpeg') },
]
const Camere = [
  { img: require('../assets/Galerie/Camera.jpg') },
  { img: require('../assets/Galerie/Camera2.jpg') },
  { img: require('../assets/Galerie/Camera3.jpg') },
  { img: require('../assets/Galerie/Camera4.jpg') },
  { img: require('../assets/Galerie/Camera5.jpg') },
]

const Restaurant = [
  { img: require('../assets/Galerie/Restaurant.jpg') },
  { img: require('../assets/Galerie/Restaurant1.jpg') },
  { img: require('../assets/Galerie/Restaurant.jpg') },
  { img: require('../assets/Galerie/Restaurant1.jpg') },

  { img: require('../assets/Galerie/Restaurant1.jpg') },



]

const Curte = [
  { img: require('../assets/Galerie/Facilitati.jpg') },
  { img: require('../assets/Galerie/Facilitati2.jpg') },
  { img: require('../assets/Galerie/Facilitati.jpg') },


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
    <div><h2>Hotel</h2></div>
    <Separator space={100} />
    <Gallery_component galleryImages={Hotel}/>
    <Separator space={100} />
    <div><h2>Camere</h2></div>
    <Gallery_component galleryImages={Camere}/>
    <Separator space={100} />
    <div><h2>Restaurant</h2></div>
    <Gallery_component galleryImages={Restaurant}/>
    <Separator space={100} />
    <div><h2>Facilitati</h2></div>
    <Gallery_component galleryImages={Curte}/>
    <Separator space={150} />

    <Contact/>

  </div>
            
    );
};
 
export default Gallery;   