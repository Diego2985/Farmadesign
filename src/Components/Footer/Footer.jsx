import React, { useEffect, useState } from 'react';
import './Footer.css';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Logo from '../../Assets/image/logo.png'; // Asegurate que esta ruta sea correcta

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <footer className="footer">
          <div className="footer-container">
            {/* Logo y marca */}
            <div className="footer-left">
              <div className="footer-brand">
                <img src={Logo} alt="Logo" className="footer-logo" />
                <h2 className="brand-title">
                  <span className="farma">FARMA</span>
                  <span className="design">DESIGN</span>
                </h2>
                <p className="footer-description">Diseñamos espacios únicos para tu farmacia.</p>
              </div>
            </div>

            {/* Contacto */}
            <div className="footer-right">
              <h3 className="footer-contact-title">Contacto</h3>
              <p><FaWhatsapp className="icon" /> 011 1534-5678</p>
              <p><FaEnvelope className="icon" /> angelgomez@farmadesign.com.ar</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} FarmaDesign. Todos los derechos reservados.</p>
            <p>
              Sitio desarrollado por{' '}
              <a
                href="https://tarjeta-digital-five.vercel.app//"
                target="_blank"
                rel="noopener noreferrer"
                className="desarrollador-link"
              >
                Jorge Diego Arredondo
              </a>
            </p>
          </div>
        </footer>
      )}

      {isMobile && (
        <div className="mini-footer">
           <p className="mini-credito">
             Sitio por{' '}
             <a
               href="https://tarjeta-digital-five.vercel.app/"
               target="_blank"
               rel="noopener noreferrer"
             >
               Jorge Diego Arredondo
             </a>
           </p>

           <a
             href="https://wa.me/5491158531859"
             className="whatsapp-button"
             target="_blank"
             rel="noreferrer"
             aria-label="Chat en WhatsApp"
           >
             <FaWhatsapp size={28} />
          </a>                 
         </div>
         )}
     </>
  );
}
