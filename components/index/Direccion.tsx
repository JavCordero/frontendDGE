import React from "react";
import imageProfile from "../../public/profile.png";
import Image from "next/image";

import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import TitleLine from "../others/TitleLine";

export const Direccion = () => {
  return (
    <MDBContainer fluid className="w-100 bg-light shadow-5 rounded text-dark pb-5 p-0">
      <TitleLine>Dirección General Estudiantil DGE</TitleLine>
      <MDBRow className="pb-4 ml-auto mr-auto">
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "15rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Image
              className="rounded-circle border border-5 border-primary"
              src={imageProfile}
              alt="..."
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Nombre</p>
              <p className="m-0 fs-6">Cargo</p>
              <p className="m-0 fs-6">Email</p>
              <p className="m-0 fs-6">Telefono</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "15rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Image
              className="rounded-circle border border-5 border-primary"
              src={imageProfile}
              alt="..."
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Nombre</p>
              <p className="m-0 fs-6">Cargo</p>
              <p className="m-0 fs-6">Email</p>
              <p className="m-0 fs-6">Telefono</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "15rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Image
              className="rounded-circle border border-5 border-primary"
              src={imageProfile}
              alt="..."
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Nombre</p>
              <p className="m-0 fs-6">Cargo</p>
              <p className="m-0 fs-6">Email</p>
              <p className="m-0 fs-6">Telefono</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="my-2 ml-auto mr-auto"
            style={{ width: "15rem", backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Image
              className="rounded-circle border border-5 border-primary"
              src={imageProfile}
              alt="..."
            />
            <MDBCardBody className="text-center">
              <p className="m-0 fs-5">Nombre</p>
              <p className="m-0 fs-6">Cargo</p>
              <p className="m-0 fs-6">Email</p>
              <p className="m-0 fs-6">Telefono</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
