import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import React from "react";
import { ActividadInterno } from "../../components/Deportes/ActividadInterno";
import { InternoPresentacion } from "../../components/Deportes/InternoPresentacion";

const deporteinterno = () => {
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <Link href="/deportes">Deportes</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Deporte Interno</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <InternoPresentacion />
      <ActividadInterno />
    </>
  );
};

export default deporteinterno;
