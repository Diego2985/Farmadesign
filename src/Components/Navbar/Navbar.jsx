import React from 'react'
import { useEffect } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Collapse} from "bootstrap";
import logo from '../../Assets/image/logo.png';

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const bsCollapse = document.getElementById("navbarNav");

    // Oculta el menú al hacer clic en un enlace
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const collapse = new Collapse(bsCollapse, { toggle: true });
        collapse.hide();
      });
    });

    // Scroll suave con compensación para que el navbar no tape el contenido
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const id = href.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          const offset = 100; // Ajusta este valor según la altura de tu navbar
          const top = section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
    }
  };

  navLinks.forEach(link => link.addEventListener("click", handleAnchorClick));    

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" >
      <div className="container"> 
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src={logo} alt="" style={{ height: "100px", marginRight: "-45px" }}/>
          <span className="farma" style={{ color: "#3FAFB8", fontWeight: "bold" }}>FARMA</span>
          <span className="design" style={{ color: "#5E7D99", fontWeight: "bold" }}>DESIGN</span>
        </a>         
         <button 
           className="navbar-toggler" type="button" 
           data-bs-toggle="collapse" 
           data-bs-target="#navbarNav" 
           aria-controls="navbarNav" 
           aria-expanded="false" 
           aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <a className="nav-link" href="#inicio" >INICIO</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#nosotros" >NOSOTROS</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#servicios" >SERVICIOS</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#contacto" >CONTACTO</a>
             </li>
           </ul>   
            </div>
      </div>
   </nav>
  );
};

export default Navbar