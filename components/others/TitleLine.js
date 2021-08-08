/*
Componente que muestra un titulo con estilo en la pagina.

los parametros que recibe son:
  - children: contenido del titulo
  - className: clase personalizada del titulo (opcional)
  - noLine: si se quiere que el titulo no tenga linea (opcional)
*/

const TitleLine = (props) => {
  return (
    <div className={`titleLine ${props.className}`}>
      <h2
        className={`titleLine__title ${
          props.noLine ? "titleLine__title--noLine" : ""
        }`}
      >
        {props.children}
      </h2>
    </div>
  );
};

export default TitleLine;
