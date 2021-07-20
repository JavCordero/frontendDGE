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
  faUser,
  faRunning,
  faSchool,
  faWarehouse,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { faHubspot } from "@fortawesome/free-brands-svg-icons";

import ScrollMenu from "react-horizontal-scrolling-menu";
import Link from "next/link";
import Image from "next/image";

export const Secciones = () => {
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
        <MDBCard className="align-items-center text-center py-2 my-2">
          <FontAwesomeIcon size="3x" icon={faUser}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Nuestro Equipo</MDBCardTitle>
            <MDBCardTitle>&nbsp; </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center  py-2 my-2">
          <FontAwesomeIcon size="3x" icon={faRunning}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Deporte Selectivo</MDBCardTitle>
            <MDBCardTitle>&nbsp; </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center py-2 my-2">
          <FontAwesomeIcon size="3x" icon={faHubspot}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Deporte Interno</MDBCardTitle>
            <MDBCardTitle>&nbsp; </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center py-2 my-2">
          <FontAwesomeIcon size="3x" icon={faSchool}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Actividades</MDBCardTitle>
            <MDBCardTitle>Complementarias</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center py-2 my-2">
          <FontAwesomeIcon size="3x" icon={faWarehouse}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Infraestructura</MDBCardTitle>
            <MDBCardTitle>Deportiva</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol>
        <MDBCard className="align-items-center text-center py-2 my-2">
          <FontAwesomeIcon size="3x" icon={faQuestion}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>Preguntas</MDBCardTitle>
            <MDBCardTitle>Frecuentes</MDBCardTitle>
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
      <h2 className="mt-5 mb-4">Secciones</h2>

      <ScrollMenu
        wrapperClass="w-100"
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
      />
    </MDBContainer>
  );
};
