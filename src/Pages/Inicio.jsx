import React from "react";
import "../Pages/Css/Inicio.css";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  "/image/Slider/image_1.jpg",
  "/image/Slider/image_2.jpg",
  "/image/Slider/image_3.jpg",
  "/image/Slider/image_4.jpg",
  "/image/Slider/image_5.jpg",
];

const Inicio = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {/* Contenido del texto sobre el carrusel */}
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
          <div className="text-white p-4 bg-white gradient-overlay bg-opacity-10 rounded-xl backdrop-blur-md transition-transform transform hover:scale-105">
            <h1 className="text-4xl md:text-6xl text-shadow font-bold text-center">DISEÑA EN EL MUNDO REAL</h1>
            <p className="mt-2 text-xl md:text-2xl text-shadow text-center">LA FARMACIA DE TUS SUEÑOS.</p>
          </div>
        </div>
      </div>

      {/* Botones de navegación */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Inicio;
