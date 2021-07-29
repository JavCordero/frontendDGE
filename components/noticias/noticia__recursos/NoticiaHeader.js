/*
Primera seccion de noticia, recibe un contenido e imagen idealmente en 16:9 o muy similar ej:
<NoticiaHeader>
  <ContenidoHeader/>
</NoticiaHeader>+

El contenido que esta dentro no se encuentra estilizado por lo que se pide que se pongan los estilos propios.
*/

const NoticiaLinks = (props) => (
  <div className="noticia__header">{props.children}</div>
);

export default NoticiaLinks;
