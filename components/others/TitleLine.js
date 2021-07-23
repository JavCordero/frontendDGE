/*
Componente que muestra un titulo con estilo en la pagina.

los parametros que recibe son:
  - children: contenido del titulo
  - className: clase personalizada del titulo (opcional)
*/

const TitleLine = (props) => {
  return (
    <div className={`titleLine ${props.className}`}>
      <h2 className="titleLine__title">{props.children}</h2>
      <div className="titleLine__line"></div>
    </div>
  );
};

export default TitleLine;
