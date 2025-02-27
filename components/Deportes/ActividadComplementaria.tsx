import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Slider from "react-slick";
import TextosComplementarios from "../../public/deportes/textos/textosComplementario";
import Image from "next/image";
import TitleLine from "../others/TitleLine";

export const ActividadComplementaria = () => {
  const [lgShow, setLgShow] = useState(false);
  const [rama, setRama] = useState("escuelas");

  const list = [{ name: "item1" }, { name: "item2" }, { name: "item3" }];

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  console.log(TextosComplementarios[rama]);

  const settings = {
    customPaging: function page(i) {
      return (
        <a>
          <Image
            className="w-100"
            src={
              (TextosComplementarios[rama].tumbnail + (i + 1) + ".jpg") as any
            }
            alt="imagen"
            layout="fill"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Menu = (list) => {
    const lista = [
      <MDBCol name="escuelas" key={0}>
        <div
          onClick={() => {
            setLgShow(true);
            setRama("escuelas");
          }}
        >
          <MDBCard className="align-items-center text-center py-2 my-2">
            <Image
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
            />

            <MDBCardBody>
              <MDBCardTitle>Escuelas Infantiles</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="cursos" key={1}>
        <div
          onClick={() => {
            setLgShow(true);
            setRama("cursos");
          }}
        >
          <MDBCard className="align-items-center text-center py-2 my-2">
            <Image
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
            />
            <MDBCardBody>
              <MDBCardTitle>Cursos y Talleres</MDBCardTitle>
              <MDBCardTitle>Adultos</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="recreativo" key={2}>
        <div
          onClick={() => {
            setLgShow(true);
            setRama("recreativo");
          }}
        >
          <MDBCard className="align-items-center text-center py-2 my-2">
            <Image
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
            />
            <MDBCardBody>
              <MDBCardTitle>Recreativo Infantil y</MDBCardTitle>
              <MDBCardTitle>Competición Adultos</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
    ];

    return lista;
  };

  const MenuItem = ({ text, selected }) => {
    return (
      <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>
    );
  };

  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

  let menuItems = Menu(list);

  const menu = menuItems;
  return (
    <MDBContainer fluid className="w-100">
      <MDBRow>
        <MDBCol>
          <TitleLine className="mb-2">Actividades</TitleLine>
        </MDBCol>
        <MDBCol size="4"></MDBCol>
      </MDBRow>

      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg text-center">
            {TextosComplementarios[rama].nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBRow>
            <MDBCol size="12" md="4">
              <MDBRow>
                <h5 className="my-2">Información</h5>
                <div
                  style={{
                    height: "450px",
                    width: "100%",
                    overflow: "auto",
                    textAlign: "justify",
                    padding: "5%",
                  }}
                  className="scrollable"
                >
                  {TextosComplementarios[rama].texto}
                </div>
              </MDBRow>
            </MDBCol>
            <MDBCol size="12" md="8">
              <div className="w-100 p-3">
                <Slider {...settings}>
                  {TextosComplementarios[rama].fotos.map((foto, index) => (
                    <div key={index}>
                      <Image
                        className="w-100"
                        src={foto}
                        alt="foto"
                        width="600"
                        height="400"
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </MDBCol>
          </MDBRow>
        </Modal.Body>
      </Modal>

      <ScrollMenu
        wrapperClass="w-100"
        data={menu}
        // arrowLeft={ArrowLeft}
        // arrowRight={ArrowRight}
      />
    </MDBContainer>
  );
};
