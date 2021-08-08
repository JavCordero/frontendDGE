import React from "react";
import { host } from "../../public/js/host";
import TitleLine from "../others/TitleLine";
import NoticiaPreview from "./NoticiaPreview";
import NoticiaPreviewContainer from "./NoticiaPreviewContainer";
import NoticiaBotones from "./noticia__recursos/NoticiaBotones";
import NoticiaContenido from "./noticia__recursos/NoticiaContenido";
import NoticiaFechaDatos from "./noticia__recursos/NoticiaFechaDatos";
import NoticiaHeader from "./noticia__recursos/NoticiaHeader";
import NoticiaHeaderContent from "./noticia__recursos/NoticiaHeaderContent";
import NoticiaLinks from "./noticia__recursos/NoticiaLinks";
import NoticiaRelacionados from "./noticia__recursos/NoticiaRelacionados";
import NoticiaTags from "./noticia__recursos/NoticiaTags";
import NoticiaVolver from "./noticia__recursos/NoticiaVolver";
import Link from "next/link";

export const NoticiaComponent = ({ noticia }: any) => {
  const clickHandle = (link) => {
    document.location.href = link;
  };
  return (
    <>
      {noticia.id ? (
        <div className="noticia">
          <NoticiaHeader>
            <NoticiaHeaderContent
              title={noticia.titulo}
              src={host + noticia.imagen}
              alt={noticia.desc_img}
            >
              {noticia.subtitulo}
            </NoticiaHeaderContent>
          </NoticiaHeader>
          <NoticiaLinks>
            {noticia.links
              ? noticia.links.map((link, index) => (
                  <div onClick={() => clickHandle(link)} key={index}>
                    {" "}
                    Enlace {index + 1}{" "}
                  </div>
                ))
              : null}
          </NoticiaLinks>
          <NoticiaBotones>
            <div>
              <button>A+</button>
              <button>A-</button>
            </div>
            <div>
              <button>Descargar</button>
              <button>Imprimir</button>
            </div>
          </NoticiaBotones>
          <NoticiaFechaDatos>
            <p>
              Creado el:
              {`${new Date(noticia.created_at).toLocaleString("es", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}`}
            </p>
            <p>Area: {noticia.area.name}</p>
          </NoticiaFechaDatos>
          <NoticiaContenido>
            <br />
            <div
              className="se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable"
              dangerouslySetInnerHTML={{ __html: noticia.cuerpo }}
            ></div>
          </NoticiaContenido>
          <NoticiaTags>
            {noticia.tags
              ? noticia.tags.map((tag, index) => (
                  <Link key={index} href="#">
                    {tag.name}
                  </Link>
                ))
              : null}
          </NoticiaTags>
          <NoticiaVolver>
            <a href="#">Volver a noticias</a>
          </NoticiaVolver>
          <NoticiaRelacionados>
            <TitleLine>Relacionados</TitleLine>
            <NoticiaPreviewContainer>
              <NoticiaPreview
                title="¿El basquetbol la mejor forma de estar en forma??"
                src="/images/noticias/lorem1.jpg"
                alt="imagen"
                href="#"
              >
                El baloncesto, básquetbol, básketball o simplemente básquet o
                básket, ​ es un deporte de equipo, jugado entre dos conjuntos de
                cinco jugadores cada uno durante cuatro períodos o cuartos de
                diez​ o doce minutos cada uno.
              </NoticiaPreview>
              <NoticiaPreview
                title="¿Problemas en la rodilla?"
                src="/images/noticias/lorem2.jpg"
                alt="imagen"
                href="#"
              >
                La rodilla es una articulación que une el hueso del muslo (o
                fémur) a la parte superior del hueso de la espinilla (o tibia).
                Está compuesta por huesos, cartílagos, músculos, ligamentos y
                tendones.
              </NoticiaPreview>
            </NoticiaPreviewContainer>
          </NoticiaRelacionados>
        </div>
      ) : null}
    </>
  );
};
