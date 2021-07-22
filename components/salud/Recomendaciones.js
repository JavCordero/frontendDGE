const Recomendaciones = (props) => {
  return (
    <div className={`recomendaciones ${props.className}`}>
      <div className="recomendaciones__sombra-fondo"></div>
      <p className="recomendaciones__titulo">
        Recomendaciones al tomar tu hora online
      </p>
      <div className="recomendaciones__contenido">
        <div className="recomendaciones__recomendacion">
          <img
            className="recomendaciones__recomendacion-imagen"
            src="/salud/lugar.png"
            alt="imagen de recomendacion"
          />
          <p className="recomendaciones__recomendacion-texto">
            Busca un lugar tranquilo y cómodo
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <img
            className="recomendaciones__recomendacion-imagen"
            src="/salud/wifi.png"
            alt="imagen de recomendacion"
          />
          <p className="recomendaciones__recomendacion-texto">
            Con buen acceso a internet
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <img
            className="recomendaciones__recomendacion-imagen"
            src="/salud/dispositivo.png"
            alt="imagen de recomendacion"
          />
          <p className="recomendaciones__recomendacion-texto">
            Ten un dispositivo para conectarte y audífonos{" "}
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <img
            className="recomendaciones__recomendacion-imagen"
            src="/salud/evitar.png"
            alt="imagen de recomendacion"
          />
          <p className="recomendaciones__recomendacion-texto">
            Evita interrupciones
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <img
            className="recomendaciones__recomendacion-imagen"
            src="/salud/lista.png"
            alt="imagen de recomendacion"
          />
          <p className="recomendaciones__recomendacion-texto">
            Busca un lugar tranquilo y cómodo
          </p>
        </div>
        <div className="recomendaciones__recomendacion">
          <img
            className="recomendaciones__recomendacion-imagen"
            src="/salud/llamada.png"
            alt="imagen de recomendacion"
          />
          <p className="recomendaciones__recomendacion-texto">
            Informa en tu hogar que no estarás disponible
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recomendaciones;
