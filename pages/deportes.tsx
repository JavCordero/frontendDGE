import Link from "next/link";
import React from "react";
import Directiva from "../components/Deportes/Directiva";

const Deportes = () => {
  return (
    <>
      <Directiva />
      <h2>
        <code>no hay nada</code>
      </h2>
      <Link href="/">ir al home</Link>
    </>
  );
};

export default Deportes;
