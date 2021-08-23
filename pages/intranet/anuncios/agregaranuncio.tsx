import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/AuthContext";
import CheckLogin from "../../../hooks/useCheckLogin";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import { Placeholder, Loader } from "rsuite";
import { FormAddAnuncio } from "../../../components/Intranet/FormAddAnuncio";

const AgregarAnuncio = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <h1 className="mb-3">Agregar Nuevo Anuncio</h1>
          </div>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link href="/intranet">Intranet</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link href="/intranet/anuncios">Anuncios</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Nuevo Anuncio</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <FormAddAnuncio idUser={idUser} />
        </div>
      )}
    </>
  );
};

export default AgregarAnuncio;
