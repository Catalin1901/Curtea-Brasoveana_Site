import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Romana
import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Rooms from './pages/Rooms.js';
//Engleza
import HomeEn from './pages/HomeEn.js';
import RoomsEn from './pages/RoomsEn.js';
import GalleryEn from './pages/GalleryEn.js';
import NavbarEn from './ComponentsEn/NavbarEn.js';
//Componente
import GlobalStyle from './globalStyle';
import Dropdown from './Components/Dropdown.js';
import Navbar from './Components/Navbar.js';
import WhatsAppLogo from './Components/Whatsapp.js';
//Routes to the other pages
function App() {
  const Title = 'Curtea Brasoveana';
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
    <div className="App">
      <GlobalStyle/>
    {/*Nu ne place uselocals aparent*/}
      <WhatsAppLogo />
      <div className="content">
      <Routes>
        <Route exact path='/'element={<Home />} />
        <Route path='/gallery'element={<Gallery />} />
        <Route path='/rooms'element={<Rooms />} />
        <Route path='/en'element={<HomeEn />} />
        <Route path='/en/rooms'element={<RoomsEn />} />
        <Route path='/en/gallery'element={<GalleryEn />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;