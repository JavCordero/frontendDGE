import React, { useState } from "react";
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
import { useEffect } from "react";
import LoadNoticias from "../../hooks/useLoadNoticias";
import removeSpecialCharacters from "../../utils/removeSpecialCharacters";
import { useRouter } from "next/router";

export const NoticiaComponent = ({ noticia }: any) => {
  const router = useRouter();
  const [relacionados, setRelacionados] = useState([]);
  const [loadRelacionados, setLoadRelacionados] = useState(false);

  useEffect(() => {
    relacionados.length = 0;
    const loadData = async () => {
      if (noticia.tags) {
        noticia.tags.forEach(async (tag) => {
          const noticias = await LoadNoticias("", tag.name, 1);
          noticias.data.forEach((element) => {
            if (element.id !== noticia.id) {
              setRelacionados((relacionados) => [element, ...relacionados]);
              setLoadRelacionados(true);
            }
          });
        });
      }
    };
    loadData();
  }, [noticia]);

  const clickHandle = (link) => {
    if (!link.includes("https://") || !link.includes("http://")) {
      link = `https://${link}`;
    }
    window.open(link, "_blank");
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
            {/* en caso de querer implementar funcionalidad botones en noticias descomentar esto */}
            {/* <div>
              <button>A+</button>
              <button>A-</button>
            </div>
            <div>
              <button>Descargar</button>
              <button>Imprimir</button>
            </div> */}
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
              className="se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable sunEditorConfig"
              style={{
                height: "100%",
                fontFamily: "Arial",
                fontSize: "16px",
                lineHeight: "1",
              }}
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
            <p onClick={() => router.back()}>Volver</p>
          </NoticiaVolver>
          <NoticiaRelacionados>
            <TitleLine>Relacionados</TitleLine>
            {console.log(relacionados.length)}
            <NoticiaPreviewContainer>
              {/* el slice es para mostrar maximo 6 elementos en relacionados */}
              {loadRelacionados
                ? relacionados.slice(0, 6).map((noticiaRelacionada, index) => (
                    <NoticiaPreview
                      key={index}
                      title={noticiaRelacionada.titulo}
                      src={host + noticiaRelacionada.imagen}
                      alt={noticiaRelacionada.desc_img}
                      href={{
                        pathname: `/noticias/${removeSpecialCharacters(
                          noticiaRelacionada.titulo
                        )}`,
                        query: { id: noticiaRelacionada.id },
                      }}
                    >
                      {noticiaRelacionada.subtitulo}
                    </NoticiaPreview>
                  ))
                : null}
            </NoticiaPreviewContainer>
          </NoticiaRelacionados>
        </div>
      ) : null}
    </>
  );
};
