import React from "react";
import HeaderNoticia from "../../components/noticias/HeaderNoticia";

const noticia = () => {
  return (
    <div className="noticia">
      <HeaderNoticia />
      <div className="noticia__links"></div>
      <div className="noticia__botones"></div>
      <div className="noticia__fecha"></div>
      <div className="noticia__content"></div>
      <div className="noticia__tags"></div>
      <div className="noticia__volver"></div>
      <div className="noticia__relacionados"></div>
    </div>
  );
};

export default noticia;
