import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import camera1 from '../assets/four_room/four_room.jpg';
import camera2 from '../assets/four_room/four_room2.jpg';
import camera3 from '../assets/four_room/four_room3.jpg';
import camera4 from '../assets/four_room/four_room4.jpg';
import camera5 from '../assets/four_room/four_room5.jpg';
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
          <p className = "text"><FontAwesomeIcon icon={faTv} size="lg" style={{color: "#000000",}} /> television</p>
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
          <p className = "text"><FontAwesomeIcon icon={faScissors} /> hairdresser</p>

        </div>
        <div className="room_description">
          <p className = "title">Room Details</p>
          <p className = "text"><FontAwesomeIcon icon={faBed} /> 4 single beds 2x1m</p>
          <p className = "text"><FontAwesomeIcon icon={faExpand} /> Room area between 40 and 50sqm</p>
          <p className = "text"><FontAwesomeIcon icon={faUser} /> Suitable for 2, 3 or 4 people</p>
          <p className = "title">Preturi</p>
          <p className = "text"><FontAwesomeIcon icon={faEuroSign} /> 110 euro/day* for 2 people</p>
          <p className = "text"><FontAwesomeIcon icon={faEuroSign} /> 120 euro/day* for 3 people</p>
          <p className = "text"><FontAwesomeIcon icon={faEuroSign} /> 140 euro/day* for 4 people</p>
          <p className = "text">*fees will be payed in RON at the BNR exchange rate of the first staying day</p>
          <Button to="https://www.booking.com/hotel/ro/curtea-brasoveana.ro.html" primary='true'>Book now</Button>


        </div>
      </div>
    </div>
  );
}

export default CardWithCarousel;
