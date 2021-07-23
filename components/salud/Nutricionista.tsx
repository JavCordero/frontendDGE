import React from "react";
import Atencion from "./Recursos/AtencionSintomas";

const Nutricionista = () => {
  return (
    <Atencion
      srcArea="/salud/nutricionista.png"
      srcEncargado=""
      nombreEncargado="Marjorie Díaz Urbina"
      cargoEncargado="Nutricionista"
      mensaje=""
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
