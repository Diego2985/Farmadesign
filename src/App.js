import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Inicio from '../src/Pages/Inicio';
import Nosotros from '../src/Pages/Nosotros';
import Servicio from '../src/Pages/Servicio';
import Contacto from '../src/Pages/Contacto';


function App() {
  return (
    <div className="App">
      <Navbar />
        <div id="home" style={{ paddingTop: '56px' }}>
          <Inicio />
        </div>
        <div id="nosotros" style={{ paddingTop: '56px' }}>
          <Nosotros />
        </div>
        <div id="servicios" style={{ paddingTop: '56px' }}>
          <Servicio />
        </div>
        <div id="contacto" style={{ paddingTop: '56px' }}>
          <Contacto />
        </div>    
        <Footer />         
    </div>
    
  );
}

export default App;
