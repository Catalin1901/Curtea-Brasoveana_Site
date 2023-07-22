import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Camera_dubla from '../assets/Camera_dubla.jpg';
import Camera_tripla from '../assets/Camera_tripla.jpg';
import Camera_qvadrupla from '../assets/Camera_qvadrupla.jpg';
import Suite from '../assets/Suite.jpg';
import '../styles/room_cards.css';

function GroupExample() {
  return (
    <div>
        <div>
            <p className="TEO">ASDHJKASBDJKHABSDJKHABSDKJHBASDJKHBASJKDHBASJDHBASDJHB</p>
        </div>
    <CardGroup>
      <Card>
        <Card.Img className="card-img" variant="top" src ={Camera_dubla} />
        <Card.Body>
          <Card.Title>Camera Dubla</Card.Title>
          <Card.Text>
            Camera dubla unde se pot caza 1 sau 2 persoane.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Camera_tripla}  />
        <Card.Body>
          <Card.Title>Camera Tripla</Card.Title>
          <Card.Text>
            Camera tripla unde se pot caza 1, 2 sau 3 persoane.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </CardGroup>

      <CardGroup>
      <Card>
        <Card.Img variant="top" src={Camera_qvadrupla} />
        <Card.Body>
          <Card.Title>Camera Qvuadrupla</Card.Title>
          <Card.Text>
            Camera qvuadrupla unde se pot caza 2, 3 sau 4 persoane.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Suite} />
        <Card.Body>
          <Card.Title>Suite</Card.Title>
          <Card.Text>
            Apartament spatios unde se pot caza 2 3 sau 4 persoane
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;