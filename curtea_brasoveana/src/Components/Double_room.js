import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import camera1 from '../assets/double_room/Camera_dubla.jpg';
import camera2 from '../assets/double_room/camera_dubla2.jpg';
import camera3 from '../assets/double_room/camera_dubla3.jpg';
import camera4 from '../assets/double_room/camera_dubla4.jpg';
import camera5 from '../assets/double_room/camera_dubla5.jpg';
import { faWind, faShirt, faSnowflake, faTv, faSpa, faWifi, faMugSaucer, faLock, faPlug, faShower, faExpand, faUser, faEuroSign, faScissors, faDumbbell, faTemperatureArrowDown, faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/room_cards.css';
import '../styles/room_page.css';
import { Button } from './Button.js';

function CardWithCarousel() {
  //Pt schimbat textul in functie de slide
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (selectedIndex) => {
    setCurrentSlide(selectedIndex);
  };

  return (
    <div className="room_page_container">
      <Carousel fade>
        <Carousel.Item>
          <Image src={camera1} alt="Prima imagine" className="imagine-carusel" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera2} alt="A doua imagine" className="imagine-carusel" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera3} alt="A treia imagine" className="imagine-carusel" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera4} alt="A patra imagine" className="imagine-carusel" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera5} alt="A cincea imagine" className="imagine-carusel" />
        </Carousel.Item>
      </Carousel>
      <div className="room_details">
        <div className="room_facilities">
          <p className="title"> Facilitățile camerei</p>
          <p className="text"><FontAwesomeIcon icon={faTv} size="lg" style={{ color: "#000000" }} />   televizor</p>
          {/* <p className = "text"><FontAwesomeIcon icon={faTemperatureArrowDown} size="lg" style={{color: "#000000",}} /> aer condiționat</p> */}
          <p className="text"><FontAwesomeIcon icon={faTemperatureArrowDown} /> aer condiționat</p>
          <p className="text"><FontAwesomeIcon icon={faSnowflake} /> frigider, minibar</p>
          <p className="text"><FontAwesomeIcon icon={faWifi} /> wifi</p>
          <p className="text"><FontAwesomeIcon icon={faMugSaucer} /> mic dejun inclus</p>
          <p className="text"><FontAwesomeIcon icon={faLock} style={{ "--fa-primary-color": "#000000", "--fa-secondary-color": "#000000" }} /> seif</p>
          <p className="text"><FontAwesomeIcon icon={faWind} /> uscător de păr</p>
          <p className="text"><FontAwesomeIcon icon={faShower} /> baie proprie</p>
          <p className="text"><FontAwesomeIcon icon={faPlug} /> priză baie 110/220 V</p>
          <p className="title"> Facilități comune</p>
          <p className="text"><FontAwesomeIcon icon={faShirt} /> spălătorie</p>
          <p className="text"><FontAwesomeIcon icon={faSpa} /> saună</p>
          <p className="text"><FontAwesomeIcon icon={faDumbbell} /> sală de fitness</p>
          <p className="text"><FontAwesomeIcon icon={faScissors} /> frizerie</p>
        </div>
        <div className="room_description">
          <p className="title">Detalii cameră</p>
          <p className="text"><FontAwesomeIcon icon={faBed} /> Pat matrimonial 2x1.6m</p>
          <p className="text"><FontAwesomeIcon icon={faExpand} /> Suprafața între 30 și 40mp</p>
          <p className="text"><FontAwesomeIcon icon={faUser} /> Potrivită pentru 1 sau 2 persoane</p>
          <p className="title">Prețuri</p>
          <p className="text"><FontAwesomeIcon icon={faEuroSign} /> 78 euro/zi* pentru 1 persoană</p>
          <p className="text"><FontAwesomeIcon icon={faEuroSign} /> 90 euro/zi* pentru 2 persoane</p>
          <p className="text">*prețurile se plătesc în lei la cursul BNR al primei zile de cazare</p>
          <Button to="https://www.booking.com/hotel/ro/curtea-brasoveana.ro.html" primary='true'>Rezervă</Button>
        </div>
      </div>
    </div>
  );
}

export default CardWithCarousel;
