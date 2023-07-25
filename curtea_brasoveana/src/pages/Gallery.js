import  '../styles/about.css'
import styled from 'styled-components';
import Gallery_component from '../Components/Gallery_component';
const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;
const galleryImages = [
  {
    img: require('../assets/Front.jpeg')  },
  {
    img: require('../assets/Front2.jpeg')  },
  {
    img: require('../assets/Front3.jpeg') 
  }

]


const Gallery = () => {
    return (
  <div>
    
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />
    <Gallery_component galleryImages={galleryImages}/>
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />
    <Separator space={100} />

  </div>
            
    );
};
 
export default Gallery;   