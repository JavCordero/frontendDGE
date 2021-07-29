import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Placeholder } from "rsuite";
import { Calendario } from "../components/index/Calendario";
import { Categoria } from "../components/index/Categoria";
import { Destacados } from "../components/index/Destacados";
import { Direccion } from "../components/index/Direccion";
import { Unidad } from "../components/index/Unidad";
import LoadNoticias from "../hooks/useLoadNoticias";

export default function Home() {
  const [isLoadNotice, setisLoadNotice] = useState(false);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const noticiasListas = async () => {
      const noticiasArray = await LoadNoticias();
      console.log(noticiasArray);
      if (noticiasArray.data.length > 0) {
        setisLoadNotice(true);
        setNoticias(noticiasArray.data);
      }
    };
    noticiasListas();
  }, []);
  return (
    <>
      {isLoadNotice ? (
        <Destacados
          titulo1="Destacados"
          titulo2="Para tí"
          noticias={noticias}
        />
      ) : (
        <Placeholder.Graph active height={450} />
      )}
      <Unidad />
      <Direccion />
      <Calendario />
      <Categoria />
    </>
  );
}
