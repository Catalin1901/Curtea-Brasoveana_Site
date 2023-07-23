import React from 'react';
import High from '../assets/Front.jpeg';
import Low from '../assets/Low.jpg';
import '../styles/cover.css';
import Button from 'react-bootstrap/Button';


const Cover = () => {
  const screenWidth = window.innerWidth;
  const imageStyle = {
    backgroundImage: `url(${screenWidth > 768 ? High : Low})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%", // You can adjust the width and height according to your requirements
    height: "800px",
  };

  return (
    <div>

    
    
    <div className="image-container" style={imageStyle}>
      <picture>
        {/* Low-resolution image for smaller screens */}
        {screenWidth <= 768 && <source srcSet={Low} />}
        {/* High-resolution image for larger screens */}
        {screenWidth > 768 && <source srcSet={High} />}
        {/* Fallback image for browsers that do not support the picture element */}
        <img src={High} alt="Huge Image" className="img-fluid" style={imageStyle} />
      </picture>
    </div>

    </div>
  );
};

export default Cover;
