import React from "react";
import NoticiaPreview from "../../components/noticias/NoticiaPreview";
import NoticiaPreviewContainer from "../../components/noticias/NoticiaPreviewContainer";
import TitleLine from "../../components/others/TitleLine";
import NoticiaLinks from "../../components/noticias/noticia__recursos/NoticiaLinks";
import NoticiaHeader from "../../components/noticias/noticia__recursos/NoticiaHeader";
import NoticiaHeaderContent from "../../components/noticias/noticia__recursos/NoticiaHeaderContent";
import NoticiaBotones from "../../components/noticias/noticia__recursos/NoticiaBotones";
import NoticiaFechaDatos from "../../components/noticias/noticia__recursos/NoticiaFechaDatos";
import NoticiaContenido from "../../components/noticias/noticia__recursos/NoticiaContenido";
import NoticiaTags from "../../components/noticias/noticia__recursos/NoticiaTags";
import NoticiaVolver from "../../components/noticias/noticia__recursos/NoticiaVolver";
import NoticiaRelacionados from "../../components/noticias/noticia__recursos/NoticiaRelacionados";

/*

Este componente renderiza la noticia y para eso utiliza los componentes de components/noticias/noticia__recursos/, en los archivos respectivos
se encontrara mas informacion de cada componente y como formar la noticia apartir de estos.
*/

const noticia = () => {
  return (
    <div className="noticia">
      <NoticiaHeader>
        <NoticiaHeaderContent
          title="El porque es importante comer verduras"
          src="/images/noticias/lorem5.jpg"
          alt="imagen comida"
        >
          Al año los estudiantes universitarios en promedio solo ingieren solo
          un 20% de las verduras recomendadas por la OMS . A continuación te
          presentaremos 5 formas que te ayudarán a presentarles estos alimentos,
          de una forma más apetitosa.
        </NoticiaHeaderContent>
      </NoticiaHeader>
      <NoticiaLinks>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
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
        <p>20/Abril/2021</p>
      </NoticiaFechaDatos>
      <NoticiaContenido>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          iusto, culpa sequi alias ipsa consequuntur facilis cumque eos nihil
          eveniet omnis molestiae aliquam. Veniam quibusdam praesentium fuga
          veritatis! Vel, quis.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          iusto, culpa sequi alias ipsa consequuntur facilis cumque eos nihil
          eveniet omnis molestiae aliquam. Veniam quibusdam praesentium fuga
          veritatis! Vel, quis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Officiis pariatur doloremque quos commodi omnis
          quaerat voluptate porro. Perspiciatis, nulla optio. Omnis nesciunt
          neque, autem officiis ducimus sequi pariatur consequuntur alias?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          iusto, culpa sequi alias ipsa consequuntur facilis cumque eos nihil
          eveniet omnis molestiae aliquam. Veniam quibusdam praesentium fuga
          veritatis! Vel, quis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis, sunt a? Repudiandae dolorum at tempora
          illum aliquam veritatis voluptate debitis vel explicabo neque!
          Provident nihil quis dolorum, tempore doloribus possimus. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Ullam quo nemo, sapiente
          obcaecati quod nulla a. Eum at aspernatur sunt vitae doloribus.
          Similique sequi unde est, asperiores vel hic qui.
        </p>
      </NoticiaContenido>
      <NoticiaTags>
        <a href="#">noticia</a>
        <a href="#">evento</a>
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
            cinco jugadores cada uno durante cuatro períodos o cuartos de diez​
            o doce minutos cada uno.
          </NoticiaPreview>
          <NoticiaPreview
            title="¿Problemas en la rodilla?"
            src="/images/noticias/lorem2.jpg"
            alt="imagen"
            href="#"
          >
            La rodilla es una articulación que une el hueso del muslo (o fémur)
            a la parte superior del hueso de la espinilla (o tibia). Está
            compuesta por huesos, cartílagos, músculos, ligamentos y tendones.
          </NoticiaPreview>
        </NoticiaPreviewContainer>
      </NoticiaRelacionados>
    </div>
  );
};

export default noticia;
