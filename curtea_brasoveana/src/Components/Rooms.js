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
                Camerele noastre
            </div>

            <div className='camere_cards'>
                <CardGroup>

                    <Card>

                        <a href="camera_dubla" style={linkStyle}>
                            <Card.Img variant="top" src={Camera_dubla} />
                            <Card.Body>
                                <Card.Title>Cameră Matrimonială</Card.Title>
                                <Card.Text>
                                    Cameră dublă unde se pot caza 1 sau 2 persoane.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">78/90 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">1 pat dublu <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
                                <small className="text-muted">1-2 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>

                    <Card>
                        <a href="camera_dubla" style={linkStyle}>
                            <Card.Img variant="top" src={Camera_tripla} />
                            <Card.Body>
                                <Card.Title>Cameră Dublă</Card.Title>
                                <Card.Text>
                                    Cameră dublă unde se pot caza 1 sau 2 persoane.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">78/90 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">2 paturi <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
                                <small className="text-muted">1-2 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>
                </CardGroup>

                <CardGroup>
                <Card>
                        <a href="camera_tripla" style={linkStyle}>
                            <Card.Img variant="top" src={Suite} />
                            <Card.Body>
                                <Card.Title>Cameră Triplă</Card.Title>
                                <Card.Text>
                                    Cameră triplă unde se pot caza 2 sau 3 persoane                                
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">100/110 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">3 paturi <FontAwesomeIcon icon={faBed} style={{color: "#000000",}} /></small>
                                <small className="text-muted">2-3 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>
                    <Card>
                        <a href="camera_cvadrupla" style={linkStyle}>
                            <Card.Img variant="top" src={Camera_qvadrupla} />
                            <Card.Body>
                                <Card.Title>Cameră Cvadruplă</Card.Title>
                                <Card.Text>
                                    Cameră qvuadruplă unde se pot caza 2, 3 sau 4 persoane.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">110/120/130 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">4 paturi <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
                                <small className="text-muted">2-3-4 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>
                    
                </CardGroup>


                <CardGroup>
                    <Card>
                        <a href="apartament" style={linkStyle}>
                            <Card.Img variant="top" src={Camera_qvadrupla} />
                            <Card.Body>
                                <Card.Title>Apartament Junior</Card.Title>
                                <Card.Text>
                                    Apartament spațios unde se pot caza 2, 3 sau 4 persoane.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">110/120/130 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">2 paturi duble <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
                                <small className="text-muted">2-3-4 <FontAwesomeIcon icon={faUser} /></small>
                            </Card.Footer>
                        </a>
                    </Card>
                    <Card>
                        <a href="apartament" style={linkStyle}>
                            <Card.Img variant="top" src={Suite} />
                            <Card.Body>
                                <Card.Title>Apartament</Card.Title>
                                <Card.Text>
                                    Apartament spațios unde se pot caza 2, 3 sau 4 persoane
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">110/120/130 <FontAwesomeIcon icon={faEuroSign} /></small>
                                <small className="text-muted">4 paturi <FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} /></small>
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