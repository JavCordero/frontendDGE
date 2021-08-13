import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import Image from "next/image";
import Cna from "../../public/ucn-cna.png";
import Link from "next/link";

const Footer = () => {
  return (
    <MDBFooter backgroundColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4 mb-md-0">
            <Image src={Cna} alt="UCN CNA" />
            <p className="m-0">
              Derechos reservados Dirección General Estudiantil
            </p>
            <p className="m-0">Universidad Católica del Norte</p>
            <p className="m-0">Fono | Email</p>
          </MDBCol>

          <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li>
                <p className="m-0 fs-6">Área Salud</p>
              </li>
              <li>
                <p className="m-0 fs-6">Fono:</p>
              </li>
              <li>
                <p className="m-0 fs-6">Email:</p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li>
                <p className="m-0">Área Deportes</p>
              </li>
              <li>
                <p className="m-0">Fono:</p>
              </li>
              <li>
                <p className="m-0">Email:</p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li>
                <p className="m-0">Área Arte y Cultura</p>
              </li>
              <li>
                <p className="m-0">Fono:</p>
              </li>
              <li>
                <p className="m-0">Email:</p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li>
                <p className="m-0">Sala Cuna y Jardin Infantil</p>
              </li>
              <li>
                <p className="m-0">Fono:</p>
              </li>
              <li>
                <p className="m-0">Email:</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/">Universidad Católica del Norte</Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;
