import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import React from "react";
import Direccion from "../../components/Deportes/Direccion";
import { MisionVisionObjetivo } from "../../components/Deportes/MisionVisionObjetivo";

const nosotros = () => {
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <Link href="/deportes">Deportes</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Nosotros</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <Direccion />
      <MisionVisionObjetivo />
    </>
  );
};

export default nosotros;
