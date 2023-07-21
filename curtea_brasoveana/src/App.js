import './styles/App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Navbar from './Components/Navbar.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';



function App() {
  const Title = 'Curtea Brasoveana';


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{Title}</h1>
        <Main />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
