/*
Octava seccion de noticias (y ultima seccion), recibe contenido con noticias relacionadas, 
se recomienda utilizar los componentes TitleLine, NoticiaPreviewContainer y NoticiaPreview.
Ej:
<NoticiaRelacionados>
  <TitleLine>Relacionados</TitleLine>
  <NoticiaPreviewContainer>
    <NoticiaPreview
      title="¿El basquetbol la mejor forma de estar en forma??"
      src="/images/noticias/lorem1.jpg"
    >
      El baloncesto, básquetbol, básketball o simplemente básquet o
      básket, ​ es un deporte de equipo, jugado entre dos conjuntos de
      cinco jugadores cada uno durante cuatro períodos o cuartos de diez​
      o doce minutos cada uno.
    </NoticiaPreview>
    <NoticiaPreview
      title="¿Problemas en la rodilla?"
      src="/images/noticias/lorem2.jpg"
    >
      La rodilla es una articulación que une el hueso del muslo (o fémur)
      a la parte superior del hueso de la espinilla (o tibia). Está
      compuesta por huesos, cartílagos, músculos, ligamentos y tendones.
    </NoticiaPreview>
  </NoticiaPreviewContainer>
</NoticiaRelacionados>
*/

const NoticiaRelacionados = (props) => (
  <div className="noticia__relacionados">{props.children}</div>
);

export default NoticiaRelacionados;
