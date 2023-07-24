import './styles/app.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Rooms from './pages/Rooms.js';
import GlobalStyle from './globalStyle';
import Dropdown from './Components/Dropdown.js';
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
      <Navbar toggle={toggle}/> 
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <WhatsAppLogo />
      <div className="content">
      <Routes>
        <Route exact path='/'element={<Home />} />
        <Route path='/about'element={<About />} />
        <Route path='/rooms'element={<Rooms />} />

      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
