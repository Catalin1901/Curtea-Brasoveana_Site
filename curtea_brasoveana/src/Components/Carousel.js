import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import camera1 from '../assets/Camera_dubla.jpg';
import camera2 from '../assets/Suite.jpg';
import camera3 from '../assets/Camera_tripla.jpg';
import { faTv, faSpa, faWifi, faMugSaucer, faLock, faPlug, faShower, faExpand, faUser, faEuroSign, faScissors, faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@mdi/react';
import { mdiFridge, mdiHairDryer, mdiAirConditioner,mdiBedQueen, mdiWashingMachine} from '@mdi/js';

import '../styles/room_cards.css';
import '../styles/room_page.css';


function CardWithCarousel() {
  return (
    <div className="room_page_container">
      <Carousel fade>
        <Carousel.Item>
          <Image src={camera1} alt="First slide" className="imagine-carusel" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera2} alt="Second slide" className="imagine-carusel" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={camera3} alt="Third slide" className="imagine-carusel" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="room_details">
        <div className="room_facilities">
          <p className = "title"> Facilitatile camerei</p>
          <p className = "text"><FontAwesomeIcon icon={faTv} size="lg" style={{color: "#000000",}} />   televizor</p>
          {/* <p className = "text"><FontAwesomeIcon icon={faTemperatureArrowDown} size="lg" style={{color: "#000000",}} /> aer conditionat</p> */}
          <p className = "text"><Icon path={mdiAirConditioner} size={1} /> aer conditionat</p>
          <p className = "text"><Icon path={mdiFridge} size={1} /> frigider, minibar</p>
          <p className = "text"><FontAwesomeIcon icon={faWifi} /> wifi</p>
          <p className = "text"><FontAwesomeIcon icon={faMugSaucer} /> mic dejun inclus</p>
          <p className = "text"><FontAwesomeIcon icon={faLock} style={{"--fa-primary-color": "#000000", "--fa-secondary-color": "#000000",}}  /> seif</p>
          <p className = "text"><Icon path={mdiHairDryer} size={1} /> uscator de par</p>
          <p className = "text"><FontAwesomeIcon icon={faShower} /> baie proprie</p>
          <p className = "text"><FontAwesomeIcon icon={faPlug} /> priza baie 110/220 V</p>
          <p className = "title"> Facilitati comune</p>
          <p className = "text"><Icon path={mdiWashingMachine} size={1} /> spalatorie</p>
          <p className = "text"><FontAwesomeIcon icon={faSpa} /> sauna</p>
          <p className = "text"><FontAwesomeIcon icon={faDumbbell} /> fitness</p>
          <p className = "text"><FontAwesomeIcon icon={faScissors} /> frizerie  </p>

        </div>
        <div className="room_description">
          <p className = "title">Detalii camera</p>
          <p className = "text"><Icon path={mdiBedQueen} size={1} /> Pat matrimonial 2x1.6m</p>
          <p className = "text"><FontAwesomeIcon icon={faExpand} /> Suprafata intre 30 si 40mp</p>
          <p className = "text"><FontAwesomeIcon icon={faUser} /> Potrivita pentru 1 sau 2 persoane</p>
          <p className = "title">Preturi</p>
          <p className = "text"><FontAwesomeIcon icon={faEuroSign} /> 78 euro/zi* pentru 1 persoana</p>
          <p className = "text"><FontAwesomeIcon icon={faEuroSign} /> 90 euro/zi* pentru 2 persoane</p>
          <p className = "text">*preturile se achita in lei la cursul BNR al primei zile de cazare</p>

        </div>
      </div>
    </div>
  );
}

export default CardWithCarousel;
