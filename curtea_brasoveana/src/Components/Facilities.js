import '../styles/facilities.css'
import Camera_promote from '../assets/Camera_promote.jpg';
import Gratar from '../assets/Gratar.jpg';
import mic_dejun from '../assets/mic_dejun.jpg';
import sauna from '../assets/sauna.jpg';
import React, { useState } from 'react';


const ImageGallery = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
  
    const handleMouseEnter = (index) => {
      setHoveredItem(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredItem(null);
    };



      
        return (
          <div className="gallery-container">
            <div
              className="gallery-item"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={Camera_promote} alt="Image 1" />
              <div className={`overlay ${hoveredItem === 1 ? 'visible' : ''}`}>
                <p className="text">
                  {hoveredItem === 1 ? 'Va asteptam sa va petreceti sederea in Brasov in camerele noastre confortabile si spatioase' : 'Camere'}
                </p>
              </div>
            </div>
            <div
              className="gallery-item"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={Gratar} alt="Image 2" />
              <div className={`overlay ${hoveredItem === 2 ? 'visible' : ''}`}>
                <p className="text">
                  {hoveredItem === 2 ? 'Text on Hover for Image 2' : 'Initial Text for Image 2'}
                </p>
              </div>
            </div>
            <div
              className="gallery-item"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={mic_dejun} alt="Image 3" />
              <div className={`overlay ${hoveredItem === 3 ? 'visible' : ''}`}>
                <p className="text">
                  {hoveredItem === 3 ? 'Text on Hover for Image 3' : 'Initial Text for Image 3'}
                </p>
              </div>
            </div>
            <div
              className="gallery-item"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={sauna} alt="Image 4" />
              <div className={`overlay ${hoveredItem === 4 ? 'visible' : ''}`}>
                <p className="text">
                  {hoveredItem === 4 ? 'Text on Hover for Image 4' : 'Initial Text for Image 4'}
                </p>
              </div>
            </div>
          </div>
        );
      
      
}

export default ImageGallery;