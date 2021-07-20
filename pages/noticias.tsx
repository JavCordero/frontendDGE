import React from "react";
import LoadingCircles from "../components/others/LoadingCircles";

const noticias = () => {
  const handdleBuscar = () => {
    console.log("BUSCANDO");
  }
  return (
    <div className="noticias">
      <div className="noticias__head">
        <div className="noticias__buscar">
          <input
            id="noticias__buscar"
            type="text"
            placeholder="Buscar Noticia"
          />
          <label htmlFor="noticias__buscar" className="fas fa-search" onClick={handdleBuscar}/>
        </div>    
        <div className="noticias__filtrar"></div>
      </div>
      <div className="noticias__line"></div>
      <div className="noticias__noticia">
        <div className="noticias__contenido-imagen">
          <img
            src="/images/noticias/lorem1.jpg"
            alt="basquet"
            className="noticias__imagen hoverable"
          />
        </div>
        <div className="noticias__contenido-texto">
          <h2 className="noticias__titulo">
            ¿El basquetbol la mejor forma de estar en forma?
          </h2>
          <p className="noticias__descripcion">
            El baloncesto, básquetbol, básketball o simplemente básquet o
            básket, ​ es un deporte de equipo, jugado entre dos conjuntos de
            cinco jugadores cada uno durante cuatro períodos o cuartos de diez​
            o doce minutos cada uno.
            <a href="#">(...)</a>
          </p>
        </div>
      </div>

      <div className="noticias__noticia">
        <div className="noticias__contenido-imagen">
          <img
            src="/images/noticias/lorem2.jpg"
            alt="doctor"
            className="noticias__imagen hoverable"
          />
        </div>
        <div className="noticias__contenido-texto">
          <h2 className="noticias__titulo">¿Problemas en la rodilla?</h2>
          <p className="noticias__descripcion">
            La rodilla es una articulación que une el hueso del muslo (o fémur)
            a la parte superior del hueso de la espinilla (o tibia). Está
            compuesta por huesos, cartílagos, músculos, ligamentos y tendones.
            <a href="#">(...)</a>
          </p>
        </div>
      </div>

      <div className="noticias__noticia">
        <div className="noticias__contenido-imagen">
          <img
            src="/images/noticias/lorem3.jpg"
            alt="futbol"
            className="noticias__imagen hoverable"
          />
        </div>
        <div className="noticias__contenido-texto">
          <h2 className="noticias__titulo">
            UCN vence en el clásico y clasifica al Nacional Universitario
          </h2>
          <p className="noticias__descripcion">
            El seleccionado de la Universidad Católica del Norte clasificó al
            Campeonato Nacional de Fútbol Universitario, tras vencer a su
            similar de la Universidad de Antofagasta en los partidos de ida y
            vuelta de la fase clasificatoria del torneo.
            <a href="#">(...)</a>
          </p>
        </div>
      </div>
      <div className="noticias__noticia">
        <div className="noticias__contenido-imagen">
          <img
            src="/images/noticias/lorem4.jpg"
            alt="evento"
            className="noticias__imagen hoverable"
          />
        </div>
        <div className="noticias__contenido-texto">
          <h2 className="noticias__titulo">
            ¿Quieres correr en la maratón UCN?
          </h2>
          <p className="noticias__descripcion">
            Preparándote para el evento: ¿Qué OBJETIVO te deberías plantear?
            ¿Cuánta actividad física es recomendable realizar?
            <a href="#">(...)</a>
          </p>
        </div>
      </div>
      <div className="noticias__noticia">
        <div className="noticias__contenido-imagen">
          <img
            src="/images/noticias/lorem5.jpg"
            alt="comida"
            className="noticias__imagen hoverable"
          />
        </div>
        <div className="noticias__contenido-texto">
          <h2 className="noticias__titulo">
            El porque es importante comer verduras
          </h2>
          <p className="noticias__descripcion">
            Al año los estudiantes universitarios en promedio solo ingieren solo
            un 20% de las verduras recomendadas por la OMS . A continuación te
            presentaremos 5 formas que te ayudarán a presentarles estos
            alimentos, de una forma más apetitosa.
            <a href="#">(...)</a>
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <LoadingCircles />
      </div>
    </div>
  );
};

export default noticias;
