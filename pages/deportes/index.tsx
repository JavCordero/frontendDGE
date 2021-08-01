import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Placeholder } from "rsuite";
import { Secciones } from "../../components/Deportes/Secciones";
import { Destacados } from "../../components/index/Destacados";
import LoadNoticias from "../../hooks/useLoadNoticias";

const index = () => {
  const [isLoadNotice, setisLoadNotice] = useState(false);
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    const noticiasListas = async () => {
      const noticiasArray = await LoadNoticias("deportes");
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
        <MDBBreadcrumbItem active>Deportes</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      {isLoadNotice ? (
        <Destacados
          noticias={noticias}
          titulo1="Deportes"
          titulo2="Destacados"
        />
      ) : (
        <Placeholder.Graph active height={450} />
      )}
      <Secciones />
    </>
  );
};

export default index;
