/*
Segunda seccion de noticia, recibe links que se mostraran en la seccion de links de interes ej:
<NoticiaLinks>
  <a href="https://www.facebook.com/test">Facebook</a>
  <a href="https://www.twitter.com/test">Twitter</a>
</NoticiaLinks>
*/

const NoticiaLinks = (props) => (
  <div className="noticia__links">
    <div className="noticia__links-content">
      <h5 className="noticia__links-titulo">Links de interes</h5>
      <div className="noticia__links-content-links">{props.children}</div>
    </div>
  </div>
);

export default NoticiaLinks;
