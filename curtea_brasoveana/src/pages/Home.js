import Main from '../Components/Main.js';
import Room_card from '../Components/Room_card.js';
import { SliderData } from '../data/SliderData.js';
import Hero from '../Components/Hero.js';
import Contact from '../Components/Contact.js';
import Facilities from '../Components/Facilities.js';
import Reviews from '../Components/Reviews.js';
import styled from 'styled-components';
const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;

const Home = () => {
    return (
        <div>
            <Hero slides={SliderData}/>
            <Separator space={60} />
            <Main/>
            <Separator space={60} />
            <Facilities/>
            <Separator space={60} />
            <Room_card/>
            <Separator space={60} />
            <Reviews/>
            <Contact/>
        </div>
    );
};
export default Home;