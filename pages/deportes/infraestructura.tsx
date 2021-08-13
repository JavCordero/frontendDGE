import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import React from "react";
import { InfraestructuraPresentacion } from "../../components/Deportes/InfraestructuraPresentacion";
import { SliderInfraestructura } from "../../components/Deportes/SliderInfraestructura";

const infraestructura = () => {
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <Link href="/deportes">Deportes</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Infraestructura Deportiva</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <InfraestructuraPresentacion />
      <SliderInfraestructura />
    </>
  );
};

export default infraestructura;
