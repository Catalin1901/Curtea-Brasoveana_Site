import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
//Componente
import GlobalStyle from './globalStyle';
import WhatsAppLogo from './Components/Whatsapp.js';
//Routes to the other pages
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
        <Route path='/double_room'element={<DoubleRoom />} />
        <Route path='/triple_room'element={<TripleRoom />} />
        <Route path='/quadruple_room'element={<FourRoom />} />
        <Route path='/suite'element={<Suite />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;