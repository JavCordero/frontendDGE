/*
Este componente es una tarjeta de instrucciones
los parametros son:
    - titulo: titulo de la tarjeta
    - texto: texto que se mostrara en la tarjeta
    - srcIcono: ruta del icono que se mostrara en la tarjeta
*/

import Image from "next/image";

const TarjetaInstruccion = (props) => {
  return (
    <div className="tarjetaInstruccion">
      <img
        className="tarjetaInstruccion__icono"
        src={props.srcIcono}
        alt="imagen icono"
      />
      {props.titulo && (
        <h3 className="tarjetaInstruccion__titulo">{props.titulo}</h3>
      )}
      <div className="tarjetaInstruccion__texto-content">
        <p className="tarjetaInstruccion__texto">{props.children}</p>
      </div>
    </div>
  );
};

export default TarjetaInstruccion;
