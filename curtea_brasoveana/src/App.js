import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// for fontawesome icons
import { faFacebook } from '@fortawesome/free-brands-svg-icons';// for facebook icon
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';// for whatsapp icon
function App() {
  const Title = 'Curtea Brasoveana';
  const PhoneNumber = "0732657369"
  const Link = "https://www.facebook.com/PensiuneaCurteaBrasoveana/";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${PhoneNumber}`;
  return (
    <div className="App">
      <div className="content">
        <h1>{Title}</h1>

      </div>
      <div className="contact">
        <a href={Link}><FontAwesomeIcon icon={faFacebook} /></a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
      </div>
    </div>
  );
}

export default App;
