import React, { useEffect, useState } from "react";
import { Placeholder } from "rsuite";
import { Calendario } from "../components/index/Calendario";
import { Categoria } from "../components/index/Categoria";
import { Destacados } from "../components/index/Destacados";
import { Direccion } from "../components/index/Direccion";
import { Unidad } from "../components/index/Unidad";
import LoadNoticias from "../hooks/useLoadNoticias";
import LoadTags from "../hooks/useLoadTags";
import { Modal } from "react-bootstrap";
import LoadAnuncios from "../hooks/useLoadAnuncios";

export default function Home() {
  const [isLoadNotice, setisLoadNotice] = useState(false);
  const [isLoadTags, setisLoadTags] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [tags, setTags] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [anuncioIndex, setAnuncioIndex] = useState({ texto: "" });

  useEffect(() => {
    const noticiasListas = async () => {
      const noticiasArray = await LoadNoticias("", "", 1);
      console.log(noticiasArray);
      if (noticiasArray.data && noticiasArray.data.length > 0) {
        setisLoadNotice(true);
        setNoticias(noticiasArray.data);
      }
    };
    const tagListos = async () => {
      const tagsArray = await LoadTags();
      if (tagsArray.length > 0) {
        setisLoadTags(true);
        setTags(tagsArray);
      }
    };

    async function LoadItem() {
      const item = await LoadAnuncios();
      if (Array.isArray(item)) {
        item.forEach((anuncio) => {
          switch (anuncio.area_id) {
            case null:
              if (anuncio.activo === 1) {
                setAnuncioIndex(anuncio);
                setLgShow(true);
              }
              break;
            default:
              break;
          }
        });
      }
    }
    LoadItem();
    noticiasListas();
    tagListos();
  }, []);
  return (
    <>
      {isLoadNotice ? (
        <Destacados
          titulo1="Destacados"
          titulo2="Nuestras Redes"
          noticias={noticias}
          path="/"
        />
      ) : (
        <Placeholder.Graph active height={450} />
      )}

      <Unidad />
      <Direccion />
      <Calendario />
      {isLoadTags ? (
        <Categoria tags={tags} />
      ) : (
        <Placeholder.Graph active height={450} />
      )}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div
            className="se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable py-0"
            dangerouslySetInnerHTML={{ __html: anuncioIndex.texto }}
          ></div>
        </Modal.Body>
      </Modal>
    </>
  );
}
