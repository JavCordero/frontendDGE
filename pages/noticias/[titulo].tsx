import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import getNoticiaId from "../../hooks/useGetNoticiaId";

import { NoticiaComponent } from "../../components/noticias/NoticiaComponent";

const NoticiaId = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [noticia, setNoticia] = useState({ links: [""] });
  const router = useRouter();

  useEffect(() => {
    const cargaNoticia = async () => {
      const noticiaObject = await getNoticiaId(router.query.id);
      console.log(noticiaObject.id);
      if (noticiaObject) {
        setNoticia(noticiaObject);
        setIsLoaded(true);
      }
    };
    cargaNoticia();
  }, [router.query.id]);
  return <>{isLoaded ? <NoticiaComponent noticia={noticia} /> : null}</>;
};

export default NoticiaId;
