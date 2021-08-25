import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import getNoticiaId from "../../../hooks/useGetNoticiaId";
import { NoticiaComponent } from "../../../components/noticias/NoticiaComponent";

const NoticiaId = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [noticia, setNoticia] = useState({ links: [""] });
  const router = useRouter();

  useEffect(() => {
    const cargaNoticia = async () => {
      const noticiaObject = await getNoticiaId(router.query.id);
      if (noticiaObject.id) {
        setNoticia(noticiaObject);
        setIsLoaded(true);
      }
    };
    cargaNoticia();
  }, [router.query.id, isLoaded]);
  return (
    <>
      {isLoaded ? <NoticiaComponent noticia={noticia} /> : <p>Cargando...</p>}
    </>
  );
};

export default NoticiaId;
