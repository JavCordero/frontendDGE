import { useState } from "react";
import LoadingCircles from "../../components/others/LoadingCircles";
import SearchInput from "../../components/others/SearchInput";
import NoticiasFilter from "../../components/others/NoticiasFilter";
import NoticiaPreview from "../../components/noticias/NoticiaPreview";
import NoticiaPreviewContainer from "../../components/noticias/NoticiaPreviewContainer";

const Noticias = () => {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState("Fecha");
  const handdleBuscar = () => {
    console.log("BUSCANDO " + search.trim());
  };

  const handdleFilter = (newFiltro) => {
    if (newFiltro === filtro) {
      return;
    }
    setFiltro(newFiltro);
    console.log("FILTRANDO POR " + newFiltro);
  };
  return (
    <div className="noticias">
      <div className="noticias__head">
        <SearchInput
          placeholder="Buscar Noticia"
          value={search}
          setValue={setSearch}
          fn={handdleBuscar}
        />
        <NoticiasFilter fn={handdleFilter} />
      </div>
      <div className="noticias__line"></div>
      <NoticiaPreviewContainer>
        <NoticiaPreview
          title="¿El basquetbol la mejor forma de estar en forma??"
          src="/images/noticias/lorem1.jpg"
          alt="imagen"
          href="#"
        >
          El baloncesto, básquetbol, básketball o simplemente básquet o básket,
          ​ es un deporte de equipo, jugado entre dos conjuntos de cinco
          jugadores cada uno durante cuatro períodos o cuartos de diez​ o doce
          minutos cada uno.
        </NoticiaPreview>
        <NoticiaPreview
          title="¿Problemas en la rodilla?"
          src="/images/noticias/lorem2.jpg"
          alt="imagen"
          href="#"
        >
          {" "}
          La rodilla es una articulación que une el hueso del muslo (o fémur) a
          la parte superior del hueso de la espinilla (o tibia). Está compuesta
          por huesos, cartílagos, músculos, ligamentos y tendones.
        </NoticiaPreview>
        <NoticiaPreview
          title="UCN vence en el clásico y clasifica al Nacional Universitario"
          src="/images/noticias/lorem3.jpg"
          alt="imagen"
          href="#"
        >
          El seleccionado de la Universidad Católica del Norte clasificó al
          Campeonato Nacional de Fútbol Universitario, tras vencer a su similar
          de la Universidad de Antofagasta en los partidos de ida y vuelta de la
          fase clasificatoria del torneo.
        </NoticiaPreview>
        <NoticiaPreview
          title="¿Quieres correr en la maratón UCN?"
          src="/images/noticias/lorem4.jpg"
          alt="imagen"
          href="#"
        >
          Preparándote para el evento: ¿Qué OBJETIVO te deberías plantear?
          ¿Cuánta actividad física es recomendable realizar?
        </NoticiaPreview>
        <NoticiaPreview
          title="El porque es importante comer verduras"
          src="/images/noticias/lorem5.jpg"
          alt="imagen"
          href="/noticias/noticia"
        >
          Al año los estudiantes universitarios en promedio solo ingieren solo
          un 20% de las verduras recomendadas por la OMS . A continuación te
          presentaremos 5 formas que te ayudarán a presentarles estos alimentos,
          de una forma más apetitosa.
        </NoticiaPreview>
      </NoticiaPreviewContainer>

      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <LoadingCircles />
      </div>
    </div>
  );
};

export default Noticias;
