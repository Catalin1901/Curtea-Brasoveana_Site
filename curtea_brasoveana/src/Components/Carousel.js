import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import FirstSlideImage from '../assets/Front.jpeg';
import SecondSlideImage from '../assets/Front2.jpeg';
import ThirdSlideImage from '../assets/Front3.jpeg';

function UncontrolledExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image src={FirstSlideImage} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={SecondSlideImage} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={ThirdSlideImage} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
