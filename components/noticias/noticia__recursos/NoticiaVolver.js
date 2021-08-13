/*
Septima seccion de noticias, recibe un link que lleva a la seccion de noticias ej:
<NoticiaVolver>
  <a href="#">Volver a noticias</a>
</NoticiaVolver>
*/

const NoticiaVolver = (props) => (
  <div className="noticia__volver">{props.children}</div>
);

export default NoticiaVolver;
