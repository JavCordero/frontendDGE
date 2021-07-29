import React, { useState, useEffect } from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import { Destacados } from "../../components/index/Destacados";
import { Secciones } from "../../components/salud/Secciones";
import LoadNoticias from "../../hooks/useLoadNoticias";

const index = () => {
  const [isLoadNotice, setisLoadNotice] = useState(false);
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    const noticiasListas = async () => {
      const noticiasArray = await LoadNoticias();
      console.log(noticiasArray);
      if (noticiasArray.data.length > 0) {
        setisLoadNotice(true);
        setNoticias(noticiasArray.data);
      }
    };
    noticiasListas();
  }, []);
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Salud</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <Destacados noticias={noticias} titulo1="Salud" titulo2="Destacados" />
      <Secciones />
    </>
  );
};

export default index;
