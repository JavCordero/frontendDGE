import React from "react";
import Atencion from "./Recursos/AtencionSintomas";

/*
Componente para mostrar atencion Odontologia
*/

const Odontologia = () => {
  return (
    <Atencion
      srcArea=""
      srcEncargado=""
      nombreEncargado=""
      cargoEncargado="Odontologo"
      mensaje=""
    >
      <p>Dato 1</p>
      <p>Dato 2</p>
      <p>Dato 3</p>
      <p>Dato 4</p>
      <p>Dato 5</p>
      <p>Dato 6</p>
    </Atencion>
  );
};

export default Odontologia;
