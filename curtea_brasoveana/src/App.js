import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Romana
import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Rooms from './pages/Rooms.js';
import Gdpr from './pages/Gdpr.js';
//Engleza
import HomeEn from './pages/HomeEn.js';
import RoomsEn from './pages/RoomsEn.js';
import GalleryEn from './pages/GalleryEn.js';
import GdprEn from './pages/GdprEn.js';
//Componente
import GlobalStyle from './globalStyle';
import WhatsAppLogo from './Components/Whatsapp.js';
import Double_room from './pages/DoubleRoom.js';
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
        <Route path='/double_room'element={<Double_room />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;