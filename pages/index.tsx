import styled from "@emotion/styled";
import React from "react";
import { Calendario } from "../components/index/Calendario";
import { Categoria } from "../components/index/Categoria";
import { Destacados } from "../components/index/Destacados";
import { Direccion } from "../components/index/Direccion";
import { Unidad } from "../components/index/Unidad";
import Footer from "../components/layout/Footer";

/* Ejemplo de un styled component */
const H1 = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <>
      <Destacados titulo1="Destacados" titulo2="Para tí" />
      <Unidad />
      <Direccion />
      <Calendario />
      <Categoria />
    </>
  );
}
