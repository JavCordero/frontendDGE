import React from "react";
import Link from "next/link";
import Image from "next/image";
/*
Este componente se usa para mostar la noticia en una ventana de preview (relacionados, seccion de noticias, etc.)

Los parametros son:
    -src: la imagen de la noticia
    -alt: la descripción de la imagen
    -title: el titulo de la noticia
    -href: el link al que apunta la noticia

    Ademas en el children (entre la etiqueta) ira la descripcion que se mostrará en la ventana de preview <>children</>

*/

const NoticiaPreview = (props) => {
  return (
    <div className="noticiaPreview__noticia">
      <div className="noticiaPreview__contenido-imagen">
        <Link passHref href={props.href ? props.href : "#"}>
          <img
            src={props.src ? props.src : "/images/noImage.jpg"}
            alt={props.alt ? props.alt : "imagen"}
            className="noticiaPreview__imagen hoverable"
            width="300"
            height="200"
            objectFit="cover"
          />
        </Link>
      </div>
      <div className="noticiaPreview__contenido-texto">
        <h2 className="noticiaPreview__titulo">
          {props.title ? props.title : "Título no disponible"}
        </h2>
        <p className="noticiaPreview__descripcion">
          {props.children ? props.children : "Descripción no disponible"}
        </p>
      </div>
    </div>
  );
};

export default NoticiaPreview;
