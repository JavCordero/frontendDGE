/*
Cuarta seccion de noticia, recibe un <p></p> con contenido de fecha y si quieres puedes añadir mas <p></p> ej:
<NoticiaFechaDatos>
  <p>01/01/2025</p>
  <p>Autor: Juan Perez</p>
</NoticiaFechaDatos>
*/

const NoticiaFechaDatos = (props) => (
  <div className="noticia__fecha-datos">{props.children}</div>
);

export default NoticiaFechaDatos;
