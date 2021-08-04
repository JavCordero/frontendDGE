import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import Image from "next/image";
import imageProfile from "../../public/profile.png";

const Direccion = () => {
  return (
    <MDBContainer fluid className="w-100 bg-light shadow-5 text-dark pb-5">
      <h2 className="mt-5 mb-4">Equipo Deportes UCN</h2>
      <MDBRow className="px-4">
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
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
              <p className="m-0 fs-6">Jefe Deoirtes y Recreación</p>
              <p className="m-0 fs-6">
                <a href="mailto:everdejo@ucn.cl">everdejo@ucn.cl</a>
              </p>
              <p className="m-0 fs-6">552 - 35 59 92</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Image
              className="rounded-circle border border-5 border-primary"
              src={"/deportes/equipo/SusanaGutierrezDinamarca.png"}
              alt="..."
              width="600"
              height="600"
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Susana Gutiérrez Dinamarca</p>
              <p className="m-0 fs-6">Secretaria Ejecutiva</p>
              <p className="m-0 fs-6">
                <a href="mailto:sgutierr@ucn.cl">sgutierr@ucn.cl</a>
              </p>
              <p className="m-0 fs-6">552 - 35 59 95</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="px-4 justify-content-md-center">
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Image
              className="rounded-circle border border-5 border-primary"
              src={"/deportes/equipo/DiegoGonzalezZambrano.png"}
              alt="..."
              width="600"
              height="600"
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Diego González Zambrano</p>
              <p className="m-0 fs-6">Coordinador Deporte Selectivo</p>
              <p className="m-0 fs-6">
                <a href="mailto:diego.gonzalez01@ucn.cl">
                  diego.gonzalez01@ucn.cl
                </a>
              </p>
              <p className="m-0 fs-6">552 - 35 59 95</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
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
                <a href="mailto:rjuica@ucn.cl">rjuica@ucn.cl</a>
              </p>
              <p className="m-0 fs-6">552 - 35 59 91</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Image
              className="rounded-circle border border-primary"
              src={"/deportes/equipo/FredyLeytonRivera.png"}
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
      </MDBRow>
    </MDBContainer>
  );
};

export default Direccion;
