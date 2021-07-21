import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import React from "react";
import { Ramas } from "../../components/Deportes/Ramas";
import { SelectivoPresentacion } from "../../components/Deportes/SelectivoPresentacion";

const deporteselectivo = () => {
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <Link href="/deportes">Deportes</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Deporte Selectivo</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <SelectivoPresentacion />
      <Ramas />
    </>
  );
};

export default deporteselectivo;
