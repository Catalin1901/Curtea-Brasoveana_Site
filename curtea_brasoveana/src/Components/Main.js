import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Logo.png'
import '../styles/main.css';

function Main() {
  return (
    <div className="main">
      <div className="logo-image">
        <img src={logo} alt="logo" style={{width: '30%', height:'20vw', alignSelf: 'center', marginTop: '-5vw', marginBottom: '5vw'}} />
      </div>
      <h1 className="text-center">Curtea Brasoveana</h1>
      <div className="d-flex justify-content-center">
        <FontAwesomeIcon icon={faStar} className="star-icon" size='2x' />
        <FontAwesomeIcon icon={faStar} className="star-icon" size='2x'/>
        <FontAwesomeIcon icon={faStar} className="star-icon" size='2x'/>
        <FontAwesomeIcon icon={faStar} className="star-icon" size='2x'/>
      </div>
      <div class="row justify-content-center">

        <div class="col-12 col-sm-4 d-flex flex-column main-custom">
        <p>Hotelul Curtea Brașoveană este destinația perfectă pentru familiile care vin să se reîncarce cu energie pozitivă și să-și recreeze trupul și mintea într-un cadru natural fermecător.</p>
          <p>Amplasat în inima Brașovului, acest hotel beneficiază de peisaje pitorești și de o varietate de atracții naturale și culturale din împrejurimi. Zona este binecuvântată cu aer curat, ape limpezi și priveliști impresionante ale munților și pădurilor ce încurajează relaxarea și reconectarea cu natura.</p>
        </div>

        <div class="col-12 col-sm-4 main-custom d-flex align-items-stretch">
          <p>Pe lângă frumusețile naturale, hotelul se află în proximitatea principalelor atracții turistice din zonă, cum ar fi Castelul Bran, Biserica Neagră din Brașov sau Poiana Brașov, ceea ce îi permite oaspeților să descopere și să se bucure de bogăția culturală a regiunii.</p>

        </div>
      </div>
    </div>
    )
}

export default Main;