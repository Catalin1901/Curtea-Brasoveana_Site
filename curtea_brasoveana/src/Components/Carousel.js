import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import camera1 from '../assets/Camera_dubla.jpg';
import camera2 from '../assets/Suite.jpg';
import camera3 from '../assets/Camera_tripla.jpg';
import '../styles/room_cards.css';


function CardWithCarousel() {
  return (
    <div className="room_page_container">
      <Carousel fade>
        <Carousel.Item>
          <Image src={camera1} alt="First slide" className="carousel-image"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera2} alt="Second slide" className="carousel-image" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera3} alt="Third slide" className="carousel-image" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardWithCarousel;
