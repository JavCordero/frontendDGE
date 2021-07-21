import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import React from "react";
import { Secciones } from "../../components/Deportes/Secciones";
import { Destacados } from "../../components/index/Destacados";

const index = () => {
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Deportes</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <Destacados titulo1="Deportes" titulo2="Destacados" />
      <Secciones />
    </>
  );
};

export default index;
