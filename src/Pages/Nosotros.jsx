import React from 'react'
import { FaCheckCircle, FaFlask, FaHandshake } from 'react-icons/fa';

const Nosotros = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/image/fondo-nosotros2.jpg')" }}
    >
      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      
      {/* Contenido */}
      <div className="container mx-auto text-center px-4 relative z-10">
        <h2 className="text-4xl font-bold text-[#3FAFB8] drop-shadow-lg mb-6">Sobre Nosotros</h2>   

        <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
          En <span className="font-semibold text-[#3FAFB8]">FarmaDesign</span>, nos especializamos en el diseño y la implementación de mobiliario para farmacias. 
          Nuestro equipo de expertos trabaja para transformar espacios, optimizando la funcionalidad y estética de cada proyecto.
        </p>

        {/* Sección de tarjetas */}
        <div className="w-full flex flex-col items-center gap-6 mt-10">
          
          {/* Tarjeta 1 */}
          <div 
            className="w-full md:w-1/3 max-w-sm rounded-2xl p-6 text-white text-center shadow-lg transition-transform hover:scale-105"
            style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}
          >
            <div className="flex items-center justify-center mb-3">
              <FaFlask className="text-4xl text-[#3FAFB8]"/>
            </div>
            <h3 className="text-xl font-bold">Innovación</h3>
            <p className="text-gray-200 mt-2 font-normal">
              Aplicamos las últimas tendencias en diseño para ofrecer soluciones modernas y eficientes.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div 
            className="w-full md:w-1/3 max-w-sm rounded-2xl p-6 text-white text-center shadow-lg transition-transform hover:scale-105"
            style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}
          >
            <div className="flex items-center justify-center mb-3">
              <FaCheckCircle className="text-4xl text-[#3FAFB8]"/>
            </div>
            <h3 className="text-xl font-bold">Calidad</h3>
            <p className="text-gray-200 mt-2 font-normal">
              Utilizamos materiales de alta calidad para garantizar durabilidad y resistencia en nuestros productos.
            </p>
          </div>
         
          {/* Tarjeta 3 */}
          <div 
            className="w-full md:w-1/3 max-w-sm rounded-2xl p-6 text-white text-center shadow-lg transition-transform hover:scale-105"
            style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}
          >
            <div className="flex items-center justify-center mb-3">
              <FaHandshake className="text-4xl text-[#3FAFB8]"/>
            </div>
            <h3 className="text-xl font-bold">Compromiso</h3>
            <p className="text-gray-200 mt-2 font-normal">
              Nos enfocamos en entender las necesidades de cada cliente para superar sus expectativas.
            </p>
          </div>          
        </div>  
      </div>
    </section>
  );
}

export default Nosotros;