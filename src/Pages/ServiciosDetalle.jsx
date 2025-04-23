import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Css/ServiciosDetalle.css'; // Asegúrate de que la ruta sea correcta

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


import { serviciosDetalle } from "../Data/ServiciosDetalle";

export default function ServiciosDetalle() {
   
  
    const navigate = useNavigate();    
    const { id } = useParams();
    const servicios = serviciosDetalle[id];
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    if (!servicios) {
        return <div className="container py-5">Servicio no encontrado</div>;
    }

    const slides = servicios.imagenes?.map((img) => ({
        src: img,
        alt: "Imagen del proyecto",
      }));

        return (
            <div className="bg-teal-500" id="serviciosdetalle">
            <div  className="container py-5 mb-5" style={{ paddingBottom: "150px" }}>
                <h2 className="mb-3 text-white">{servicios.nombre}</h2>
                <p className="text-white">{servicios.ubicacion}</p>
                <p className="text-white">{servicios.descripcion}</p>

                <div className="row pb-10">
                  {servicios.imagenes.map((src, i) => (
                    <div className="col-md-6 mb-3" key={i}>
                        <img
                            src={src}
                            alt={`Imagen-${i}`}
                            className="img-fluid rounded"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setImgIndex(i);
                                setIsOpen(true);
                                document.body.style.overflow = "hidden"; // para bloquear el scroll
                            }}
                        />
                    </div>  
               ))}
            </div>
           
                          
              {isOpen && servicios.imagenes?.length > 0 && (  
                <Lightbox
                   open={isOpen}
                   close={() => {
                     setIsOpen(false);
                     document.body.style.overflow = "auto";
                   }}
                   index={imgIndex}
                   slides={slides}
                   on={{
                     view: ({ index }) => setImgIndex(index),
                   }}
                   plugins={[Captions, Thumbnails]}
                />
              )}
        
              {/* Boton de volver */}
              <div className="text-center mt-5">
                   <button className="btn btn-light my-3" 
                   onClick={() => navigate(-1)}>
                        ← Volver
                   </button>
              </div>
              </div>  
              </div>      
            );       
          } 

   
