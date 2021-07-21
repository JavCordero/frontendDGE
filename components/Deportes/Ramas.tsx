import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faRunning,
  faSchool,
  faWarehouse,
  faQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faHubspot } from "@fortawesome/free-brands-svg-icons";

import ScrollMenu from "react-horizontal-scrolling-menu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import Textos from "../../public/deportes/textos/textosRamas";

export const Ramas = () => {
  const [lgShow, setLgShow] = useState(false);
  const [search, setSearch] = useState("");
  const [rama, setRama] = useState("atletismo");

  const list = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
  ];

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  console.log(Textos[rama]);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img className="w-100" src={`${Textos[rama].tumbnail}${i + 1}.jpg`} />
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

  const Menu = (list, search) => {
    const lista = [
      <MDBCol name="atletismo">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("atletismo");
          }}
        >
          <MDBCard className="align-items-center text-center py-2 my-2">
            <img
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
              className="m-3"
            />

            <MDBCardBody>
              <MDBCardTitle>Atletismo</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="ajedrez">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("ajedrez");
          }}
        >
          <MDBCard className="align-items-center text-center py-2 my-2">
            <img
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
              className="m-3"
            />
            <MDBCardBody>
              <MDBCardTitle>Ajedrez</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="aikido">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("aikido");
          }}
        >
          <MDBCard className="align-items-center text-center py-2 my-2">
            <img
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
              className="m-3"
            />
            <MDBCardBody>
              <MDBCardTitle>Aikido</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="basquetbol">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("basquetbol");
          }}
        >
          <MDBCard className="align-items-center text-center py-2 my-2">
            <img
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
              className="m-3"
            />
            <MDBCardBody>
              <MDBCardTitle>Básquetbol</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="balonmano">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Balonmano</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="béisbol">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Béisbol</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="ciclismo">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Ciclismo</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="escalada">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Escalada</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="fútbol">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Fútbol</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="futsal">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Futsal</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="gimnasia artistica">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Gimnasia</MDBCardTitle>
            <MDBCardTitle>Artística</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="halterofilia">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Halterofilia</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="hockey">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Hockey</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="judo">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Judo</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="kárate">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Kárate</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="kendo">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Kendo</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="montañismo">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Montañismo</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="natación">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Natación</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="rugby">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Rugby</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="rugby seven">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Rugby Seven</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="tae kwon do">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Tae Kwon Do</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="tenis">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Tenis</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="tenis de mesa">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Tenis de Mesa</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="vóleibol">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Vóleibol</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol name="vóleibol playa">
        <MDBCard className="align-items-center text-center py-2 my-2">
          <img
            src="/Escudo-UCN-Full-Color.png"
            alt=""
            width="120"
            height="120"
            className="m-3"
          />
          <MDBCardBody>
            <MDBCardTitle>Vóleibol Playa</MDBCardTitle>
            <MDBCardTitle>&nbsp;</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
    ];
    let newList = lista.filter((element) =>
      element.props.name.includes(search.toLowerCase())
    );
    if (newList.length === 0) {
      newList = [
        <MDBCol name="nada">
          <MDBCard className="align-items-center text-center py-2 my-2">
            <img
              src="/Escudo-UCN-Full-Color.png"
              alt=""
              width="120"
              height="120"
              className="m-3"
            />
            <MDBCardBody>
              <MDBCardTitle>No encontrado</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>,
      ];
    }
    return newList;
  };

  const MenuItem = ({ text, selected }) => {
    return (
      <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>
    );
  };

  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

  let menuItems = Menu(list, search);

  const menu = menuItems;
  return (
    <MDBContainer fluid className="w-100">
      <MDBRow>
        <MDBCol>
          <h2 className="mt-5 mb-4">Ramas Deportivas UCN</h2>
        </MDBCol>
        <MDBCol size="4">
          <div className="position-relative">
            <input
              className="form-control mt-5"
              placeholder="Buscar una rama"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FontAwesomeIcon
              className="position-absolute"
              style={{ top: "10%", right: "5%" }}
              icon={faSearch}
              size="2x"
            ></FontAwesomeIcon>
          </div>
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
            {Textos[rama].nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBRow>
            <MDBCol size="4">
              <MDBRow>
                <MDBCol>
                  <img src={Textos[rama].fotodt} alt="" className="w-100" />
                </MDBCol>
                <MDBCol>
                  <MDBRow>Director Técnico:</MDBRow>
                  <MDBRow>{Textos[rama].dt}</MDBRow>
                  <MDBRow>Contacto:</MDBRow>
                  <MDBRow>{Textos[rama].contacto_dt}</MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <h5 className="my-2">Información</h5>
                <div
                  style={{
                    height: "250px",
                    width: "100%",
                    overflow: "auto",
                    textAlign: "justify",
                    padding: "5%",
                  }}
                  className="scrollable"
                >
                  {Textos[rama].texto}
                </div>
              </MDBRow>
            </MDBCol>
            <MDBCol size="8">
              <div className="w-100 p-3">
                <Slider {...settings}>
                  {Textos[rama].fotos.map((foto) => (
                    <div>
                      <img
                        className="w-100"
                        src={foto}
                        style={{
                          maxHeight: "450px",
                          objectFit: "cover",
                          minHeight: "450px",
                        }}
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
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
      />
    </MDBContainer>
  );
};
