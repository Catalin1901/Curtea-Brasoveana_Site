import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Camera_dubla from '../assets/Camera_dubla.jpg';
import Camera_tripla from '../assets/Camera_tripla.jpg';
import Camera_qvadrupla from '../assets/Camera_qvadrupla.jpg';
import Suite from '../assets/Suite.jpg';
import '../styles/room_cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign, faUser } from '@fortawesome/free-solid-svg-icons';



function GroupExample() {
    const linkStyle = {
        textDecoration: 'none', // Remove the underline
        color: 'black', 
      };
  return (
    <div>
      <div className = "camere">
      Camerele noastre
      </div>
      
    <CardGroup>
        
      <Card>
        
        <a href="Double_Room" style={linkStyle}>
        <Card.Img  variant="top" src ={Camera_dubla} />
        <Card.Body>
          <Card.Title>Camera Dubla</Card.Title>
          <Card.Text>
            Camera dubla unde se pot caza 1 sau 2 persoane.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">78/90 <FontAwesomeIcon icon={faEuroSign} /></small>
          <small className="text-muted">1-2 <FontAwesomeIcon icon={faUser} /></small>
        </Card.Footer>
        </a>
      </Card>
  
      <Card>
        <a href="Rooms" style={linkStyle}>
        <Card.Img variant="top" src={Camera_tripla}  />
        <Card.Body>
          <Card.Title>Camera Tripla</Card.Title>
          <Card.Text>
            Camera tripla unde se pot caza 2 sau 3 persoane.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">100/110 <FontAwesomeIcon icon={faEuroSign} /></small>
          <small className="text-muted">2-3 <FontAwesomeIcon icon={faUser} /></small>
        </Card.Footer>
        </a>
      </Card>
      </CardGroup>

      <CardGroup>
      <Card>
        <a href="Rooms" style={linkStyle}>
        <Card.Img variant="top" src={Camera_qvadrupla} />
        <Card.Body>
          <Card.Title>Camera Qvuadrupla</Card.Title>
          <Card.Text>
            Camera qvuadrupla unde se pot caza 2, 3 sau 4 persoane.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">110/120/130 <FontAwesomeIcon icon={faEuroSign} /></small>
          <small className="text-muted">2-3-4 <FontAwesomeIcon icon={faUser} /></small>
        </Card.Footer>
        </a>
      </Card>
      <Card>
        <a href="Rooms" style={linkStyle}>
        <Card.Img variant="top" src={Suite} />
        <Card.Body>
          <Card.Title>Suite</Card.Title>
          <Card.Text>
            Apartament spatios unde se pot caza 2 3 sau 4 persoane
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">110/120/130 <FontAwesomeIcon icon={faEuroSign} /></small>
          <small className="text-muted">2-3-4 <FontAwesomeIcon icon={faUser} /></small>
        </Card.Footer>
        </a>
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;