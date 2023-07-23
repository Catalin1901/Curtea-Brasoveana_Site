import Main from '../Components/Main.js';
import Room_card from '../Components/Room_card.js';


const Home = () => {
    return (
        <div>
            <Hero slides={SliderData}/>
            <Main/>
            <Room_card/>
            <Contact/>
        </div>
    );
};
export default Home;