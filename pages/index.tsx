import React, { useEffect, useState } from "react";
import { Placeholder } from "rsuite";
import { Calendario } from "../components/index/Calendario";
import { Categoria } from "../components/index/Categoria";
import { Destacados } from "../components/index/Destacados";
import { Direccion } from "../components/index/Direccion";
import { Unidad } from "../components/index/Unidad";
import LoadNoticias from "../hooks/useLoadNoticias";
import LoadTags from "../hooks/useLoadTags";

export default function Home() {
  const [isLoadNotice, setisLoadNotice] = useState(false);
  const [isLoadTags, setisLoadTags] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const noticiasListas = async () => {
      const noticiasArray = await LoadNoticias();
      console.log(noticiasArray);
      if (noticiasArray.data.length > 0) {
        setisLoadNotice(true);
        setNoticias(noticiasArray.data);
      }
    };
    const tagListos = async () => {
      const tagsArray = await LoadTags();
      if (tagsArray.length > 0) {
        setisLoadTags(true);
        setTags(tagsArray);
      }
    };
    noticiasListas();
    tagListos();
  }, []);
  return (
    <>
      {isLoadNotice ? (
        <Destacados
          titulo1="Destacados"
          titulo2="Nuestras Redes"
          noticias={noticias}
          path="/"
        />
      ) : (
        <Placeholder.Graph active height={450} />
      )}
      <Unidad />
      <Direccion />
      <Calendario />
      {isLoadTags ? (
        <Categoria tags={tags} />
      ) : (
        <Placeholder.Graph active height={450} />
      )}
    </>
  );
}
