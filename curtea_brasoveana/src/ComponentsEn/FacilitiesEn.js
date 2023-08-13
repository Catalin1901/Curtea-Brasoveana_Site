import '../styles/facilities.css';
import Camera_promote from '../assets/Camera_promote.jpg';
import Gratar from '../assets/Gratar.jpg';
import mic_dejun from '../assets/mic_dejun.jpg';
import sauna from '../assets/sauna.jpg';

function FacilitiesEn() {
  return (
    <div>
      <div className="facilities-intro">
        <h1 className="facilities-title">Facilities</h1>
        <p className="facilities-text">
          Curtea Brasoveana offers a wide range of facilities to make your stay as pleasant as possible. We prioritize your comfort during your stay, striving to provide everything you need to be fully satisfied upon departure and with the intention of returning to us.
        </p>
      </div>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={Camera_promote} alt="Rooms" />
          <div className="overlay">
            <p className="text">Rooms</p>
            <p className="text-hover">
              Curtea Brasoveana welcomes you to one of the 20 spacious and comfortable rooms to spend your stay in Brasov.
            </p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={Gratar} alt="Terrace" />
          <div className="overlay">
            <p className="text">Terrace</p>
            <p className="text-hover">
              In the inner courtyard, you can spend your evenings grilling or playing your favorite games with loved ones.
            </p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={mic_dejun} alt="Breakfast" />
          <div className="overlay">
            <p className="text">Breakfast</p>
            <p className="text-hover">In the morning, you don't have to worry; just head down to the restaurant where you can enjoy breakfast.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={sauna} alt="Sauna" />
          <div className="overlay">
            <p className="text">Sauna</p>
            <p className="text-hover">On days with bad weather outside, you can relax in the hotel's indoor sauna.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilitiesEn;
