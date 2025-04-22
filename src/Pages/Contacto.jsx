import React, { useRef } from 'react';
import "./Css/Contacto.css";  // Importamos el CSS
import ReCAPTCHA from 'react-google-recaptcha';

const Contacto = () => {
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    const token = recaptchaRef.current.getValue(); // Obtener el token de reCAPTCHA
    if (!token) {
      alert("Por favor confirma que no sos un robot.");
      return;
    }

    const formData = new FormData(e.target); // Obtener los datos del formulario
    
    try {
    const response = await fetch('https://formspree.io/f/mkgrwdnz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    });

    if (response.ok) {
      alert("Gracias por tu consulta. Te responderemos a la brevedad.");
      e.target.reset(); // Limpiar el formulario después de enviar
      recaptchaRef.current.reset(); // Reiniciar reCAPTCHA
    } else {
      alert("Hubo un error al enviar tu consulta.");
    }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar tu consulta.");
    }
   
  };


  return (
    <section id="contacto" className="pt-3 pb-4 bg-teal-500 contacto text-white">
      <div className="container">
        <div className="row mb-4">
          <h2 className="text-center text-4xl font-bold">Contacto</h2>
        </div>
        <form onSubmit={handleSubmit} className="row g-4 p-4 bg-light rounded shadow mx-auto" style={{ maxWidth: '700px' }}>
          <div className="mb-3 text-start">            
            <input type="text" className="form-control rounded-pill w-75" id="nombre" name="nombre" placeholder='Nombre' required />
          </div>
          <div className="mb-3 text-start">
            <input type="email" className="form-control rounded-pill w-75" id="email" name="email" placeholder='Email' required />
          </div>
          <div className="mb-3 text-start">
            <textarea className="form-control rounded-4" id="mensaje" name="mensaje" rows="4" placeholder='Consulta' required></textarea>
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lex5x8rAAAAAAkAT-FpGNM6rzSq1uk_CzyUdEb8"
            />
          </div>
          <div className="mb-3 text-start">
            <button type="submit" className="btn btn-primary px-4 rounded-pill">Enviar</button>
          </div>
        </form>
      </div>
      <div style={{ height: '290px' }}></div> {/* Espacio final */}
    </section>
  );
};

export default Contacto