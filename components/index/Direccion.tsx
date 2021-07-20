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

export const Direccion = () => {
  return (
    <MDBContainer fluid className="w-100 bg-light shadow-5 text-dark pb-5">
      <h2 className="mt-5 mb-4">Dirección General Estudiantil DGE</h2>
      <MDBRow className="pb-4">
        <MDBCol>
          <MDBCard
            className="my-2"
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
            className="my-2"
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
            className="my-2"
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
            className="my-2"
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
