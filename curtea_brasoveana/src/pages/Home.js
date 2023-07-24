import Main from '../Components/Main.js';
import Room_card from '../Components/Room_card.js';
import { SliderData } from '../data/SliderData.js';
import Hero from '../Components/Hero.js';
import Contact from '../Components/Contact.js';
import Facilities from '../Components/Facilities.js';
import Reviews from '../Components/Reviews.js';


const Home = () => {
    return (
        <div>
            <Hero slides={SliderData}/>
            <Main/>
            <Facilities/>
            <Room_card/>
            <Reviews/>
            <Contact/>
        </div>
    );
};
export default Home;