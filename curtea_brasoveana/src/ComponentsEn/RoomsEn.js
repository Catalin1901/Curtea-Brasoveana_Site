import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Camera_dubla from '../assets/room_cards/Camera_dubla.jpg';
import Camera_tripla from '../assets/room_cards/Camera_tripla.jpg';
import Camera_qvadrupla from '../assets/room_cards/Camera_qvadrupla.jpg';
import Suite from '../assets/room_cards/Suite.jpg';
import '../styles/room_cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign, faUser, faBed } from '@fortawesome/free-solid-svg-icons';



function GroupExample() {
    const linkStyle = {
        textDecoration: 'none', // Remove the underline
        color: 'black',
    };
    return (
        <div>
            <div className="camere">
                Our Rooms
            </div>

            <div className='camere_cards'>
                <CardGroup>

                    <Card>

                        <a href="/en/double_room" style={linkStyle}>
                            <Card.Img variant="top" src={Camera_dubla} />
                            <Card.Body>
                                <Card.Title>Double Room</Card.Title>
                                <Card.Text>
                                Double room suitable for couples.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">78/90 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">1 king bed <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
                                <small className="text-muted">1-2 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>

                    <Card>
                        <a href="/en/double_room" style={linkStyle}>
                            <Card.Img variant="top" src={Camera_tripla} />
                            <Card.Body>
                                <Card.Title>Twin Room</Card.Title>
                                <Card.Text>
                                    Double room suitable for 1 or 2 people.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">78/90 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">2 singles <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
                                <small className="text-muted">1-2 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>
                </CardGroup>

                <CardGroup>
                <Card>
                        <a href="/en/triple_room" style={linkStyle}>
                            <Card.Img variant="top" src={Suite} />
                            <Card.Body>
                                <Card.Title>Triple Room</Card.Title>
                                <Card.Text>
                                    Triple room suitable for 2 or 3 people.                                
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">100/110 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">3 singles <FontAwesomeIcon icon={faBed} style={{color: "#000000",}} /></small>
                                <small className="text-muted">2-3 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>
                    <Card>
                        <a href="/en/quadruple_room" style={linkStyle}>
                            <Card.Img variant="top" src={Camera_qvadrupla} />
                            <Card.Body>
                                <Card.Title>Quadruple Room</Card.Title>
                                <Card.Text>
                                    Quadruple room suitable for 2, 3 or 4 people.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">110/120/130 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">4 singles <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
                                <small className="text-muted">2-3-4 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>
                    
                </CardGroup>


                <CardGroup>
                    <Card>
                        <a href="/en/suite" style={linkStyle}>
                            <Card.Img variant="top" src={Camera_qvadrupla} />
                            <Card.Body>
                                <Card.Title>Junior Suite</Card.Title>
                                <Card.Text>
                                    Spatios suite that can host 2, 3 or 4 people.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">110/120/130 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">2 king beds <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
                                <small className="text-muted">2-3-4 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>
                    <Card>
                        <a href="/en/suite" style={linkStyle}>
                            <Card.Img variant="top" src={Suite} />
                            <Card.Body>
                                <Card.Title>Suite</Card.Title>
                                <Card.Text>
                                    Spacious suite that can host 2, 3 or 4 people.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">110/120/130 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">4 singles <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
                                <small className="text-muted">2-3-4 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
}

export default GroupExample;