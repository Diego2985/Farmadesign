import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Inicio from './Pages/Inicio';
import Nosotros from './Pages/Nosotros';
import Servicios from './Pages/Servicios';
import Contacto from './Pages/Contacto';
import ServiciosDetalle from './Pages/ServiciosDetalle';


function AppContent() {
  const location = useLocation();
  const ocutarFooter = /^\/servicios\/[^/]+$/.test(location.pathname);

  return (
      <div className="App">
        <Navbar />
        <div style={{ paddingTop: '56px' }}>
          <Routes>
            <Route path="/" element={
              <>
                <Inicio />
                <Nosotros />
                <Servicios />
                <Contacto />
              </>
            } />
            <Route path="/servicios/:id" element={<ServiciosDetalle />} />
          </Routes>
          {!ocutarFooter && <Footer /> }
        </div>        
      </div>   
  );
}

export default function App() {
return (
  <Router>
    <AppContent />
  </Router>
);
}