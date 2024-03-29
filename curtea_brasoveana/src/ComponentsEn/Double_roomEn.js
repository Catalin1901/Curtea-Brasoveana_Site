import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import camera1 from '../assets/double_room/Camera_dubla.jpg';
import camera2 from '../assets/double_room/camera_dubla2.jpg';
import camera3 from '../assets/double_room/camera_dubla3.jpg';
import camera4 from '../assets/double_room/camera_dubla4.jpg';
import camera5 from '../assets/double_room/camera_dubla5.jpg';
import {faWind, faShirt, faSnowflake, faTv, faSpa, faWifi, faMugSaucer, faLock, faPlug, faShower, faExpand, faUser, faEuroSign, faScissors, faDumbbell, faTemperatureArrowDown, faBed} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/room_cards.css';
import '../styles/room_page.css';
import { Button } from '../Components/Button.js';


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
          <Image src={camera1} alt="First slide" className="imagine-carusel" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera2} alt="Second slide" className="imagine-carusel" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera3} alt="Third slide" className="imagine-carusel" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera4} alt="Fourth slide" className="imagine-carusel" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera5} alt="Fifth slide" className="imagine-carusel" />
        </Carousel.Item>
      </Carousel>
      <div className="room_details">
        <div className="room_facilities">
          <p className = "title"> Room's Facilities</p>
          <p className = "text"><FontAwesomeIcon icon={faTv} size="lg" style={{color: "#000000",}} />   television</p>
          {/* <p className = "text"><FontAwesomeIcon icon={faTemperatureArrowDown} size="lg" style={{color: "#000000",}} /> aer conditionat</p> */}
          <p className = "text"><FontAwesomeIcon icon={faTemperatureArrowDown} /> air conditioning</p>
          <p className = "text"><FontAwesomeIcon icon={faSnowflake} /> fridge, minibar</p>
          <p className = "text"><FontAwesomeIcon icon={faWifi} /> wifi</p>
          <p className = "text"><FontAwesomeIcon icon={faMugSaucer} /> breakfast included</p>
          <p className = "text"><FontAwesomeIcon icon={faLock} style={{"--fa-primary-color": "#000000", "--fa-secondary-color": "#000000",}}  /> safe box</p>
          <p className = "text"><FontAwesomeIcon icon={faWind} /> hair dryer</p>
          <p className = "text"><FontAwesomeIcon icon={faShower} /> private bathroom</p>
          <p className = "text"><FontAwesomeIcon icon={faPlug} /> 110/220 V bath socket</p>
          <p className = "title"> Hotel's Facilities</p>
          <p className = "text"><FontAwesomeIcon icon={faShirt} /> laundry</p>
          <p className = "text"><FontAwesomeIcon icon={faSpa} /> sauna</p>
          <p className = "text"><FontAwesomeIcon icon={faDumbbell} /> fitness</p>
          <p className = "text"><FontAwesomeIcon icon={faScissors} /> hairdresser  </p>

        </div>
        <div className="room_description">
          <p className = "title">Room Details</p>
          <p className = "text"><FontAwesomeIcon icon={faBed} /> Matrimonial bed 2x1.6m</p>
          <p className = "text"><FontAwesomeIcon icon={faExpand} /> Room area between 30 and 40sqm</p>
          <p className = "text"><FontAwesomeIcon icon={faUser} /> Suitable for 1 or 2 persons</p>
          <p className = "title">Preturi</p>
          <p className = "text"><FontAwesomeIcon icon={faEuroSign} /> 78 euro/day* for 1 person</p>
          <p className = "text"><FontAwesomeIcon icon={faEuroSign} /> 90 euro/day* for 2 people</p>
          <p className = "text">*fees will be payed in RON at the BNR exchange rate of the first staying day</p>
          <Button to="https://www.booking.com/hotel/ro/curtea-brasoveana.ro.html" primary='true'>Book now</Button>


        </div>
      </div>
    </div>
  );
}

export default CardWithCarousel;
