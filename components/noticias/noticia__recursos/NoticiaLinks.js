const NoticiaLinks = (props) => (
  <div className="noticia__links">
    <div className="noticia__links-content">
      <h5 className="noticia__links-titulo">Links de interes</h5>
      <div className="noticia__links-content-links">{props.children}</div>
    </div>
  </div>
);

export default NoticiaLinks;
