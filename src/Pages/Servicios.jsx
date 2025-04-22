import { Link } from 'react-router-dom';
import { farmacias } from '../Data/Farmacias.js'; // Asegúrate de que la ruta sea correcta
import './Css/Servicios.css';  // Importamos el CSS

const Servicios = () => {
  return (
    // contenedor principal
    <div id="servicios" className="pt-5 bg-teal-500 text-white">
      <section className="text-container">
      <h2 className="text-4xl font-bold">Servicios</h2>
      </section>
      
    
      <div className="card-container-servicios">        
        {farmacias.map(f => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={f.id}>
            <div className="card h-100 shadow-sm">
              <img src={f.imagen} className="card-img-top" alt={f.nombre} />
              <div className="card-body">
                <h5 className="card-title">{f.nombre}</h5>
                <p className="card-text text-muted">{f.ubicacion}</p>
                <Link to={`/servicios/${f.id}`} className="btn btn-primary">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}      
    </div>
    </div>
   
    
  );
}
 export default Servicios;