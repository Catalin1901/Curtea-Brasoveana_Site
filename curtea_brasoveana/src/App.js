import './styles/App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Navbar from './Components/Navbar.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Rooms from './pages/Rooms.js';

function App() {
  const Title = 'Curtea Brasoveana';
  return (
    <Router>
    <div className="App">
      <Navbar />
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
