import { useState } from "react";
import Link from "next/link";

/*
Este componente es un asistente que se muestra en la esquina derecha inferior de la página.
es un avatar que tiene una opcion para cerrar y otra para ir hacia un link.
los parametros que recibe son:
- src: url de la imagen del avatar
- href: url del link del avatar (hacia donde lleva su link)
- children: texto que se muestra en el link
*/

const Asistente = (props: any) => {
  const [asistente, setAsistente] = useState(true);
  return (
    <div
      className={`asistente ${props.className} ${
        asistente ? "" : "asistente--off"
      }`}
    >
      <img
        className="asistente__avatar"
        src={props.src}
        alt="imagen asistente"
      />
      <img
        className="asistente__dialogo"
        src="/salud/dialogo.png"
        alt="imagen de asistente"
      />
      <div className="asistente__dialogo-texto">
        <Link href={props.href ? props.href : "/"}>
          <p>
            {props.children
              ? props.children
              : "Tienes preguntas, has clic acá…"}
          </p>
        </Link>
      </div>
      <div className="asistente__colider-inferior"></div>
      <i
        className="fas fa-times-circle asistente__cerrar"
        onClick={() => setAsistente(false)}
      ></i>
    </div>
  );
};

export default Asistente;