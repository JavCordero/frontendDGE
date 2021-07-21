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

export const ActividadPresentacion = () => {
  return (
    <MDBContainer fluid className="w-100 bg-light shadow-5 text-dark pb-5">
      <h2 className="mt-5 mb-4">Actividades Complementarias</h2>
      <MDBRow className="px-4">
        <MDBCol size="12" md="4">
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <img
              className="rounded-circle border border-5 border-primary"
              src={"/deportes/equipo/Eduardo.png"}
              alt="..."
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
        <MDBCol size="12" md="4">
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <img
              className="rounded-circle border border-5 border-primary"
              src={"/deportes/equipo/RicardoJuicaSalinas.png"}
              alt="..."
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
        <MDBCol size="12" md="4">
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
