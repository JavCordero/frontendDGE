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

export const SelectivoPresentacion = () => {
  return (
    <MDBContainer fluid className="w-100 bg-light shadow-5 rounded text-dark pb-5">
      <h2 className="mt-5 mb-4">Deporte Selectivo</h2>
      <MDBRow className="px-4">
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <img
              className="rounded-circle border border-5 border-primary"
              src={"/deportes/equipo/DiegoGonzalezZambrano.png"}
              alt="..."
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Diego González Zambrano</p>
              <p className="m-0 fs-6">Coordinador Deporte Selectivo</p>
              <p className="m-0 fs-6">
                <a href="mailto:diego.gonzalez01@ucn.cl">
                  diego.gonzalez01@ucn.cl
                </a>
              </p>
              <p className="m-0 fs-6">552 - 35 59 90</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBAccordion alwaysOpen initialActive="panelsStayOpen-collapse1">
            <MDBAccordionItem
              collapseId="panelsStayOpen-collapse1"
              headerTitle="¿Qué es el deporte selectivo?"
              className="text-justify"
            >
              <p>
                Es el Deporte que representa de la Ucn a nivel Federado y/o
                Universitario en distintos ámbitos locales, regionales, zonales,
                nacionales o internacionales. Entre los Deportistas que obtengan
                los primeros lugares a nivel nacional en deportes individuales,
                o sean destacados como mejores goleadores, mejor arquero, o
                jugador fair play en deportes colectivos, se eligen a los “Mejor
                Deportista de la Ucn – Categoría Damas y Categoría Varones”,
                cuya Máxima Distinción es entregada en la “Ceremonia de
                Premiación del Año Deportivo” que se realiza en el mes de
                diciembre de cada año. En esta misma Ceremonia, la Unidad de
                Deportes y Recreación distingue en forma especial “La
                Trayectoria Deportiva”, que recae en aquel deportista que
                durante su vida estudiantil ha integrado una Rama o Selección en
                forma ininterrumpida mientras ha cursados sus estudios en la
                Ucn, destacando por sus cualidades personales, humanas y
                deportivas, siendo un “referente” entre sus co-equipos.
              </p>
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId="panelsStayOpen-collapse2"
              headerTitle="Deporte Federado"
              className="text-justify"
            >
              <p>
                Participan alumnos, ex alumnos y simpatizantes de la Ucn en
                competencias locales organizadas por las Asociaciones y Ligas
                Deportivas a nivel local, zonal, campeonatos por invitación y
                exhibiciones. Algunas Ramas están integradas por menores de edad
                agrupados en Divisiones Infantiles según sea el caso
              </p>
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId="panelsStayOpen-collapse3"
              headerTitle="Deporte Universitario"
              className="text-justify"
            >
              <p>
                Participan sólo alumnos con matrícula vigente que conforman las
                Ramas, de las cuales los Directores Técnicos eligen a los
                mejores exponentes quienes integran las Selecciones
                Universitarias que representan a la Ucn en las competencias de
                la Federación Nacional Universitaria de Deportes - Fenaude y de
                la Liga Deportiva de la Educación Superior -
              </p>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
