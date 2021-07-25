import React from "react";
import Atencion from "./Recursos/AtencionSintomas";

/*
Componente para mostrar atencion Psicologia
*/

const Psicologia = () => {
  return (
    <Atencion
      srcArea="/salud/psicologia.png"
      noCard
      mensaje="Si necesitas:"
      mensajeContacto="Completa el siguiente formulario y nuestro equipo se pondrá en contacto contigo para asignarte una hora de atención online:"
      id="psicologia"
    >
      <p>Psicoeducación</p>
      <p>Terapia psicológica</p>
      <p>Inclusión</p>
      <p>Consejería y derivación </p>
      <p>Seguimiento tratamiento médico</p>
    </Atencion>
  );
};

export default Psicologia;
