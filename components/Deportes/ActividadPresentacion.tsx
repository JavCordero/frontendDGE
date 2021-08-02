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
    <MDBContainer fluid className="w-100 bg-light shadow-5 rounded text-dark pb-5">
      <h2 className="mt-5 mb-4">Actividades Complementarias</h2>
      <MDBRow className="px-4">
        <MDBCol size="12" md="4">
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <img
              className="rounded-circle border border-5 border-primary"
              src={"/deportes/equipo/EduardoVerdejoGreen.png"}
              alt="..."
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
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <img
              className="rounded-circle border border-5 border-primary"
              src={"/deportes/equipo/SusanaGutierrezDinamarca.png"}
              alt="..."
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
