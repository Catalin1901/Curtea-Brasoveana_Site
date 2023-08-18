import '../styles/facilities.css'
import Camera_promote from '../assets//facilities/Camera_promote.jpg';
import Gratar from '../assets//facilities/Gratar.jpg';
import mic_dejun from '../assets//facilities/mic_dejun.jpg';
import sauna from '../assets//facilities/sauna.jpg';

function Facilities() {
    return (
        <div>
        <div className="facilities-intro">
            <h1 className="facilities-title">Facilitati</h1>
            <p className="facilities-text">Curtea Brasoveana va ofera o gama larga de facilitati pentru a va face sederea cat mai placuta. </p>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <img src={Camera_promote} alt="Camere" />
            <div className="overlay">
              <p className="text">Camere</p>
              <p className="text-hover">Curtea Brasoveana va asteapta in una din cele 20 de camere spatioase si comode pentru a va petrece sederea in Brasov.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={Gratar} alt="Terasa" />
            <div className="overlay">
              <p className="text">Terasa</p>
              <p className="text-hover">In curtea interioara va veti putea petrece serile facand un gratar sau jucand jocurile preferate alaturi de cei dragi.</p>

            </div>
          </div>
          <div className="gallery-item">
            <img src={mic_dejun} alt="Mic Dejun" />
            <div className="overlay">
              <p className="text">Mic Dejun</p>
              <p className="text-hover">Dimineata nu aveti de grija, doar coborati la restaurant unde veti putea savura micul dejun</p>

            </div>
          </div>
          <div className="gallery-item">
            <img src={sauna} alt="Sauna" />
            <div className="overlay">
              <p className="text">Sauna</p>
              <p className="text-hover">In zilele cu vreme urata afara, puteti sta in Sauna interioara a hotelului</p>

            </div>
          </div>
        </div>
        </div>
      );
}

export default Facilities;