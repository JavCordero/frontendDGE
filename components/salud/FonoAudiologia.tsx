import React from "react";
import Atencion from "./Recursos/AtencionSintomas";

/*
Componente para mostrar atencion Fonoaudiologia
*/

const FonoAudiologia = () => {
  return (
    <Atencion
      srcArea="/salud/fonoAudiologia.png"
      srcEncargado=""
      nombreEncargado="Eveling Miranda Roco"
      cargoEncargado="Fonoaudiologa"
      mensaje="Si tienes algunos de estos síntomas:"
      id="fonoaudiologia"
    >
      <p>Mala respiración / Velocidad del habla</p>
      <p>Disfonía / Cuidado de voz</p>
      <p>Dolor mandibular / Bruxismo</p>
      <p>Evaluación del oido</p>
      <p>Omisión o sustitución de fonemas</p>
      <p>Dolor mandibular / Bruxismo</p>
    </Atencion>
  );
};

export default FonoAudiologia;
