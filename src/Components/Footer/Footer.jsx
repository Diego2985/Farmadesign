import React from 'react';
import footer_logo from '../../Assets/image/logo.png';
import './Footer.css';
import facebook_icon from '../../Assets/image/Iconos/facebook.png';
import whatsapp_icon from '../../Assets/image/Iconos/whatsapp.png';
import instagram_icon from '../../Assets/image/Iconos/instagram.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <div className="container footer-container">
        
        {/* Logo y texto */}
        <div className="footer-left">
          <a className="footer-brand" href="#">
            <img src={footer_logo} alt="Logo" className="footer-logo-img"/>
            <span className="farma">FARMA</span>
            <span className="design">DESIGN</span>
          </a>   
        </div>

        {/* Información de contacto */}   
        <div className="footer-contact">
          <p><FaMapMarkerAlt className="icon"/> Dirección: Calle Falsa 2224</p>
          <p><FaPhoneAlt className="icon"/> Teléfono: 123456789</p>
          <p><FaEnvelope className="icon"/> Email: hola@mail.com</p>
        </div>

        {/* Iconos de redes sociales */}     
        <div className="footer-social">
          <img src={facebook_icon} alt="Facebook" className="social-icon"/>
          <img src={instagram_icon} alt="Instagram" className="social-icon"/>
          <img src={whatsapp_icon} alt="Whatsapp" className="social-icon"/>
        </div> 
      </div>

      <div className="footer-copyright">
        <hr />
        <p>© 2025 FARMADESIGN - Todos los derechos reservados</p>
        <p>Desarrollado por <a href="https://www.linkedin.com/in/Jorge-Diego-Arredondo/" target="_blank" rel="noopener noreferrer">Jorge Diego Arredondo</a></p>
      </div>                  
    </footer>
  );
}

export default Footer;
