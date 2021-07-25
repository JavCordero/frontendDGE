/*
Primera seccion de noticia, recibe un contenido o imagen idealmente en 16:9 o muy similar ej:
<NoticiaHeader>
  <img/>
</NoticiaHeader>
*/

const NoticiaLinks = (props) => (
  <div className="noticia__header">{props.children}</div>
);

export default NoticiaLinks;
