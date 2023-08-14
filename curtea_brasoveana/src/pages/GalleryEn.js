
import  '../styles/about.css'
import styled from 'styled-components';
import Gallery_componentEn from '../ComponentsEn/Gallery_componentEn';
import DropdownEn from '../ComponentsEn/DropdownEn.js';
import NavbarbackgroundEn from '../ComponentsEn/NavbarbackgroundEn.js';
import React, { useState } from 'react';
import ContactEn from '../ComponentsEn/ContactEn.js';
const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;
const galleryImages = [
  {
    img: require('../assets/Front.jpeg')  },
  {
    img: require('../assets/Front2.jpeg')  },
  {
    img: require('../assets/Front3.jpeg') 
  }

]


const GalleryEn = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
  <div>
    <NavbarbackgroundEn toggle={toggle}/>  {/* NavbarEn */}
    <DropdownEn isOpen={isOpen} toggle={toggle}/>
    <Separator space={100} />
    <h1>Engleza</h1>
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />
    <Gallery_componentEn galleryImages={galleryImages}/>
    <Separator space={100} />
    <Separator space={100} />
    <ContactEn/>

  </div>
            
    );
};
 
export default GalleryEn;   