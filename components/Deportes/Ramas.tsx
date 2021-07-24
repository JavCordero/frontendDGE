import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import ScrollMenu from "react-horizontal-scrolling-menu";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import Textos from "../../public/deportes/textos/textosRamas";

export const Ramas = () => {
  const [lgShow, setLgShow] = useState(false);
  const [search, setSearch] = useState("");
  const [rama, setRama] = useState("atletismo");

  const toggleShow = () => setLgShow(!lgShow);

  const list = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
    { name: "item7" },
  ];

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

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
        <div
          onClick={() => {
            setLgShow(true);
            setRama("balonmano");
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
              <MDBCardTitle>Balonmano</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="béisbol">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("beisbol");
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
              <MDBCardTitle>Béisbol</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="ciclismo">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("ciclismo");
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
              <MDBCardTitle>Ciclismo</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="escalada">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("escalada");
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
              <MDBCardTitle>Escalada</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="fútbol">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("futbol");
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
              <MDBCardTitle>Fútbol</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="futsal">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("futsal");
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
              <MDBCardTitle>Futsal</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="gimnasia artistica">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("gimnasia");
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
              <MDBCardTitle>Gimnasia</MDBCardTitle>
              <MDBCardTitle>Artística</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="halterofilia">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("halterofilia");
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
              <MDBCardTitle>Halterofilia</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="hockey">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("hockey");
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
              <MDBCardTitle>Hockey</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="judo">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("judo");
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
              <MDBCardTitle>Judo</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="kárate">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("karate");
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
              <MDBCardTitle>Kárate</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="kendo">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("kendo");
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
              <MDBCardTitle>Kendo</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="montañismo">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("montanismo");
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
              <MDBCardTitle>Montañismo</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="natación">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("natacion");
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
              <MDBCardTitle>Natación</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="rugby">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("rugby");
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
              <MDBCardTitle>Rugby</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="rugby seven">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("rugbysev");
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
              <MDBCardTitle>Rugby Seven</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="tae kwon do">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("taekwondo");
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
              <MDBCardTitle>Tae Kwon Do</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="tenis">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("tenis");
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
              <MDBCardTitle>Tenis</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="tenis de mesa">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("tenismesa");
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
              <MDBCardTitle>Tenis de Mesa</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="vóleibol">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("voleibol");
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
              <MDBCardTitle>Vóleibol</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>,
      <MDBCol name="vóleibol playa">
        <div
          onClick={() => {
            setLgShow(true);
            setRama("voleibolplaya");
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
              <MDBCardTitle>Vóleibol Playa</MDBCardTitle>
              <MDBCardTitle>&nbsp;</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
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
