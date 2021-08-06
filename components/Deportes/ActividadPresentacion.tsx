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

export const ActividadPresentacion = () => {
  return (
    <MDBContainer
      fluid
      className="w-100 bg-light shadow-5 rounded text-dark p-0 pb-5"
    >
      <TitleLine className="mb-2">Actividades Complementarias</TitleLine>
      <MDBRow className="p-0 m-0 gy-2">
        <MDBCol size="12" md="4">
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
              src={"/deportes/equipo/EduardoVerdejoGreen.png"}
              alt="..."
              width="600"
              height="600"
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Eduardo Verdejo Green</p>
              <p className="m-0 fs-6">Jefe Deportes y Recreación</p>
              <p className="m-0 fs-6">
                <a href="mailto:everdejo@ucn.cl">everdejo@ucn.cl</a>
              </p>
              <p className="m-0 fs-6">552 - 35 59 92</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="12" md="4">
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
              src={"/deportes/equipo/SusanaGutierrezDinamarca.png" as any}
              alt="..."
              width="600"
              height="600"
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Susana Gutiérrez Dinamarca</p>
              <p className="m-0 fs-6">Secertaria Ejecutiva</p>
              <p className="m-0 fs-6">
                <a href="mailto:sgutierr@ucn.cl">sgutierr@ucn.cl</a>
              </p>
              <p className="m-0 fs-6">552 - 35 59 95</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="12" md="4">
          <MDBAccordion alwaysOpen initialActive="panelsStayOpen-collapse1">
            <MDBAccordionItem
              collapseId="panelsStayOpen-collapse1"
              headerTitle="¿Qué son las actividades complementarias?"
              className="text-justify"
            >
              <p>
                Actividades a cargo del Jefe de Deportes y Recreación y de la
                Secretaria Ejecutiva de la Unidad. En este ámbito se consideran
                actividades de carácter recreativo y/o formativo, que se
                realizan en forma sistemática y de duración variable durante el
                año calendario. Son de libre participación, previa inscripción
                en las oficinas de Deportes y Recreación. Abiertas a toda la
                comunidad universitaria y antofagastina. Cada curso o taller
                están a cargo de Instructores certificados por disciplina.
                Participan niños desde los 6 años, jóvenes y adultos damas y
                varones
              </p>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
