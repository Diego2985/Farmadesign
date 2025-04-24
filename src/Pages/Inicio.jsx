import React from "react";
import "../Pages/Css/Inicio.css";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  { src: "/image/Slider/image_1.jpg", label: "" },
  { src: "/image/Slider/image_2.jpg", label: "" },
  { src: "/image/Slider/image_3.jpg", label: "ANTES" },
  { src: "/image/Slider/image_4.jpg", label: "DESPUÉS" } 
];


const Inicio = () => {
  return (
    // Contenedor del carrusel
    <div className="inicio">
    <div id="inicio" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ position: "relative" }}
          >
            {/* Imagen del carrusel */}
            <img
              src={image.src}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ height: "600px", objectFit: "cover" }}
            />

            {/* Etiqueta "ANTES" o "DESPUÉS" */}
            {image.label && (
              <div
                className="position-absolute text-white bg-dark px-3 py-1 rounded"
                style={{
                  top: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  zIndex: 10,
                }}
              >
                {image.label}
              </div>
            )}

            {/* Contenido del texto sobre cada imagen */}
            <div
              className="carousel-caption d-flex flex-column align-items-center justify-content-center"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                textAlign: "center",
              }}
            >
              <div className="text-white p-4 bg-white gradient-overlay bg-opacity-10 rounded-xl backdrop-blur-md transition-transform transform hover:scale-105">
                <h1 className="text-4xl md:text-6xl text-shadow font-bold text-center">
                  Diseña EN EL MUNDO REAL
                </h1>
                <h2 className="mt-2 text-4xl md:text-6xl text-shadow font-bold italic text-center leading-tight tracking-wide">
                  "La farmacia de tus sueños"
                </h2>
                <a href="#nosotros" className="boton-personalizado">
                  Más información
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button className="carousel-control-prev" type="button" data-bs-target="#inicio" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#inicio" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default Inicio;
