import { useState } from "react";
import LoadingCircles from "../../components/others/LoadingCircles";
import SearchInput from "../../components/others/SearchInput";
import NoticiaPreview from "../../components/noticias/NoticiaPreview";
import NoticiaPreviewContainer from "../../components/noticias/NoticiaPreviewContainer";
import { useEffect } from "react";
import LoadNoticias from "../../hooks/useLoadNoticias";
import { host } from "../../public/js/host";
import removeSpecialCharacters from "../../utils/removeSpecialCharacters";
import styled from "@emotion/styled";
/*
Este componente despliega la seccion donde se muestran todas las noticias

*/
const Noticias = () => {
  const [search, setSearch] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [loadNoticias, setLoadNoticias] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [disableButton, setDisableButton] = useState(false);

  const ButtonVerMas = styled.button`
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    color: #000;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #e5e5e5;
      color: #000;
    }
  `;

  const cargarNoticias = async (pag, searc, noti) => {
    const noticiasArray = await LoadNoticias("", "", pag, searc);
    if (noticiasArray.data && noticiasArray.data.length > 0) {
      console.log(noticiasArray.data);
      setNoticias([...noti, ...noticiasArray.data]);
      setPage(pag);
    } else {
      setNoticias([]);
    }

    setMaxPage(noticiasArray.last_page);
    setLoadNoticias(true);
  };

  const handdleNextPage = () => {
    cargarNoticias(page + 1, search, noticias);
  };

  useEffect(() => {
    cargarNoticias(1, "", []);
  }, []);

  const busquedaPorTitulo = () => {
    setLoadNoticias(false);
    setMaxPage(1);
    cargarNoticias(1, search, []);
  };

  return (
    <div className="noticias">
      <div className="noticias__head">
        <SearchInput
          placeholder="Buscar Noticia por titulo"
          onChange={(e: any) => {
            const busqueda = e.target.value;
            return setSearch(busqueda);
          }}
          fn={busquedaPorTitulo}
        />
        {!loadNoticias && <LoadingCircles />}
        {/* en caso de querer implementar funcionalidad filtro, descomentar lo siguiente: */}
        {/* <select className="noticias__filtro" id="noticiaFiltro">
          <option value="fecha">Por fecha</option>
          <option value="destacado">Destacados</option>
        </select> */}
      </div>
      <div className="noticias__line"></div>
      <NoticiaPreviewContainer>
        {loadNoticias ? (
          noticias.length > 0 ? (
            noticias.map((noticia, index) => (
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
          ) : (
            <p>Sin coincidencias.</p>
          )
        ) : null}
      </NoticiaPreviewContainer>
      {maxPage !== page && (
        <div className="d-flex justify-content-center align-items-center mt-1 mb-5">
          <ButtonVerMas
            style={{ display: disableButton ? "none" : "unset" }}
            onClick={handdleNextPage}
          >
            Ver más...
          </ButtonVerMas>
        </div>
      )}
    </div>
  );
};

export default Noticias;
