import MainEn from '../ComponentsEn/MainEn.js';
import Room_cardEn from '../ComponentsEn/Room_cardEn.js';
import { SliderData } from '../data/SliderData.js';
import HeroEn from '../ComponentsEn/HeroEn.js';
import ContactEn from '../ComponentsEn/ContactEn.js';
import FacilitiesEn from '../ComponentsEn/FacilitiesEn.js';
import ReviewsEn from '../ComponentsEn/ReviewsEn.js';
import styled from 'styled-components';
const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;

const HomeEn = () => {
    return (
        <div>
            <HeroEn slides={SliderData}/>
            <Separator space={60} />
            <MainEn/>
            <Separator space={60} />
            <Separator space={60} />
            <Separator space={60} />
            <FacilitiesEn/>
            <Separator space={60} />
            <Separator space={60} />
            <Room_cardEn/>
            <Separator space={60} />
            <ReviewsEn/>
            <Separator space={60} />
            <ContactEn/>
        </div>
    );
};
export default HomeEn;