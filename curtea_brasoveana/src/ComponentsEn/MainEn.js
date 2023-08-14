import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../styles/main.css';

function MainEn() {
  return (
    <div className="main">
      <h1 className="text-center">Curtea Brasoveana</h1>
      <div className="d-flex justify-content-center">
        <FontAwesomeIcon icon={faStar} className="star-icon" size='2x' />
        <FontAwesomeIcon icon={faStar} className="star-icon" size='2x'/>
        <FontAwesomeIcon icon={faStar} className="star-icon" size='2x'/>
        <FontAwesomeIcon icon={faStar} className="star-icon" size='2x'/>
      </div>
      <div class="row justify-content-center">

        <div class="col-12 col-sm-4 d-flex flex-column main-custom">

        <p>The Curtea Brașoveană Hotel is the perfect destination for families looking to recharge with positive energy and to rejuvenate their body and mind in a charming natural setting.</p>
        <p>Located in the heart of Brașov, this hotel benefits from picturesque landscapes and a variety of natural and cultural attractions in the surroundings. The area is blessed with fresh air, clear waters, and impressive views of the mountains and forests, which encourage relaxation and reconnection with nature.</p>

        </div>

        <div class="col-12 col-sm-4 main-custom d-flex align-items-stretch">
        <p>In addition to the natural beauties, the hotel is in close proximity to the main tourist attractions in the area, such as Bran Castle, the Black Church in Brașov, and Poiana Brașov, allowing guests to discover and enjoy the cultural richness of the region.</p>




        </div>
      </div>
    </div>
    )
}

export default MainEn;