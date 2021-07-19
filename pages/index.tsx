import styled from "@emotion/styled";
import React from "react";
import { Calendario } from "../components/index/Calendario";
import { Categoria } from "../components/index/Categoria";
import { Destacados } from "../components/index/Destacados";
import { Direccion } from "../components/index/Direccion";
import { Unidad } from "../components/index/Unidad";

/* Ejemplo de un styled component */
const H1 = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <>
      <Destacados />
      <Unidad />
      <Direccion />
      <Calendario />
      <Categoria />
    </>
  );
}
