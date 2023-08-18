import React from 'react';
import '../styles/facilities.css';
import Camera_promote from '../assets//facilities/Camera_promote.jpg';
import Gratar from '../assets//facilities/Gratar.jpg';
import mic_dejun from '../assets//facilities/mic_dejun.jpg';
import sauna from '../assets//facilities/sauna.jpg';

function Facilities() {
  return (
    <div>
      <div className="facilities-intro">
        <h1 className="facilities-title">Facilități</h1>
        <p className="facilities-text">Curtea Brașoveană vă oferă o gamă largă de facilități pentru a vă face șederea cât mai plăcută.</p>
      </div>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={Camera_promote} alt="Camere" />
          <div className="overlay">
            <p className="text">Camere</p>
            <p className="text-hover">Curtea Brașoveană vă așteaptă în una din cele 20 de camere spațioase și comode pentru a vă petrece șederea în Brașov.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={Gratar} alt="Terasa" />
          <div className="overlay">
            <p className="text">Terasă</p>
            <p className="text-hover">În curtea interioară vă veți putea petrece serile făcând un grătar sau jucând jocurile preferate alături de cei dragi.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={mic_dejun} alt="Mic Dejun" />
          <div className="overlay">
            <p className="text">Mic Dejun</p>
            <p className="text-hover">Dimineața nu aveți de grijă, doar coborâți la restaurant unde veți putea savura micul dejun.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={sauna} alt="Sauna" />
          <div className="overlay">
            <p className="text">Saună</p>
            <p className="text-hover">În zilele cu vreme urâtă afară, puteți sta în Sauna interioară a hotelului.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
