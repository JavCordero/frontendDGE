import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Loader, Placeholder } from "rsuite";
import { AuthContext } from "../../../context/AuthContext";
import CheckLogin from "../../../hooks/useCheckLogin";
import { FormAddNoticia } from "../../../components/Intranet/FormAddNoticia";
import Link from "next/link";

const AgregarNoticia = () => {
  const router = useRouter();
  const { checkLogin } = useContext(AuthContext);
  const [isLoged, setIsLoged] = useState(true);
  const [idUser, setIdUser] = useState("");

  useEffect(() => {
    async function verificar() {
      const verificacion = await CheckLogin();
      if (verificacion.rol) {
        checkLogin(verificacion.rol);
        setIdUser(verificacion.id);
        setIsLoged(false);
      } else {
        setIsLoged(true);
        router.push("/login");
      }
    }
    verificar();
  }, []);
  return (
    <>
      {isLoged ? (
        <>
          <Placeholder.Grid rows={5} columns={6} active />
          <Loader backdrop content="Cargando..." vertical />
        </>
      ) : (
        <div>
          <div className="p-5 text-center bg-light">
            <h1 className="mb-3">Agregar Nueva Noticia</h1>
          </div>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link href="/intranet">Intranet</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link href="/intranet/noticias">Noticias</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Nueva Noticia</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <FormAddNoticia idUser={idUser} />
        </div>
      )}
    </>
  );
};

export default AgregarNoticia;
