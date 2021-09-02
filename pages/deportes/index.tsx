import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Placeholder } from "rsuite";
import { Secciones } from "../../components/Deportes/Secciones";
import { Destacados } from "../../components/index/Destacados";
import LoadAnuncios from "../../hooks/useLoadAnuncios";
import LoadNoticias from "../../hooks/useLoadNoticias";
import { Modal } from "react-bootstrap";

const Deportes = () => {
  const [isLoadNotice, setisLoadNotice] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [anuncioDeportes, setAnuncioDeportes] = useState({ texto: "" });
  useEffect(() => {
    const noticiasListas = async () => {
      const noticiasArray = await LoadNoticias("deportes", "", 1);
      if (noticiasArray.data && noticiasArray.data.length > 0) {
        setisLoadNotice(true);
        setNoticias(noticiasArray.data);
      }
    };
    async function LoadItem() {
      const item = await LoadAnuncios();
      if (Array.isArray(item)) {
        item.forEach((anuncio) => {
          switch (anuncio.area_id) {
            case 2:
              if (anuncio.activo === 1) {
                console.log(anuncio);
                setAnuncioDeportes(anuncio);
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
  }, []);
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Deportes</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      {isLoadNotice ? (
        <Destacados
          noticias={noticias}
          titulo1="Deportes"
          titulo2="Destacados"
          path="/deportes/"
        />
      ) : (
        <Placeholder.Graph active height={450} />
      )}
      <Secciones />
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
            style={{
              height: "100%",
              fontFamily: "Arial",
              fontSize: "16px",
              lineHeight: "1",
            }}
            dangerouslySetInnerHTML={{ __html: anuncioDeportes.texto }}
          ></div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Deportes;
