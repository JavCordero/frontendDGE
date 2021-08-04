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
      if (noticiaObject) {
        setNoticia(noticiaObject);
        setIsLoaded(true);
      }
    };
    cargaNoticia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{isLoaded ? <NoticiaComponent noticia={noticia} /> : null}</>;
};

export default NoticiaId;
