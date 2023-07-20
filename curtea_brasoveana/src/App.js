import './styles/App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Footer from './Components/Footer.js';
import Navbar from './Components/Navbar.js';
import hugeImage from './assets/Huge.png'; // Update the path based on your project structure


function App() {
  const Title = 'Curtea Brasoveana';


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{Title}</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xxl-12 custom-border">
              <img src={hugeImage} alt="Huge Image" className="img-fluid" />
            </div>
          </div>

          <div className="row">
            <div className="col-4 custom-border">
              <p>Column 1</p>
            </div>
            <div className="col-4 custom-border">
              <p>Column 2</p>
            </div>
            <div className="col-4 custom-border">
              <p>Column 3</p>
            </div>
          </div>

          <div className="row">
            <div className="col-8 custom-border">
              <p>Column 1</p>
            </div>
            <div className="col-4 custom-border">
              <p>Column 2</p>
            </div>
          </div>

        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
