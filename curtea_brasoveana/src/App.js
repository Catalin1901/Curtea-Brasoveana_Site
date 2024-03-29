import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
//Romana
import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Rooms from './pages/Rooms.js';
import Gdpr from './pages/Gdpr.js';
import DoubleRoom from './pages/DoubleRoom.js';
import TripleRoom from './pages/TripleRoom.js';
import FourRoom from './pages/FourRoom.js';
import Suite from './pages/Suite.js';
//Engleza
import HomeEn from './pages/HomeEn.js';
import RoomsEn from './pages/RoomsEn.js';
import GalleryEn from './pages/GalleryEn.js';
import GdprEn from './pages/GdprEn.js';
import DoubleRoomEn from './pages/DoubleRoomEn.js';
import TripleRoomEn from './pages/TripleRoomEn.js';
import FourRoomEn from './pages/FourRoomEn.js';
import SuiteEn from './pages/SuiteEn.js';
//Componente
import GlobalStyle from './globalStyle';
import WhatsAppLogo from './Components/Whatsapp.js';
//Routes to the other pages

//Functions:
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0); 
  }, [pathname]);

  return null;
}
//Main App
function App() {
  return (
    <Router>
    <div className="App">
      <GlobalStyle/>
      <WhatsAppLogo />
      <div className="content">
      <Routes>
        <Route exact path='/'element={<Home />} />
        <Route path='/galerie'element={<Gallery />} />
        <Route path='/camere'element={<Rooms />} />
        <Route path='/gdpr'element={<Gdpr />} />
        <Route path='/en'element={<HomeEn />} />
        <Route path='/en/rooms'element={<RoomsEn />} />
        <Route path='/en/gallery'element={<GalleryEn />} />
        <Route path='/en/gdpr'element={<GdprEn />} />
        <Route path='/camera_dubla'element={<DoubleRoom />} />
        <Route path='/camera_tripla'element={<TripleRoom />} />
        <Route path='/camera_cvadrupla'element={<FourRoom />} />
        <Route path='/apartament'element={<Suite />} />
        <Route path='/en/double_room'element={<DoubleRoomEn />} />
        <Route path='/en/triple_room'element={<TripleRoomEn />} />
        <Route path='/en/quadruple_room'element={<FourRoomEn />} />
        <Route path='/en/suite'element={<SuiteEn />} />
      </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
    </Router>
  );
}

export default App;