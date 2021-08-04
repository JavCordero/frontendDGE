const Recomendaciones = (props) => {
  return (
    <div className={`recomendaciones ${props.className}`}>
      <p className="recomendaciones__titulo">
        Recomendaciones al tomar tu hora online
      </p>
      <div className="recomendaciones__contenido">
        <div className="recomendaciones__recomendacion">
          <i className="recomendaciones__recomendacion-imagen fas fa-map-marker-alt"></i>
          <p className="recomendaciones__recomendacion-texto">
            Busca un lugar tranquilo y cómodo
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <i className="recomendaciones__recomendacion-imagen fas fa-wifi"></i>
          <p className="recomendaciones__recomendacion-texto">
            Con buen acceso a internet
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <i className="recomendaciones__recomendacion-imagen fas fa-laptop-medical"></i>
          <p className="recomendaciones__recomendacion-texto">
            Ten un dispositivo para conectarte y audífonos{" "}
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <i className="recomendaciones__recomendacion-imagen fas fa-ban"></i>
          <p className="recomendaciones__recomendacion-texto">
            Evita interrupciones
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <i className="recomendaciones__recomendacion-imagen fas fa-list-ol"></i>
          <p className="recomendaciones__recomendacion-texto">
            Busca un lugar tranquilo y cómodo
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <i className="recomendaciones__recomendacion-imagen fas fa-phone"></i>
          <p className="recomendaciones__recomendacion-texto">
            Informa en tu hogar que no estarás disponible
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recomendaciones;
