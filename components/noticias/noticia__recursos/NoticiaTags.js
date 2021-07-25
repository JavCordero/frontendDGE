/*
Sexta seccion de noticias, recibe links con el nombre del tag ej:
<NoticiaTags>
  <a href="#">tag1</a>
  <a href="#">tag2</a>
  <a href="#">tag3</a>
</NoticiaTags>
*/

const NoticiaTags = (props) => (
  <div className="noticia__tags">{props.children}</div>
);

export default NoticiaTags;
