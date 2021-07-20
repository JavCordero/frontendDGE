import Link from "next/link";
import React from "react";
import Directiva from "../../components/Deportes/Directiva";
import { Destacados } from "../../components/index/Destacados";

const index = () => {
  return (
    <>
      <Destacados titulo1="Deportes" titulo2="Destacados" />
      <Directiva />
      <h2>
        <code>no hay nada</code>
      </h2>
      <Link href="/">ir al home</Link>
    </>
  );
};

export default index;
