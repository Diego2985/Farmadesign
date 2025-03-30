import React from 'react';
import footer_logo from '../../Assets/image/logo.png';
import './Footer.css'
import facebook_icon from '../../Assets/image/Iconos/facebook.png';
import whatsapp_icon from '../../Assets/image/Iconos/whatsapp.png';
import instagram_icon from '../../Assets/image/Iconos/instagram.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo y texto de la izquierda */}
        <div className="footer-left d-flex align-items-center">
          <a className="footer-brand d-flex align-items-center" href="#home">
                    <img src={footer_logo} alt="Logo" style={{ height: "100px", marginRight: "-45px" }}/>
                    <span className="farma" style={{ color: "#3FAFB8", fontWeight: "bold" }}>FARMA</span>
                    <span className="design" style={{ color: "#5E7D99", fontWeight: "bold" }}>DESIGN</span>
                  </a>   
        </div>

        {/* Informacion de contacto */}   
        <div className="footer-contact d-flex aling-items-center gap-4">
          <p className="d-flex align-items-center m-0">
            <FaMapMarkerAlt style={{ color:"#3fafb8", marginRight: "8px" }}/>Direccion: Calle Falsa 2224
          </p>
          <p className="d-flex align-items-center m-0">
          <FaPhoneAlt style={{ color:"#3fafb8", marginRight: "8px" }}/>Telefono: 123456789
          </p>
          <p className="d-flex align-items-center m-0">
          <FaEnvelope style={{ color:"#3fafb8", marginRight: "8px" }}/>Email: hola@mail.com
          </p>
        </div>


        {/* Iconos de redes sociales */}     
         <div className="footer-social-icon d-flex justify-content-center">
                <div className="footer-icons-container mx-2">
                       <img src={facebook_icon} alt="Facebook" />
                </div>
                <div className="footer-icons-container mx-2">
                       <img src={instagram_icon} alt="Instagram" />
                </div>
                <div className="footer-icons-container mx-2">
                       <img src={whatsapp_icon} alt="Whatsapp" />
                </div>
        </div> 
      </div>
            <div className="footer-copyright text-center">
                 <hr />
                 <p>@ 2025 FARMADESIGN  - Todo los derechos reservados</p>
                 <p>Desarrollado por Diego Arredondo<a href="https://www.linkedin.com/in/Jorge-Diego-Arredondo/" target="_blank" rel="noopener noreferrer">Jorge Diego Arredondo</a></p>
            </div>                  
      </footer>
  )
}

export default Footer