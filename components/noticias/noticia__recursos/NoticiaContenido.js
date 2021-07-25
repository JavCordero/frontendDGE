/*Quinta seccion de noticia, recibe el contenido de la noticia ej:
  <NoticiaContenido>
    <h2>Noticia</h2>  
    <img src="http://placehold.it/350x150" />
    <p>texto</p>
    <h2>Noticia2</h2>  
    <img src="http://placehold.it/350x155" />
    <p>texto2</p>
    (...)
  </NoticiaContenido>

  (el contenido no esta estilizado por lo que se espera ingrese con estilo)
*/

const NoticiaContenido = (props) => (
  <div className="noticia__content">{props.children}</div>
);

export default NoticiaContenido;
