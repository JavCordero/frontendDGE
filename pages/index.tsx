import styled from "@emotion/styled";
import React from "react";
import { Destacados } from "../components/index/Destacados";
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
    </>
  );
}
