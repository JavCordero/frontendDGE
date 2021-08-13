import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import React from "react";
import { ActividadPresentacion } from "../../components/Deportes/ActividadPresentacion";
import { ActividadComplementaria } from "../../components/Deportes/ActividadComplementaria";

const actividadescomplementarias = () => {
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <Link href="/deportes">Deportes</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          Actividades Complementarias
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <ActividadPresentacion />
      <ActividadComplementaria />
    </>
  );
};

export default actividadescomplementarias;
