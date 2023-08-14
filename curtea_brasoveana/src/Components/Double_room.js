import Carousel from 'react-bootstrap/Carousel';
import camera_dubla from '../assets/Camera_dubla.jpg';
import { Image } from 'react-bootstrap';
import '../styles/double_room.css'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={camera_dubla} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={camera_dubla} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={camera_dubla} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;