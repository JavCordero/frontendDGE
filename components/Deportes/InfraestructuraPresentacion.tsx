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

export const InfraestructuraPresentacion = () => {
  return (
    <MDBContainer fluid className="w-100 bg-light shadow-5 rounded text-dark pb-5">
      <h2 className="mt-5 mb-4">Infraestructura Deportiva</h2>
      <MDBRow className="px-4">
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <img
              className="rounded-circle border border-5 border-primary"
              src={"/deportes/equipo/FredyLeytonRivera.png"}
              alt="..."
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
              <p>Por confirmar...</p>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
