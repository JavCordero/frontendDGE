import React from "react";

const noticias = () => {
  return (
    <div className="noticias">
      <div className="noticias__head">
        <div className="noticias__buscar"></div>
        <div className="noticias__filtrar"></div>
      </div>
      <div className="noticias__line"></div>
      <div className="noticias__noticia">
        <div className="noticias__contenido-imagen">
          <div className="noticias__imagen" />
        </div>
        <div className="noticias__contenido-texto">
          <h2 className="noticias__titulo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum
            sequi non! Eligendi culpa officiis et, nesciunt.
          </h2>
          <p className="noticias__descripcion">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In veniam
            ad, natus accusantium consequuntur qui pariatur modi voluptatem
            ipsam deserunt ipsum temporibus molestias, fuga ab, maiores
            recusandae nisi! Fugiat, obcaecati? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. In veniam ad, natus accusantium
            consequuntur qui pariatur modi voluptatem ipsam deserunt ipsum
            temporibus molestias, fuga ab, maiores recusandae nisi! Fugiat,
            obcaecati?
            <a href="#">(...)</a>
          </p>
        </div>
      </div>
      
      <div className="noticias__noticia">
        <div className="noticias__contenido-imagen">
          <div className="noticias__imagen" />
        </div>
        <div className="noticias__contenido-texto">
          <h2 className="noticias__titulo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum
          </h2>
          <p className="noticias__descripcion">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In veniam
            ad, natus accusantium consequuntur qui pariatur modi voluptatem fuga
            ab, maiores recusandae nisi! Fugiat, obcaecati?
            <a href="#">(...)</a>
          </p>
        </div>
      </div>

      <div className="noticias__noticia">
        <div className="noticias__contenido-imagen">
          <div className="noticias__imagen" />
        </div>
        <div className="noticias__contenido-texto">
          <h2 className="noticias__titulo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eligendi.
          </h2>
          <p className="noticias__descripcion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto deleniti deserunt libero suscipit itaque.
            <a href="#">(...)</a>
          </p>
        </div>
      </div>

    </div>
  );
};

export default noticias;
