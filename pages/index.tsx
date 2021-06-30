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
      <H1>Welcome to NEXT.js</H1>
      <Link href="/deportes">
        <a>ir a deportes</a>
      </Link>
    </>
  );
}
