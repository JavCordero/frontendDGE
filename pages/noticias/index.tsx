import { useState } from "react";
import LoadingCircles from "../../components/others/LoadingCircles";
import SearchInput from "../../components/others/SearchInput";
import NoticiasFilter from "../../components/others/NoticiasFilter";
import NoticiaPreview from "../../components/noticias/NoticiaPreview";
import NoticiaPreviewContainer from "../../components/noticias/NoticiaPreviewContainer";
import { useEffect } from "react";
import LoadNoticias from "../../hooks/useLoadNoticias";
import { host } from "../../public/js/host";
import removeSpecialCharacters from "../../utils/removeSpecialCharacters";

const Noticias = () => {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState("Fecha");
  const [noticias, setNoticias] = useState([]);
  const [loadNoticias, setLoadNoticias] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const y = window.pageYOffset;
      const maxY =
        window.document.documentElement.scrollHeight -
        window.document.documentElement.clientHeight;
      if (y === maxY) {
        if (page <= maxPage) {
          setPage(page + 1);
        }
      }
    });
  }, []);

  useEffect(() => {
    const noticiasListas = async () => {
      const noticiasArray = await LoadNoticias("", "", page);
      console.log(noticiasArray);
      if (noticiasArray.data && noticiasArray.data.length > 0) {
        noticiasArray.data.forEach((noticia) => {
          setNoticias((noticias) => [...noticias, noticia]);
        });
      }
      setMaxPage(noticiasArray.last_page);
      setLoadNoticias(true);
    };
    noticiasListas();
  }, [page]);
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
          onChange={setSearch}
          fn={handdleBuscar}
        />
        <NoticiasFilter fn={handdleFilter} />
      </div>
      <div className="noticias__line"></div>
      <NoticiaPreviewContainer>
        {loadNoticias
          ? noticias.map((noticia, index) => (
              <NoticiaPreview
                key={index}
                title={noticia.titulo}
                src={host + noticia.imagen}
                alt={noticia.desc_img}
                href={{
                  pathname: `/noticias/${removeSpecialCharacters(
                    noticia.titulo
                  )}`,
                  query: { id: noticia.id },
                }}
              >
                {noticia.subtitulo}
              </NoticiaPreview>
            ))
          : null}
        {/* <NoticiaPreview
          title="¿El basquetbol la mejor forma de estar en forma??"
          src="/images/noticias/lorem1.jpg"
          alt="imagen"
          href="#"
        >
          El baloncesto, básquetbol, básketball o simplemente básquet o básket,
          ​ es un deporte de equipo, jugado entre dos conjuntos de cinco
          jugadores cada uno durante cuatro períodos o cuartos de diez​ o doce
          minutos cada uno.
        </NoticiaPreview> */}
      </NoticiaPreviewContainer>

      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        {maxPage !== page ? <LoadingCircles /> : null}
      </div>
    </div>
  );
};

export default Noticias;
