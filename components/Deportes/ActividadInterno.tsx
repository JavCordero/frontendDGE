import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import ScrollMenu from "react-horizontal-scrolling-menu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import TextosInternos from "../../public/deportes/textos/textosInternos";
import TitleLine from "../others/TitleLine";

export const ActividadInterno = () => {
  const [lgShow, setLgShow] = useState(false);
  const [rama, setRama] = useState("intercarrera");

  const list = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
  ];

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  console.log(TextosInternos[rama]);

  const settings = {
    customPaging: function page(i) {
      return (
        <a>
          <Image
            className="w-100"
            src={(TextosInternos[rama].tumbnail + (i + 1) + ".jpg") as any}
            alt="foto"
            width="120"
            height="120"
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
      <MDBCol name="intercarrera" key={0}>
        <div
          onClick={() => {
            setLgShow(true);
            setRama("intercarrera");
          }}
        >
          <MDBCard className="align-items-center text-center px-1 pt-2 my-2">
            <Image
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
            />

            <MDBCardBody>
              <MDBCardTitle>Juegos Deportivos</MDBCardTitle>
              <MDBCardTitle>Intercarrera</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="aniversario" key={1}>
        <div
          onClick={() => {
            setLgShow(true);
            setRama("aniversario");
          }}
        >
          <MDBCard className="align-items-center text-center px-2 pt-2 my-2">
            <Image
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
            />
            <MDBCardBody>
              <MDBCardTitle>Aniversario</MDBCardTitle>
              <MDBCardTitle>UCN</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="fiestas" key={2}>
        <div
          onClick={() => {
            setLgShow(true);
            setRama("fiestas");
          }}
        >
          <MDBCard className="align-items-center text-center px-1 pt-2 my-2">
            <Image
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
            />
            <MDBCardBody>
              <MDBCardTitle>Fiestas Patrias</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="actividades" key={3}>
        <div
          onClick={() => {
            setLgShow(true);
            setRama("actividades");
          }}
        >
          <MDBCard className="align-items-center text-center px-2 pt-2 my-2">
            <Image
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
            />
            <MDBCardBody>
              <MDBCardTitle>Actividades</MDBCardTitle>
              <MDBCardTitle>Masivas</MDBCardTitle>
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
          <TitleLine className="mb-2">Ramas Deporte Interno</TitleLine>
        </MDBCol>
      </MDBRow>

      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg text-center">
            {TextosInternos[rama].nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBRow>
            <MDBCol size="4">
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
                  {TextosInternos[rama].texto}
                </div>
              </MDBRow>
            </MDBCol>
            <MDBCol size="8">
              <div className="w-100 p-3">
                <Slider {...settings}>
                  {TextosInternos[rama].fotos.map((foto, index) => (
                    <div key={index}>
                      <Image
                        className="w-100"
                        src={foto}
                        alt="..."
                        width="1000"
                        height="600"
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
