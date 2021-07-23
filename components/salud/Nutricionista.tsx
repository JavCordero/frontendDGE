import React from "react";
import Atencion from "./Recursos/AtencionSintomas";

/*
Componente para mostrar atencion Nutricionista
*/

const Nutricionista = () => {
  return (
    <Atencion
      srcArea="/salud/nutricionista.png"
      srcEncargado=""
      nombreEncargado="Marjorie Díaz Urbina"
      cargoEncargado="Nutricionista"
      mensaje="Si necesitas mejorar tu calidad de vida:"
    >
      <p>Plan de tratamiento nutricional</p>
      <p>Toma de pliegues cutáneos </p>
      <p>Diagnostico nutricional</p>
      <p>Entrega de régimen especiales</p>
      <p>Entrega de régimen especiales</p>
    </Atencion>
  );
};

export default Nutricionista;
