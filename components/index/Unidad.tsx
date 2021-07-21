import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faStarOfLife,
  faBasketballBall,
  faGraduationCap,
  faBabyCarriage,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

import ScrollMenu from "react-horizontal-scrolling-menu";
import Link from "next/link";

export const Unidad = () => {
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

  const Menu = (list, selected) => {
    return [
      <MDBCol>
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faGraduationCap}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Beneficios UCN</MDBCardTitle>
            <MDBCardText>Beneficios Externos</MDBCardText>
            <MDBCardText>Beneficios Internos</MDBCardText>
            <MDBCardText>Renovación de beneficios</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center  my-2">
          <FontAwesomeIcon size="6x" icon={faStarOfLife}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Salud</MDBCardTitle>
            <MDBCardText>Solicitud hora online</MDBCardText>
            <MDBCardText>Visado licencias medicas</MDBCardText>
            <MDBCardText>Solicitud hora Psicólogo</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faBasketballBall}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>
              <Link href="/deportes">Deportes</Link>
            </MDBCardTitle>
            <MDBCardText>Deporte Selectivo</MDBCardText>
            <MDBCardText>Deporte interno</MDBCardText>
            <MDBCardText>Actividades complementarias</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faUniversity}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Arte y Cultura</MDBCardTitle>
            <MDBCardText>Link 1</MDBCardText>
            <MDBCardText>Link 2</MDBCardText>
            <MDBCardText>Link 3</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faBabyCarriage}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Jardin Infantil</MDBCardTitle>
            <MDBCardText>Link 1</MDBCardText>
            <MDBCardText>Link 2</MDBCardText>
            <MDBCardText>Link 3</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faUniversalAccess}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Inclusión</MDBCardTitle>
            <MDBCardText>
              {" "}
              <Link href="/">este lleva a home</Link>{" "}
            </MDBCardText>
            <MDBCardText>Link 2</MDBCardText>
            <MDBCardText>Link 3</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
    ];
  };

  const MenuItem = ({ text, selected }) => {
    return (
      <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>
    );
  };

  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

  const selected = "item1";

  let menuItems = Menu(list, selected);

  const menu = menuItems;
  return (
    <MDBContainer fluid className="w-100">
      <h2 className="mt-5 mb-4">Unidad de servicio y apoyo estudiantil UCN</h2>

      <ScrollMenu
        wrapperClass="w-100"
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
      />
    </MDBContainer>
  );
};
