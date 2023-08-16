import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import camera1 from '../assets/Camera_dubla.jpg';
import camera2 from '../assets/Suite.jpg';
import camera3 from '../assets/Camera_tripla.jpg';
import {faWind, faShirt, faSnowflake, faTv, faSpa, faWifi, faMugSaucer, faLock, faPlug, faShower, faExpand, faUser, faEuroSign, faScissors, faDumbbell, faTemperatureArrowDown, faBed} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/room_cards.css';
import '../styles/room_page.css';


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
      </Carousel>
      <div className="room_details">
        <div className="room_facilities">
          <p className = "title"> Facilitatile camerei</p>
          <p className = "text"><FontAwesomeIcon icon={faTv} size="lg" style={{color: "#000000",}} />   televizor</p>
          {/* <p className = "text"><FontAwesomeIcon icon={faTemperatureArrowDown} size="lg" style={{color: "#000000",}} /> aer conditionat</p> */}
          <p className = "text"><FontAwesomeIcon icon={faTemperatureArrowDown} /> aer conditionat</p>
          <p className = "text"><FontAwesomeIcon icon={faSnowflake} /> frigider, minibar</p>
          <p className = "text"><FontAwesomeIcon icon={faWifi} /> wifi</p>
          <p className = "text"><FontAwesomeIcon icon={faMugSaucer} /> mic dejun inclus</p>
          <p className = "text"><FontAwesomeIcon icon={faLock} style={{"--fa-primary-color": "#000000", "--fa-secondary-color": "#000000",}}  /> seif</p>
          <p className = "text"><FontAwesomeIcon icon={faWind} /> uscator de par</p>
          <p className = "text"><FontAwesomeIcon icon={faShower} /> baie proprie</p>
          <p className = "text"><FontAwesomeIcon icon={faPlug} /> priza baie 110/220 V</p>
          <p className = "title"> Facilitati comune</p>
          <p className = "text"><FontAwesomeIcon icon={faShirt} /> spalatorie</p>
          <p className = "text"><FontAwesomeIcon icon={faSpa} /> sauna</p>
          <p className = "text"><FontAwesomeIcon icon={faDumbbell} /> fitness</p>
          <p className = "text"><FontAwesomeIcon icon={faScissors} /> frizerie  </p>

        </div>
        <div className="room_description">
          <p className = "title">Detalii camera</p>
          <p className = "text"><FontAwesomeIcon icon={faBed} /> Pat matrimonial 2x1.6m</p>
          <p className = "text"><FontAwesomeIcon icon={faExpand} /> Suprafata intre 30 si 40mp</p>
          <p className = "text"><FontAwesomeIcon icon={faUser} /> Potrivita pentru 1 sau 2 persoane</p>
          <p className = "title">Preturi</p>
          <p className = "text"><FontAwesomeIcon icon={faEuroSign} /> 78 euro/zi* pentru 1 persoana</p>
          <p className = "text"><FontAwesomeIcon icon={faEuroSign} /> 90 euro/zi* pentru 2 persoane</p>
          <p className = "text">*preturile se achita in lei la cursul BNR al primei zile de cazare</p>

        </div>
      </div>
      
      {/*Asta trebuie sters daca nu iti place*/}
      <p>
        {currentSlide === 0 ?
        'Test1'  : currentSlide === 1
        ? 'Test2'  : currentSlide === 2
        ? 'Test3':'Default'}
      </p>
    </div>
  );
}

export default CardWithCarousel;
