import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import React from "react";
import Image from "next/image";
import TitleLine from "../others/TitleLine";

export const InfraestructuraPresentacion = () => {
  return (
    <MDBContainer
      fluid
      className="w-100 bg-light shadow-5 rounded text-dark p-0 pb-5"
    >
      <TitleLine className="mb-2">Infraestructura Deportiva</TitleLine>

      <MDBRow className="p-0 m-0 gy-2">
        <MDBCol>
          <MDBCard
            className="ml-auto mr-auto"
            style={{
              width: "20rem",
              backgroundColor: "rgba(0,0,0,0)",
              maxWidth: "100%",
            }}
          >
            <Image
              className="rounded-circle border border-5 border-primary"
              src={"/deportes/equipo/FredyLeytonRivera.png" as any}
              alt="..."
              width="600"
              height="600"
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Fredy Leyton Rivera</p>
              <p className="m-0 fs-6">Asistente Recintos Deportivos</p>
              <p className="m-0 fs-6">
                <a href="mailto:fleyton@ucn.cl">fleyton@ucn.cl</a>
              </p>
              <p className="m-0 fs-6">552 - 35 58 87</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBAccordion alwaysOpen initialActive="panelsStayOpen-collapse1">
            <MDBAccordionItem
              collapseId="panelsStayOpen-collapse1"
              headerTitle="¿Cómo solicitar recintos deportivos?"
              className="text-justify"
            >
              <p>
                El Gimnasio Luis Bisquertt Susarte cuenta en su interior con
                cancha de baloncesto y vóleibol, pista de gimnasia, muro de
                escalada, sala de artes marciales, sala de pesas, espacio para
                levantamiento de pesas y espacio para tenis de mesa. En el
                exterior se encuentran 4 canchas de baby fútbol y 2 canchas de
                arcilla para tenis El funcionamiento es de lunes a viernes de
                08.00 a 22.00 hrs. y los sábados de 09.00 a 19.00 hrs. Tanto
                alumnos como funcionarios pueden pedir los recintos deportivos
                al teléfono 2355887 o en forma presencial en la oficina
                presentando credencial universitaria o de funcionario
              </p>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
