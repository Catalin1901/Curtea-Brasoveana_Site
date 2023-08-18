import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import camera1 from '../assets/triple_room/camera_tripla.jpg';
import camera2 from '../assets/triple_room/camera_tripla2.jpg';
import camera3 from '../assets/triple_room/camera_tripla3.jpg';
import camera4 from '../assets/triple_room/camera_tripla4.jpg';
import camera5 from '../assets/triple_room/camera_tripla5.jpg';
import camera6 from '../assets/triple_room/camera_tripla6.jpg';
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
                <Carousel.Item>
                    <Image src={camera6} alt="Sixth slide" className="imagine-carusel" />
                </Carousel.Item>
            </Carousel>
            <div className="room_details">
                <div className="room_facilities">
                    <p className="title"> Facilitățile camerei</p>
                    <p className="text"><FontAwesomeIcon icon={faTv} size="lg" style={{ color: "#000000", }} />   televizor</p>
                    {/* <p className = "text"><FontAwesomeIcon icon={faTemperatureArrowDown} size="lg" style={{color: "#000000",}} /> aer conditionat</p> */}
                    <p className="text"><FontAwesomeIcon icon={faTemperatureArrowDown} /> aer condiționat</p>
                    <p className="text"><FontAwesomeIcon icon={faSnowflake} /> frigider, minibar</p>
                    <p className="text"><FontAwesomeIcon icon={faWifi} /> wifi</p>
                    <p className="text"><FontAwesomeIcon icon={faMugSaucer} /> mic dejun inclus</p>
                    <p className="text"><FontAwesomeIcon icon={faLock} style={{ "--fa-primary-color": "#000000", "--fa-secondary-color": "#000000", }} /> seif</p>
                    <p className="text"><FontAwesomeIcon icon={faWind} /> uscător de păr</p>
                    <p className="text"><FontAwesomeIcon icon={faShower} /> baie proprie</p>
                    <p className="text"><FontAwesomeIcon icon={faPlug} /> priză baie 110/220 V</p>
                    <p className="title"> Facilități comune</p>
                    <p className="text"><FontAwesomeIcon icon={faShirt} /> spălătorie</p>
                    <p className="text"><FontAwesomeIcon icon={faSpa} /> saună</p>
                    <p className="text"><FontAwesomeIcon icon={faDumbbell} /> fitness</p>
                    <p className="text"><FontAwesomeIcon icon={faScissors} /> frizerie  </p>

                </div>
                <div className="room_description">
                    <p className="title">Detalii cameră</p>
                    <p className="text"><FontAwesomeIcon icon={faBed} /> 3 paturi 1x2m</p>
                    <p className="text"><FontAwesomeIcon icon={faExpand} /> Suprafață între 40 si 50mp</p>
                    <p className="text"><FontAwesomeIcon icon={faUser} /> Potrivită pentru 2 sau 3 persoane</p>
                    <p className="title">Prețuri</p>
                    <p className="text"><FontAwesomeIcon icon={faEuroSign} /> 100 euro/zi* pentru 2 persoane</p>
                    <p className="text"><FontAwesomeIcon icon={faEuroSign} /> 110 euro/zi* pentru 3 persoane</p>
                    <p className="text">*prețurile se achită în lei la cursul BNR al primei zile de cazare</p>
                    <Button to="https://www.booking.com/hotel/ro/curtea-brasoveana.ro.html" primary='true'>Rezervă</Button>

                </div>
            </div>

            {/*Asta trebuie sters daca nu iti place*/}
            <p>
                {currentSlide === 0 ?
                    'Test1' : currentSlide === 1
                        ? 'Test2' : currentSlide === 2
                            ? 'Test3' : 'Default'}
            </p>
        </div>
    );
}

export default CardWithCarousel;
