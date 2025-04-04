import React from 'react'
import "./Css/Nosotros.css";  // Importamos el CSS



const Nosotros = () => {
  

  return (
   
<div id="nosotros" className="py-16 bg-teal-500 text-white">
  <section className="text-container">
    <h2 className="text-4xl font-bold">Nosotros</h2>
    <p className="text-lg mt-4 leading-relaxed">
      "En FarmaDesign, nos especializamos en la remodelación moderna y construcción de
       locales para farmacias. Nuestro enfoque está en crear espacios funcionales y
       estéticamente atractivos, que mejoren la experiencia de los clientes y optimicen el
       rendimiento del negocio.
       Ofrecemos soluciones personalizadas, adaptadas a las necesidades específicas de cada
       proyecto, combinando diseño innovador con materiales de alta calidad para garantizar
       resultados duraderos y modernos.
       Nuestro equipo de profesionales trabaja con dedicación y compromiso para
       transformar cada farmacia en un espacio moderno y eficiente."
    </p>
  </section>

  <div className="card-container">
    <div className="card">
      <img src="/image/Card/card_1.png" alt="Interior de farmacia" />
    </div>

    <div className="card">
      <img src="/image/Card/card_2.png" alt="Capacitación de colaboradores" />
    </div>

    <div className="card">
      <img src="/image/Card/card_3.png" alt="Exhibición y Journey" />
    </div>
  </div>
</div>
  );
};

export default Nosotros;
