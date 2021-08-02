import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/AuthContext";
import CheckLogin from "../../../hooks/useCheckLogin";

import { Loader, Placeholder } from "rsuite";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import { FormAddEvento } from "../../../components/Intranet/FormAddEvento";

const agregarevento = () => {
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
            <h1 className="mb-3">Agregar Nuevo Evento</h1>
          </div>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <a href="/intranet">Intranet</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href="/intranet/eventos">Eventos</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Nueva Evento</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <FormAddEvento idUser={idUser} />
        </div>
      )}
    </>
  );
};

export default agregarevento;
