import { useState } from "react";
import LoadingCircles from "../../components/others/LoadingCircles";
import SearchInput from "../../components/others/SearchInput";
import NoticiaPreview from "../../components/noticias/NoticiaPreview";
import NoticiaPreviewContainer from "../../components/noticias/NoticiaPreviewContainer";
import { useEffect } from "react";
import LoadNoticias from "../../hooks/useLoadNoticias";
import { host } from "../../public/js/host";
import removeSpecialCharacters from "../../utils/removeSpecialCharacters";
/*
Este componente despliega la seccion donde se muestran todas las noticias

*/
const Noticias = () => {
  const [search, setSearch] = useState("");
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
  return (
    <div className="noticias">
      <div className="noticias__head">
        <SearchInput
          placeholder="Buscar Noticia"
          onChange={(e: any) => setSearch(e.target.value)}
          fn={handdleBuscar}
        />
        <select className="noticias__filtro" id="noticiaFiltro">
          <option value="fecha">Por fecha</option>
          <option value="destacado">Destacados</option>
        </select>
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
      </NoticiaPreviewContainer>

      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        {maxPage !== page ? <LoadingCircles /> : null}
      </div>
    </div>
  );
};

export default Noticias;
