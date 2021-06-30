import Head from "next/head";
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";

/* Ejemplo de un styled component */
const H1 = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <>
      {/* --FRAGMENTO CORRESPONDIENTE AL HEAD DE LA PAGINA -- aca se pueden importar estilos css globales. */}
      <Head>
        <title>Plataforma DGE</title>
        <meta name="description" content="Plataforma DGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dgeico.ico" />
      </Head>

      <H1>Welcome to NEXT.js</H1>
      <Link href="/deportes">
        <a>ir a deportes</a>
      </Link>
    </>
  );
}
