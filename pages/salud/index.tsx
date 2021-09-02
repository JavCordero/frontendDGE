import React, { useState, useEffect } from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import { Destacados } from "../../components/index/Destacados";
import { Secciones } from "../../components/salud/Secciones";
import LoadNoticias from "../../hooks/useLoadNoticias";
import { Placeholder } from "rsuite";
import LoadAnuncios from "../../hooks/useLoadAnuncios";
import { Modal } from "react-bootstrap";

const Index = () => {
  const [isLoadNotice, setisLoadNotice] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [anuncioSalud, setAnuncioSalud] = useState({ texto: "" });
  useEffect(() => {
    const noticiasListas = async () => {
      const noticiasArray = await LoadNoticias("salud", "", 1);
      console.log(noticiasArray);
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
            case 1:
              if (anuncio.activo === 1) {
                setAnuncioSalud(anuncio);
                setLgShow(true);
              }
              break;
            default:
              break;
          }
        });
      }
    }
    noticiasListas();
    LoadItem();
  }, []);
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Salud</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      {isLoadNotice ? (
        <Destacados
          noticias={noticias}
          titulo1="Salud"
          titulo2="Destacados"
          path="/salud/"
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
            dangerouslySetInnerHTML={{ __html: anuncioSalud.texto }}
          ></div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Index;
