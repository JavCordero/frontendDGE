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
import TitleLine from "../others/TitleLine";

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
        <Link href="/deportes/nosotros">
          <MDBCard className="align-items-center text-center py-2 my-2">
            <FontAwesomeIcon size="3x" icon={faUser}></FontAwesomeIcon>
            <MDBCardBody>
              <MDBCardTitle>Nuestro Equipo</MDBCardTitle>
              <MDBCardTitle>&nbsp; </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </MDBCol>,
      <MDBCol>
        <Link href="/deportes/deporteselectivo">
          <MDBCard className="align-items-center text-center  py-2 my-2">
            <FontAwesomeIcon size="3x" icon={faRunning}></FontAwesomeIcon>
            <MDBCardBody>
              <MDBCardTitle>Deporte Selectivo</MDBCardTitle>
              <MDBCardTitle>&nbsp; </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </MDBCol>,
      <MDBCol>
        <Link href="/deportes/deporteinterno">
          <MDBCard className="align-items-center text-center py-2 my-2">
            <FontAwesomeIcon size="3x" icon={faHubspot}></FontAwesomeIcon>
            <MDBCardBody>
              <MDBCardTitle>Deporte Interno</MDBCardTitle>
              <MDBCardTitle>&nbsp; </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </MDBCol>,
      <MDBCol>
        <Link href="/deportes/actividadescomplementarias">
          <MDBCard className="align-items-center text-center py-2 my-2">
            <FontAwesomeIcon size="3x" icon={faSchool}></FontAwesomeIcon>
            <MDBCardBody>
              <MDBCardTitle>Actividades</MDBCardTitle>
              <MDBCardTitle>Complementarias</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </MDBCol>,
      <MDBCol>
        <Link href="/deportes/infraestructura">
          <MDBCard className="align-items-center text-center py-2 my-2">
            <FontAwesomeIcon size="3x" icon={faWarehouse}></FontAwesomeIcon>
            <MDBCardBody>
              <MDBCardTitle>Infraestructura</MDBCardTitle>
              <MDBCardTitle>Deportiva</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Link>
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
    <MDBContainer fluid className="w-100 p-0 pb-5 bg-light shadow-5 rounded">
      <TitleLine>Secciones</TitleLine>

      <ScrollMenu
        wrapperClass="w-100"
        data={menu}
        // arrowLeft={ArrowLeft}
        // arrowRight={ArrowRight}
      />
    </MDBContainer>
  );
};
