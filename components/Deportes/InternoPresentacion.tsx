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

export const InternoPresentacion = () => {
  return (
    <MDBContainer
      fluid
      className="w-100 bg-light shadow-5 rounded text-dark p-0 pb-5"
    >
      <TitleLine className="mb-2">Deporte Interno</TitleLine>
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
              src={"/deportes/equipo/RicardoJuicaSalinas.png"}
              alt="..."
              width="600"
              height="600"
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Ricardo Juica Salinas</p>
              <p className="m-0 fs-6">Coordinador Deporte Interno</p>
              <p className="m-0 fs-6">
                <a href="mailto:ruica@ucn.cl">rjuica@ucn.cl</a>
              </p>
              <p className="m-0 fs-6">552 - 35 59 91</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBAccordion alwaysOpen initialActive="panelsStayOpen-collapse1">
            <MDBAccordionItem
              collapseId="panelsStayOpen-collapse1"
              headerTitle="¿Qué es el deporte interno?"
              className="text-justify"
            >
              <p>
                Son diferentes Campeonatos y/o Actividades Recreativas
                destinadas al esparcimiento y sana competencia de alumnos que se
                encuentren con su matrícula vigente. Los puntajes que obtengan
                los primeros lugares de cada competencia, da lugar a adjudicarse
                por un año en particular, el Trofeo de Campeón de los Juegos
                Deportivos Intercarreras. Si una Carrera gana por tres años
                consecutivos este Campeonato, el Trofeo queda para la Carrera y
                la Unidad de Deportes y Recreación deberá disponer de un nuevo
                Trofeo para el año siguiente.
              </p>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
