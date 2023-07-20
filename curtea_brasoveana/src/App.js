import './styles/App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected import path for Bootstrap CSS
import { Button } from 'react-bootstrap'; // Import Button component from React Bootstrap
import Footer from './Components/Footer.js'; // Update to use correct casing
import Navbar from './Components/Navbar.js'; // Update to use correct casing
function App() {
  const Title = 'Curtea Brasoveana';
  const [count, setCount] = useState(0);
  return (

    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{Title}</h1>
        <Button variant="primary" onClick={() => setCount(count + 1)}>Primary</Button>{' '}  {/*Testat use state + Bootstrap, c*/}
        <p>Count: {count}</p>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
